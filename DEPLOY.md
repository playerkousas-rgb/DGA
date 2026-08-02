# 🚀 部署指南（Vercel + Google Apps Script）

## 第一部分：部署 GAS 雲端後端（約 10 分鐘）

1. 開 [Google Sheets](https://sheets.google.com) → 新增一張試算表。
2. 選單 **擴充功能 → Apps Script**。
3. 把預設 `Code.gs` 內容全刪，貼上本專案 `apps-script/Code.gs` 全部內容。
4. 左方「＋」→ **HTML**，命名 `app`（變成 `app.html`），貼上 `apps-script/app.html` 全部內容。
5. 函數選單選 **`setup`** → **執行**（首次授權：檢視權限 → 選帳號 → 進階 → 前往 → 允許）。
6. 到 **執行紀錄（Execution log）** 抄低：
   - **★ 地域管理員密碼**
   - **各區幹事密碼**
7. **部署 → 新增部署 → 齒輪 → 網頁應用程式**
   - 執行身分：**我**；存取權：**任何人**
   - 部署 → 複製 **網頁應用程式 URL**（`https://script.google.com/macros/s/..../exec`）。← 這是 backend URL
8.（日後改 code 記得 **部署 → 管理部署 → 編輯 → 新版本**，否則 URL 用舊版。）

## 第二部分：Vercel 前端

### 方法 1：把 GAS URL 寫入 config（網站直接連雲端）
1. 編輯 `data/config.json`，把 `backend` 填上第一部分的 GAS URL。
2. Push 到 GitHub。
3. 到 [vercel.com](https://vercel.com) → **Add New Project** → 匯入你嘅 GitHub repo → **Deploy**（無需改設定）。
4. 完成。Vercel 網址即係正式系統（連 GAS 雲端資料）。

### 方法 2：用 ?backend= 臨時指定（唔改檔）
- 直接開 `https://你嘉 vercel 網址/?backend=<GAS URL>`，前端會記住（存瀏覽器本機）。

### 方法 3：純 MOCK 示範（唔部署 GAS）
- `data/config.json` 嘅 `backend` 留空 → Vercel 網站用 MOCK 示範數據。示範密碼 `demo`。

## 第三部分：設定地域／各區電郵（全部預設 info@skwscout.org.hk）
> 電郵／密碼全部存喺試算表 **`Districts` 工作表**——**直接打開 Google 試算表改即時生效，唔使重新部署 GAS**。亦可喺地域管理員「系統設定」改。
- `Districts` 工作表結構：
  - **B2**：地域電郵（區幹事「批核轉交／一鍵傳送」會寄到呢度）
  - **第 5 行起**：各區嘅 電郵（B 欄）／密碼（C 欄）
- 預設 7 區 + 地域全部 = `info@skwscout.org.hk`；改完即時生效。

## 常見問題
- **Vercel 顯示「無法連接伺服器」？** 確認 `data/config.json` 嘅 `backend` 已填有效 GAS URL，且 GAS 部署存取權為「任何人」。
- **改咗 GAS code 但 Vercel 冇反應？** GAS 要「管理部署 → 新版本」；Vercel 端改 config 後要重新 push/部署。
- **想喺 GAS 內直接用？** 開 GAS 網頁應用程式 URL 即可（前端自動用 GAS 模式），唔經 Vercel 亦得。
- **忘記密碼？** Apps Script 執行 `setup` 會重新產生並覆寫；或地域管理員喺系統設定重設各區密碼。

## 安全
- GAS 以「執行身分：我」運行；特權操作（區總表、批核、系統設定）伺服器端用 token＋角色驗證；旅團提交為公開。
- 郵件由 GAS `MailApp` 發送（每日約 100／1500 封配額）；發信人＝部署者帳號。

---
COPYRIGHT 2026 DGA System
