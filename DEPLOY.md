# 🚀 部署指南（單檔版 · 只需 Code.gs）

## 部署 GAS（約 5 分鐘，一個檔搞掂）
1. [Google Sheets](https://sheets.google.com) 新增試算表 → **擴充功能 → Apps Script**。
2. 刪走預設 `Code.gs` 全部內容，**貼上 `apps-script/Code.gs` 全部內容**（前端正以 base64 包埋喺入面，**唔使再另建 app.html**）。
3. 💾 儲存。
4. 函數下拉選 **`setup`** → **▶ 執行**（首次授權：檢視權限→選帳號→進階→前往→允許）。
5. **執行紀錄**會列晒帳號（密碼 `1234`）：地域 `HKIR`、區 `CHW SKW HKN WCH VIC HKW HKS`、區總監加 `DC`（另有隱藏超管）。抄低。
6. **部署 → 新增部署 → 齒輪 → 網頁應用程式**（執行身分：**我**；存取權：**任何人**）→ 複製 URL。
   - 之後改 code：**部署 → 管理部署 → 編輯 → 新版本**。

## 完成
開嗰個 `/exec` URL → 見到 5 個支部分頁。旅團填表；右上「🔐 登入」畀區／地域／超管。

## Vercel（可選）
- 把 GAS URL 填入 `data/config.json` 嘅 `backend` → push GitHub → Vercel 匯入（前端用 fetch 連 GAS）。
- 或留空＝MOCK 示範。

## 帳號
- 地域：`HKIR`　區審核員：`CHW SKW HKN WCH VIC HKW HKS`　區總監：加 `DC`　密碼皆 `1234`
- 各帳號可自行改密碼；上級可改／刪下屬（全前端）。

## 點解一個檔得？
正常 GAS 分 `Code.gs`（伺服器）＋ `app.html`（前端）。呢版將前端用 base64 包入 Code.gs，`doGet` 解碼還原，所以淨係貼一個檔。你唔需要改前端，所以包埋入去最方便。

---
COPYRIGHT 2026 DGA System
