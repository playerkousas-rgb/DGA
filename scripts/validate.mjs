#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════
   validate.mjs — 專案守護檢查（零依賴，只用 Node 內建模組）
   ──────────────────────────────────────────────────────────────────
   用法：
     npm run check   完整檢查（本機 repo 全量：含 Code.gs 前端同步守衛）
     npm run lint    靜態檢查（語法、危險模式、垃圾檔、上傳體積預算）
     npm run build   生產建置驗證（Vercel build 階段執行；Code.gs 等
                     已被 .vercelignore 排除的檔案會自動跳過）
   ──────────────────────────────────────────────────────────────────
   防增肥預算（超出即 FAIL，令 Vercel 部署直接失敗，垃圾上唔到線）：
     • 單一上傳檔案 ≤ 512 KB
     • 全部上傳檔案合計 ≤ 1 MB
   ══════════════════════════════════════════════════════════════════════ */
"use strict";
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { join, relative, sep, posix } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const MODE = process.argv.includes("--build") ? "build"
           : process.argv.includes("--lint")  ? "lint"
           : "check";

const MAX_SINGLE_BYTES = 512 * 1024;
const MAX_TOTAL_BYTES  = 1024 * 1024;

let failures = 0, warnings = 0;
const ok   = (m) => console.log("  \x1b[32m✓\x1b[0m " + m);
const warn = (m) => { warnings++; console.log("  \x1b[33m⚠\x1b[0m " + m); };
const fail = (m) => { failures++; console.log("  \x1b[31m✗\x1b[0m " + m); };
const head = (m) => console.log("\n\x1b[1m" + m + "\x1b[0m");

/* ---------- 極簡 .vercelignore 匹配器（支援本專案用到嘅語法：
   名稱 / 尾斜線目錄 / 頭斜線錨定 / * 萬用字元；無 negation） ---------- */
function loadIgnore() {
  const p = join(ROOT, ".vercelignore");
  if (!existsSync(p)) return null;
  return readFileSync(p, "utf8").split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const dirOnly = l.endsWith("/");
      let pat = l.replace(/\/$/, "");
      const anchored = pat.includes("/");
      pat = pat.replace(/^\//, "");
      const rx = new RegExp("^" + pat.split("*").map((s) => s.replace(/[.+?^${}()|[\]\\]/g, "\\$&")).join("[^/]*") + "$");
      return { rx, dirOnly, anchored, raw: l };
    });
}
function isIgnored(relPath, isDir, pats) {
  const parts = relPath.split("/");
  const base = parts[parts.length - 1];
  for (const p of pats) {
    if (p.dirOnly && !isDir) continue;
    if (p.anchored) {
      if (p.rx.test(relPath)) return true;
    } else {
      if (p.rx.test(base)) return true;
      if (!isDir && parts.length > 1 && p.rx.test(parts[parts.length - 2])) return true;
    }
  }
  return false;
}
function walk(dir, pats, out) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const abs = join(dir, name);
    const rel = relative(ROOT, abs).split(sep).join(posix.sep);
    const isDir = statSync(abs).isDirectory();
    if (pats && isIgnored(rel, isDir, pats)) continue;
    if (isDir) walk(abs, pats, out);
    else out.push({ rel, abs, size: statSync(abs).size });
  }
  return out;
}

/* ---------- 共用檢查 ---------- */
function checkVercelJson() {
  head("vercel.json");
  const p = join(ROOT, "vercel.json");
  if (!existsSync(p)) return fail("缺少 vercel.json");
  try {
    const j = JSON.parse(readFileSync(p, "utf8"));
    ok("JSON 格式正確");
    if (j.cleanUrls !== true) warn("cleanUrls 唔係 true（應保持 true）");
    if (!Array.isArray(j.headers)) warn("headers 設定缺失");
  } catch (e) { fail("JSON 解析失敗：" + e.message); }
}

function checkIndexHtml() {
  head("index.html（SPA 前端）");
  const p = join(ROOT, "index.html");
  if (!existsSync(p)) return fail("缺少 index.html —— 網站會白屏！");
  const t = readFileSync(p, "utf8");
  ok("存在（" + Buffer.byteLength(t) + " bytes）");
  if (Buffer.byteLength(t) < 50 * 1024) fail("index.html 細過 50KB —— 疑似被截斷");
  for (const marker of ["<!DOCTYPE html>", "</html>", "DEFAULT_GAS_URL=", "function boot", 'id="app"'])
    if (!t.includes(marker)) fail("缺少必要標記：" + marker);
  const open = (t.match(/<script\b/g) || []).length, close = (t.match(/<\/script>/g) || []).length;
  if (open !== close) fail("<script> 開閉標籤不平衡（" + open + " vs " + close + "）"); else ok("<script> 標籤平衡（" + open + " 對）");
  if (/\bdebugger\b/.test(t)) fail("發現 debugger 陳述式");
  if (t.includes("\uFFFD")) fail("發現亂碼字元 U+FFFD");
  ok("無 debugger / 無亂碼");
}

