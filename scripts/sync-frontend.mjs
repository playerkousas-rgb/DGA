#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════
   sync-frontend.mjs — 將 index.html 重新 base64 內嵌回 Code.gs 的 APP_B64
   ──────────────────────────────────────────────────────────────────
   改完 index.html 之後必須執行呢個腳本，再將 Code.gs 貼回 GAS 重新部署，
   否則 GAS 網址（/exec）會繼續用舊版前端（npm run check 會偵測到漂移）。
   只取代 APP_B64 字串本身，Code.gs 其他內容逐位元組保留。
   ══════════════════════════════════════════════════════════════════════ */
"use strict";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const GS = join(ROOT, "Code.gs");
const HTML = join(ROOT, "index.html");

if (!existsSync(GS)) { console.error("✗ 找不到 Code.gs"); process.exit(1); }
if (!existsSync(HTML)) { console.error("✗ 找不到 index.html"); process.exit(1); }

const gs = readFileSync(GS, "utf8");
const html = readFileSync(HTML, "utf8");
const MARK = 'const APP_B64="';
const start = gs.indexOf(MARK);
if (start < 0) { console.error("✗ Code.gs 搵唔到 const APP_B64=\" 標記"); process.exit(1); }
const valStart = start + MARK.length;
const valEnd = gs.indexOf('"', valStart);
if (valEnd < 0) { console.error("✗ APP_B64 字串無結尾引號"); process.exit(1); }

const oldB64 = gs.slice(valStart, valEnd);
const newB64 = Buffer.from(html, "utf8").toString("base64");
if (oldB64 === newB64) { console.log("✓ 已同步：APP_B64 與 index.html 一致，無需更改"); process.exit(0); }

writeFileSync(GS, gs.slice(0, valStart) + newB64 + gs.slice(valEnd));
console.log("✓ 已將 index.html（" + Buffer.byteLength(html) + " bytes）重新內嵌入 Code.gs 的 APP_B64");
console.log("  ⚠️  記得將新 Code.gs 貼回 GAS：部署 → 管理部署 → 編輯 → 新版本 → 部署");
