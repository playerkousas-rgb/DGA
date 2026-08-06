"use strict";

// 預設 GAS 後端（可於 Vercel 用環境變數 GAS_BACKEND_URL 覆蓋）
const DEFAULT_GAS_URL =
  "https://script.google.com/macros/s/AKfycbyOXyISIolfDFMcX7s1LnqsHdVA99J-4Fti1lv7KcpCrx6DaJi-LKZHxRtKiba39Jsd/exec";

const TIMEOUT_MS = 50000;

// GAS 網頁應用 POST 之後會 302 去一個驗證網址。
// 如果交畀 fetch 自動跟（redirect:"follow"），按規格 301/302 會將 POST 轉做 GET，
// 打到 doGet 就會回 HTML（「連唔到後端」嘅真兇之一）。
// 所以呢度用 redirect:"manual" 自己跟 3xx，並且保留 POST 方法，必要時一併帶埋 Set-Cookie。
function isRedirect(status) {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}

async function callGas(url, body, cookie, depth) {
  if (depth < 0) throw new Error("GAS 後端跳轉次數過多");
  const headers = { "Content-Type": "text/plain;charset=utf-8" };
  if (cookie) headers["Cookie"] = cookie;
  const r = await fetch(url, {
    method: "POST",
    headers,
    body,
    redirect: "manual",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (isRedirect(r.status)) {
    const loc = r.headers.get("location");
    const sc = r.headers.get("set-cookie");
    if (!loc) throw new Error("GAS 後端回傳跳轉但無 Location");
    return callGas(loc, body, sc || cookie, depth - 1);
  }
  return r;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const gasUrl = process.env.GAS_BACKEND_URL || DEFAULT_GAS_URL;
  const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});

  try {
    const upstream = await callGas(gasUrl, body, "", 4);
    const text = (await upstream.text()) || "";

    // GAS 正常會回 JSON；如果回咗 HTML（例如部署權限未開放「任何人」／未初始化／網址過期），
    // 千祈唔好直接 forward 個 HTML 出去，否則前端 r.json() 會炸出「Unexpected token '<'」。
    let parsed = null;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      parsed = null;
    }

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    if (parsed === null) {
      console.error("GAS 回咗非 JSON：", text.slice(0, 300));
      return res.status(502).json({
        ok: false,
        error:
          "GAS 後端回傳咗非 JSON 內容（可能部署權限未設為「任何人」、未初始化，或網址過期）。請到 GAS 重新部署並設「任何人」可存取，或於 Vercel 設定 GAS_BACKEND_URL。",
      });
    }
    return res.status(200).json(parsed);
  } catch (error) {
    console.error("GAS proxy error", error);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(502).json({ ok: false, error: "後端暫時未能連線，請稍後再試" });
  }
};

module.exports.config = { maxDuration: 60 };
