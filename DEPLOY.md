# 🚀 部署指南（v4：Vercel + Google Apps Script）

## 第一部分：GAS 後端（約 10 分鐘）
1. 開 [Google Sheets](https://sheets.google.com) → 新增試算表。
2. **擴充功能 → Apps Script**。
3. 刪預設碼，貼上 `apps-script/Code.gs`。
4. 「＋」→ **HTML**，命名 `app`，貼上 `apps-script/app.html`。
5. 函數選 **`setup`** → **執行**（首次授權：檢視權限→選帳號→進階→前往→允許）。
6. 到 **執行紀錄（Execution log）** 抄低 **15 個帳號**：
   - 地域秘書處（1）
   - 每區：`<區>-審核員`、`<區>-區總監`（7×2=14）
   - 合格分數線預設 80（地域登入後可改）
7. **部署 → 新增部署 → 齒輪 → 網頁應用程式**（執行身分：**我**；存取權：**任何人**）→ 複製 URL。
8. （改 code 後記得「管理部署 → 編輯 → 新版本」。）

## 第二部分：Vercel 前端
- **方法 1（連雲端）**：把 GAS URL 填入 `data/config.json` 嘅 `backend` → push GitHub → Vercel 匯入。
- **方法 2（?backend=）**：開 `https://你嘅 vercel/?backend=<GAS URL>`。
- **方法 3（純示範）**：`backend` 留空 → MOCK 示範（密碼 `demo`）。

## 第三部分：用
- **旅團**：開網址 → 我是旅團 → 填表 → 確認送出。
- **審核員／區總監**：登入 → 睇本區 → 批核／確認送交地域。
- **地域**：登入 → 各區總覽＋統計 → 設合格線 → 匯出。

## 合格分數線
- 地域登入 →「設定合格分數線」；或直接改試算表 `Config` 嘅 `passMark`。旅團看不到。

## 常見問題
- **Vercel「無法連接伺服器」**：確認 `data/config.json` 嘅 `backend` 有效，GAS 存取權＝任何人。
- **改 GAS 後冇反應**：GAS「管理部署→新版本」。
- **忘記帳號密碼**：Apps Script 執行 `setup` 會重新產生（注意：setup 會重置工作表，請勿在有資料後隨便跑）。

## 安全
- GAS「執行身分：我」；特權操作伺服器端用 token＋角色驗證；旅團提交公開。**本版無發電郵**，全部記錄喺試算表。

---
COPYRIGHT 2026 DGA System
