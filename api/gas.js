"use strict";

const DEFAULT_GAS_URL =
  "https://script.google.com/macros/s/AKfycbyOXyISIolfDFMcX7s1LnqsHdVA99J-4Fti1lv7KcpCrx6DaJi-LKZHxRtKiba39Jsd/exec";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const gasUrl = process.env.GAS_BACKEND_URL || DEFAULT_GAS_URL;
  const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});

  try {
    const upstream = await fetch(gasUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body,
      redirect: "follow",
      signal: AbortSignal.timeout(50000),
    });
    const text = await upstream.text();

    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(upstream.ok ? 200 : 502).send(text);
  } catch (error) {
    console.error("GAS proxy error", error);
    return res.status(502).json({
      ok: false,
      error: "後端暫時未能連線，請稍後再試",
    });
  }
};

module.exports.config = { maxDuration: 60 };