function checkApiGas() {
  head("api/gas.js（Serverless 代理）");
  const rel = "api/gas.js";
  const p = join(ROOT, rel);
  if (!existsSync(p)) return fail("缺少 api/gas.js —— 前端 fetch /api/gas 會 404！");
  try { execFileSync(process.execPath, ["--check", p], { stdio: "pipe" }); ok("語法正確（node --check）"); }
  catch (e) { return fail("語法錯誤：" + e.stderr.toString().slice(0, 300)); }
  try {
    const req = createRequire(import.meta.url);
    delete req.cache?.[p];
    const mod = req(p);
    if (typeof mod !== "function") return fail("module.exports 唔係 handler function");
    ok("handler 可正常載入（module.exports 係 function）");
    if (!mod.config || typeof mod.config.maxDuration !== "number") warn("config.maxDuration 未設定");
    else ok("config.maxDuration = " + mod.config.maxDuration);
  } catch (e) { fail("載入失敗：" + e.message); }
  const t = readFileSync(p, "utf8");
  const m = t.match(/DEFAULT_GAS_URL\s*=\s*"(https:\/\/script\.google\.com\/[^"]+)"/);
  if (!m) fail("DEFAULT_GAS_URL 缺失或格式錯誤"); else ok("DEFAULT_GAS_URL 指向 script.google.com");
  if (t.includes("\uFFFD")) fail("發現亂碼字元 U+FFFD");
}

function checkIgnoreFiles() {
  head(".vercelignore / .gitignore（防增肥配置）");
  const v = join(ROOT, ".vercelignore");
  if (!existsSync(v)) {
    // Vercel build 容器唔會包含 .vercelignore 本身（佢喺上傳階段已被平台消費）
    if (MODE === "build") ok(".vercelignore 唔喺 build 容器（上傳階段已由 Vercel 平台應用）—— 跳過");
    else return fail("缺少 .vercelignore —— 成個 repo 會原封不動上傳 Vercel！");
  } else {
    const t = readFileSync(v, "utf8");
    const lines = t.split("\n").map((l) => l.trim().replace(/\/$/, ""));
    for (const must of [".git", "node_modules", "*.bak", "*.log", "uploads", "Code.gs", "原始官方表格-5個分支"])
      if (!lines.includes(must.replace(/\/$/, ""))) fail(".vercelignore 缺少必要條目：" + must);
    ok(".vercelignore 必要條目齊全");
  }
  if (!existsSync(join(ROOT, ".gitignore"))) {
    if (MODE === "build") ok(".gitignore 唔喺上傳範圍（git 專用，Vercel 唔需要）—— 跳過");
    else fail("缺少 .gitignore");
  }
  else ok(".gitignore 存在");
}

/* ---------- Code.gs 前端同步守衛（check / lint；build 模式自動跳過） ---------- */
function checkCodeGsSync() {
  head("Code.gs ⇄ index.html 前端同步守衛");
  const p = join(ROOT, "Code.gs");
  if (!existsSync(p)) {
    if (MODE === "build") ok("Code.gs 唔喺上傳範圍（已被 .vercelignore 排除）—— 跳過");
    else warn("Code.gs 唔存在，跳過同步檢查");
    return;
  }
  const gs = readFileSync(p, "utf8");
  const m = gs.match(/const APP_B64="([A-Za-z0-9+/=]+)"/);
  if (!m) return fail("Code.gs 搵唔到 APP_B64");
  let dec;
  try { dec = Buffer.from(m[1], "base64").toString("utf8"); }
  catch (e) { return fail("APP_B64 解碼失敗：" + e.message); }
  const idx = readFileSync(join(ROOT, "index.html"), "utf8");
  if (dec === idx) ok("APP_B64 與 index.html 逐位元組一致（" + Buffer.byteLength(dec) + " bytes）");
  else fail("❗前端漂移：index.html 已改動但 Code.gs 內嵌嘅 APP_B64 未更新。\n      GAS 部署會繼續用舊版前端！請執行：npm run sync-frontend 再重新部署 GAS。");
  // 模板完整性：5 個分支、每個都係有效 xlsx (ZIP magic)
  const ts = gs.indexOf("const TEMPLATES_B64="), te = gs.indexOf("\nconst CELL_MAPS", ts);
  if (ts < 0 || te < 0) return warn("TEMPLATES_B64 結構異常，跳過模板檢查");
  const block = gs.slice(ts, te);
  for (const k of ["grasshopper", "cub", "scout", "venture", "rover"]) {
    const mm = block.match(new RegExp('"' + k + '":\\s*"([A-Za-z0-9+/=]+)"'));
    if (!mm) { fail("TEMPLATES_B64 缺少分支：" + k); continue; }
    const buf = Buffer.from(mm[1], "base64");
    if (buf[0] === 0x50 && buf[1] === 0x4b) ok("模板 " + k + " 完整（" + buf.length + " bytes，ZIP/xlsx 格式正確）");
    else fail("模板 " + k + " 唔係有效 xlsx（ZIP magic 錯誤）");
  }
}

