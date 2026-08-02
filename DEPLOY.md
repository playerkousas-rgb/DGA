# 🚀 部署指南（v5）

## 第一部分：GAS 後端
1. [Google Sheets](https://sheets.google.com) 新增試算表 → **擴充功能 → Apps Script**。
2. 貼上 `apps-script/Code.gs`；「＋」→ HTML 命名 `app`，貼上 `apps-script/app.html`。
3. 函數選 **`setup`** → **執行**（首次授權）。
4. **執行紀錄**會列出預設帳號（密碼 `1234`）：
   - 地域 `HKIR`
   - 區審核員 `CHW SKW HKN WCH VIC HKW HKS`
   - 區總監 `CHWDC SKWDC HKNDC WCHDC VICDC HKWDC HKSDC`
   - （另有隱藏超管，不顯示）
5. **部署 → 網頁應用程式**（執行身分：我；存取權：任何人）→ 複製 URL。

## 第二部分：Vercel
- GAS URL 填 `data/config.json` 嘅 `backend` → push GitHub → Vercel 匯入。
- 或 `?backend=<URL>`；或留空＝MOCK 示範。

## 用
- **旅團**：選支部分頁→區→旅團→填表→確認送出。
- **區（審核員／區總監）**：登入→睇本區待批／已批→批核／確認；帳號管理（區總監）。
- **地域**：登入→各區總覽＋統計＋各支部合格線＋帳號管理＋打印。

## 帳號管理（全前端）
- 各帳號自行改密碼／電郵；上級（地域／區總監／超管）可改下屬密碼、刪除帳號。
- 區總監可加同區帳號；HKIR 可加地域帳號。

## 注意
- 改 GAS code 後「管理部署→新版本」。
- 無發電郵；全部記錄喺試算表，可打印／匯出。

---
COPYRIGHT 2026 DGA System
