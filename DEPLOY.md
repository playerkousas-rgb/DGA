# 🚀 部署指南（單檔版 · v40 · 一個 Code.gs 搞掂）

## 部署 GAS（約 5 分鐘）
1. [Google Sheets](https://sheets.google.com) 新增試算表 → **擴充功能 → Apps Script**。
   （或直接去 [script.google.com](https://script.google.com) 新增獨立專案都得。）
2. 刪走預設 `Code.gs` 全部內容，**貼上 `apps-script/Code.gs` 全部內容**。
   （前端正以 base64 包埋喺入面，**唔使再另建 app.html**。）
3. 💾 儲存。
4. **部署 → 新增部署 → 齒輪 ⚙️ → 網頁應用程式**
   - 執行身分：**我**
   - 存取權：**任何人**
   - → 部署 → 複製 `/exec` URL（首次會要授權：檢視權限→選帳號→進階→前往→允許）。
5. **開嗰個 `/exec` URL** → 系統會**自動初始化**（建表 + 帳號 + Excel 模板），第一次稍慢。
6. login：`HKIR / 1234`（地域）、`CHW / 1234`（區）、`CHWDC / 1234`（區總監）、隱藏超管。

> ✅ v40 起**唔使手動 run setup()**——開網址會自動做。
> （想提前拎試算表網址：喺編輯器 run 一次 `setup()`，都係安全嘅，幂等唔會洗資料。）

## 之後改 code
**部署 → 管理部署 → 編輯（鉛筆）→ 版本揀「新版本」→ 部署**。
同一個部署嘅 `/exec` URL **唔會變**，所以 `index.html` 轉向網址都唔使改。

## index.html（Git／自訂網域用）
`index.html` 係一個**轉向頁**，會跳去 GAS `/exec` URL。
- 放上 GitHub Pages／Vercel → 畀人一個靚網址，自動跳去系統。
- **唔好刪** index.html，否則 Git 網址會 404。
- 改咗 GAS 部署 URL（新建部署）→ 記得更新 index.html 入面嗰兩個 URL。

## 帳號一覽（密碼皆 `1234`）
- 地域：`HKIR`
- 區審核員：`CHW SKW HKN WCH VIC HKW HKS`
- 區總監：加 `DC`（如 `SKWDC`）
- 隱藏超管：唔顯示，權限最高。

## 想徹底重置
刪掉試算表（Drive 入面「DGA2026_優異旅團評分系統」），下次開網址自動重建。

---
Scout System · v40 · COPYRIGHT 2026