/* ---------- 垃圾檔掃描 ---------- */
function checkJunk(allFiles) {
  head("垃圾檔掃描（*.bak / *.tmp / *.old / *.log / node_modules）");
  const junk = allFiles.filter((f) => /\.(bak|tmp|old|log|orig|swp)$/i.test(f.rel));
  if (junk.length) junk.forEach((f) => fail("發現垃圾檔：" + f.rel));
  else ok("無備份／暫存／日誌垃圾檔");
  if (existsSync(join(ROOT, "node_modules"))) fail("node_modules 唔應該入 repo（應由 .gitignore 擋住）");
  else ok("無 node_modules 入 repo");
}

/* ---------- 上傳體積預算（防增肥核心） ---------- */
function checkUploadBudget() {
  head("Vercel 上傳體積預算（防增肥）");
  const pats = loadIgnore();
  // 喺 Vercel build 容器內冇 .vercelignore（上傳階段已被平台應用）：
  // 容器入面嘅全部檔案就係「會上線嘅檔案」，直接對佢哋計預算。
  const files = walk(ROOT, pats, []);
  if (!pats) {
    if (MODE !== "build") return fail(".vercelignore 讀取失敗，無法計算上傳體積");
    ok("build 容器模式：以容器內全部檔案計算預算");
  }
  let total = 0;
  for (const f of files) {
    total += f.size;
    if (f.size > MAX_SINGLE_BYTES) fail("單一檔案超過 512KB：" + f.rel + "（" + Math.round(f.size / 1024) + "KB）");
  }
  console.log("    會上傳嘅檔案（" + files.length + " 個）：");
  for (const f of files.sort((a, b) => b.size - a.size))
    console.log("      " + String(Math.round(f.size / 1024) + "KB").padStart(7) + "  " + f.rel);
  if (total > MAX_TOTAL_BYTES) fail("上傳總體積 " + Math.round(total / 1024) + "KB 超過 1MB 預算 —— 請將大檔案加入 .vercelignore");
  else ok("上傳總體積 " + Math.round(total / 1024) + "KB（預算 1024KB 內）");
  // 必要檔案必須喺上傳範圍
  for (const must of ["index.html", "api/gas.js", "vercel.json"])
    if (!files.some((f) => f.rel === must)) fail("必要檔案被 .vercelignore 誤擋：" + must);
  ok("必要檔案（index.html / api/gas.js / vercel.json）都會上傳");
  // 敏感檔案絕不能上傳
  let bannedFound = false;
  for (const banned of ["Code.gs", ".env"])
    if (files.some((f) => f.rel === banned)) { fail("❗敏感檔案將會上傳：" + banned + "（會公開洩漏後端／密碼）"); bannedFound = true; }
  if (!bannedFound) ok("敏感檔案（Code.gs / .env）確認唔會上傳");
}

/* ---------- package.json 極簡守衛 ---------- */
function checkPackageJson() {
  head("package.json（極簡依賴守衛）");
  const p = join(ROOT, "package.json");
  if (!existsSync(p)) return fail("缺少 package.json");
  const j = JSON.parse(readFileSync(p, "utf8"));
  if (j.private !== true) fail("package.json 應設 private:true");
  else ok("private:true（唔會意外發佈）");
  const deps = Object.keys(j.dependencies || {}), dev = Object.keys(j.devDependencies || {});
  if (deps.length) fail("dependencies 必須保持零依賴！發現：" + deps.join(", "));
  else ok("dependencies 零依賴 ✓（前端庫一律 CDN 按需載入，唔入 bundle）");
  if (dev.length) warn("devDependencies 有 " + dev.length + " 個套件（僅建置可用，記得唔好搬入 dependencies）");
  else ok("devDependencies 零依賴 ✓");
  for (const [name, cmd] of Object.entries(j.scripts || {})) {
    const m = String(cmd).match(/scripts\/([\w.-]+)/);
    if (m && !existsSync(join(ROOT, "scripts", m[1]))) fail("script \"" + name + "\" 引用咗唔存在嘅 scripts/" + m[1]);
  }
  ok("所有 npm scripts 引用嘅檔案都存在");
}

/* ---------- main ---------- */
console.log("\x1b[1mDGA 專案守護檢查 — 模式：" + MODE + "\x1b[0m");
const allFiles = walk(ROOT, null, []);
checkVercelJson();
checkIndexHtml();
checkApiGas();
checkIgnoreFiles();
checkPackageJson();
checkCodeGsSync();
checkJunk(allFiles);
checkUploadBudget();

console.log("\n" + "─".repeat(46));
if (failures) { console.log("\x1b[31m✗ 結果：" + failures + " 項失敗、" + warnings + " 項警告 —— 請修正後再部署\x1b[0m\n"); process.exit(1); }
console.log("\x1b[32m✓ 全部通過（" + warnings + " 項警告）\x1b[0m\n");
