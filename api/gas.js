"use strict";

// 預設 GAS 後端（可於 Vercel 用環境變數 GAS_BACKEND_URL 覆蓋）
const DEFAULT_GAS_URL =
  "https://script.google.com/macros/s/AKfycbyOXyISIolfDFMcX7s1LnqsHdVA99J-4Fti1lv7KcpCrx6DaJi-LKZHxRtKiba39Jsd/exec";

const TIMEOUT_MS = 50000;

// GAS 網頁應用 POST 之後會 302 去一個驗證網址（script.googleusercontent.com/macros/echo）。
// 該跳轉目標必須使用 GET 方法訪問（按 HTTP 規範及 GAS 沙盒安全設計）。
// 之前 v43 錯誤地用 redirect:"manual" 並在跳轉後繼續以 POST 打目標網址，導致 GAS 報錯。
function isRedirect(status) {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}

async function callGas(url, body, cookie, depth, method = "POST") {
  if (depth < 0) throw new Error("GAS 後端跳轉次數過多");
  const headers = {};
  if (method === "POST") {
    headers["Content-Type"] = "text/plain;charset=utf-8";
  }
  if (cookie) headers["Cookie"] = cookie;
  const r = await fetch(url, {
    method,
    headers,
    body: method === "POST" ? body : undefined,
    redirect: "manual",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (isRedirect(r.status)) {
    const loc = r.headers.get("location");
    const sc = r.headers.get("set-cookie");
    if (!loc) throw new Error("GAS 後端回傳跳轉但無 Location");
    // GAS 302 跳轉目的地須用 GET 讀取 JSON 結果
    return callGas(loc, null, sc || cookie, depth - 1, "GET");
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
    const upstream = await callGas(gasUrl, body, "", 4, "POST");
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
    return res.status(502).json({ ok: false, error: "後端暫時未能連線，請稍後再試 (" + String(error.message || error) + ")" });
  }
};

module.exports.config = { maxDuration: 60 };
