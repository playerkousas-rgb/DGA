# 🏕️ 2026 優異旅團獎勵計劃 — 完整 APP（港島地域）

整個應用程式嘅完整壓縮檔。一個 zip 包齊：可部署網上系統、離線單檔版、官方原表、教學、旅團資料。

## 📁 內容一覽

```
index.html              ★ 完整 APP 前端（自動適應三種模式：GAS／Vercel雲端／MOCK）
vercel.json             Vercel 部署設定
data/
  config.json           ← 填 GAS 後端 URL（留空＝MOCK 示範）
  groups.json           201 個旅團參考資料
apps-script/
  Code.gs               ★ Google Apps Script 後端（貼入 GAS 專案）
  app.html              GAS 前端檔（喺 GAS 建 HTML「app」貼上）
docs/                   旅團／區幹事／地域管理員／MOCK 教學
standalone-app/
  index.html            ★ 離線單檔版（雙擊即用，即時計分＋區概覽＋MOCK，唔使部署）
原始官方表格-5個分支/    小童軍／幼童軍／童軍／深資／樂行 官方 Excel 評分表（參考）
README.md  DEPLOY.md    本檔＋部署指南
```

## 🎯 三種用法（揀一種都得）

### 1️⃣ 即刻試（唔使部署）
- 打開 **`index.html`**（瀏覽器雙擊）→ 自動 **MOCK 示範模式**
- 示範密碼（地域／各區）＝ `demo`
- 或打開 **`standalone-app/index.html`**（離線單檔版，功能齊全）

### 2️⃣ 正式上線：Vercel 網站 + GAS 雲端後端（推薦）
1. 部署 GAS：Google Sheet → Apps Script → 貼 `apps-script/Code.gs` + `apps-script/app.html` → 執行 `setup` → 部署為網頁應用程式 → 拎 URL（詳見 `DEPLOY.md`）
2. URL 填入 `data/config.json` 嘅 `backend`
3. Push 上 GitHub → Vercel 匯入 → 自動部署 → 網站直連 GAS 雲端資料

### 3️⃣ 純 GAS（唔經 Vercel）
- 部署 GAS 後，直接開 GAS 網頁應用程式 URL 即用（前端自動用 GAS 模式）

## 👥 三個角色
- **旅團**（免登入）：揀區→揀旅團→揀支部→填評分表→傳送→自動發電郵到所屬區
- **區幹事**：登入睇本區總表→修改／批核／⚡一鍵傳送地域
- **地域管理員**：登入管控整張表（全區總表＋系統設定＋匯出）

## 📧 電郵／密碼管理（最方便）
- 全部存喺試算表 **`Districts` 工作表**：B2=地域電郵、第5行起 B欄=各區電郵、C欄=各區密碼
- 預設全部 = `info@skwscout.org.hk`
- **直接打開 Google 試算表改即時生效，唔使重新部署**

## ✅ 計分（以文字描述為準）
- 深資／樂行「支部最高獎章」兩種獎章皆計（1分＋3分）
- 樂行「寰宇童軍計劃」每位 1 分
- 其餘與官方 Excel 一致（已用 `formulas` 引擎對拍測試，5 分支全中）

## 🧪 已通過測試
GAS 模式 11/11、MOCK 14/14、Vercel fetch 雲端 8/8。

---
COPYRIGHT 2026 DGA System
