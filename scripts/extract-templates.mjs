#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════
   extract-templates.mjs — 從 Code.gs 的 TEMPLATES_B64 還原 5 張官方 Excel 模板
   ──────────────────────────────────────────────────────────────────
   repo 唔再保存「原始官方表格-5個分支/」資料夾（死重瘦身，慳 212KB）：
   模板已逐位元組內嵌喺 Code.gs。需要原稿時執行：
       npm run extract-templates
   會喺 repo 還原出「原始官方表格-5個分支/」（.vercelignore 已擋住佢，
   就算還原咗都不會上傳 Vercel；唔好 git add 佢）。
   ══════════════════════════════════════════════════════════════════════ */
"use strict";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const GS = join(ROOT, "Code.gs");
const OUT_DIR = join(ROOT, "原始官方表格-5個分支");

const NAMES = {
  grasshopper: "小童軍團評分表 dga2026_marksheet_grasshopper.xlsx",
  cub:         "幼童軍團評分表 dga2026_marksheet_cub.xlsx",
  scout:       "童軍團評分表 dga2026_marksheet_scout.xlsx",
  venture:     "深資童軍團評分表 dga2026_marksheet_venture.xlsx",
  rover:       "樂行童軍團評分表 dga2026_marksheet_rover.xlsx",
};

if (!existsSync(GS)) { console.error("✗ 找不到 Code.gs（模板就係內嵌喺佢入面）"); process.exit(1); }
const gs = readFileSync(GS, "utf8");
const start = gs.indexOf("const TEMPLATES_B64=");
const end = gs.indexOf("\nconst CELL_MAPS", start);
if (start < 0 || end < 0) { console.error("✗ Code.gs 搵唔到 TEMPLATES_B64 區塊"); process.exit(1); }
const block = gs.slice(start, end);

mkdirSync(OUT_DIR, { recursive: true });
let n = 0;
for (const [key, fname] of Object.entries(NAMES)) {
  const m = block.match(new RegExp('"' + key + '":\\s*"([A-Za-z0-9+/=]+)"'));
  if (!m) { console.error("✗ TEMPLATES_B64 缺少分支：" + key); process.exit(1); }
  const buf = Buffer.from(m[1], "base64");
  if (buf[0] !== 0x50 || buf[1] !== 0x4b) { console.error("✗ " + key + " 解碼後唔係有效 xlsx"); process.exit(1); }
  writeFileSync(join(OUT_DIR, fname), buf);
  console.log("✓ 還原 " + fname + "（" + buf.length + " bytes）");
  n++;
}
console.log("\n✓ 已還原 " + n + " 張官方模板去「原始官方表格-5個分支/」");
console.log("  （已被 .vercelignore 排除，不會上傳 Vercel；仅供本機參考，唔好 git add）");
