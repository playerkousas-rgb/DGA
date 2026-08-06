# 🚀 部署指南（單檔版 · v43 · 一個 Code.gs 搞掂）

## 部署 GAS（約 5 分鐘）
1. [Google Sheets](https://sheets.google.com) 新增試算表 → **擴充功能 → Apps Script**。
   （或直接去 [script.google.com](https://script.google.com) 新增獨立專案都得。）
2. 刪走預設 `Code.gs` 全部內容，**貼上 `Code.gs` 全部內容**。
   （前端正以 base64 包埋喺入面，**唔使再另建獨立 HTML 檔**。）
3. 💾 儲存。
4. **部署 → 新增部署 → 齒輪 ⚙️ → 網頁應用程式**
   - 執行身分：**我**
   - 存取權：**任何人**
   - → 部署 → 複製 `/exec` URL（首次會要授權：檢視權限→選帳號→進階→前往→允許）。
5. **開嗰個 `/exec` URL** → 系統會**自動初始化**（建表 + 帳號 + 合格線）。
6. login：`HKIR / 1234`（地域）、`CHW / 1234`（區）、`CHWDC / 1234`（區總監）、隱藏超管。

> ✅ v43：新增「🔑 更改密碼」（審核員／區總監／地域自行改密碼，驗證舊密碼；隱藏超管密碼寫死喺 Code.gs，唔支援改密碼）；修復審核員批核／區總監確認必定失敗（bad column passFail）嘅嚴重 BUG；修復下載 Excel 後返回功能消失；合格線改為一次過批量儲存並正確顯示錯誤；修復跨支部計分互相污染。
> ✅ v42 起徹底解決「填表後登入崩潰（Null 異常）」及 GAS RPC Date 物件序列化問題，並於開網址時自動完成初始化（唔使手動 run setup()）。
> （想提前拎試算表網址：喺編輯器 run 一次 `setup()`，都係安全嘅，幂等唔會洗資料。）

## 之後改 code
**部署 → 管理部署 → 編輯（鉛筆）→ 版本揀「新版本」→ 部署**。
同一個部署嘅 `/exec` URL **唔會變**。

## index.html（Git／自訂網域用：不再突登轉向）
`index.html` 現已升級為**完整單頁前端（SPA）**，不再跳轉去 GAS `/exec` URL！
- 放上 GitHub Pages／Vercel → 畀人一個靚網址，打開**不會再跳走去 `script.google.com`**（不再出現 Google 黃藍警告條），直接喺靚網址中使用。
- 前端會自動透過 `fetch POST` 後台連接 `BACKEND_URL`（GAS 後端）。
- 如將來改咗 GAS 部署 URL（新建部署），只需更新 `index.html` 入面嘅 `BACKEND_URL` 變數，或喺 Vercel 設定環境變數 `GAS_BACKEND_URL` 即可。

## 帳號一覽（密碼皆 `1234`）
- 地域：`HKIR`
- 區審核員：`CHW SKW HKN WCH VIC HKW HKS`
- 區總監：加 `DC`（如 `SKWDC`）
- 隱藏超管：唔顯示，權限最高。

## 想徹底重置
刪掉試算表（Drive 入面「DGA2026_優異旅團評分系統」），下次開網址自動重建。

---
Scout System · v43 · COPYRIGHT 2026
