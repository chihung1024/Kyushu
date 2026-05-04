# Kyushu

## 單頁改模組化（最小變更）規劃

以下規劃以「**先不改 UI / 不改資料內容 / 不引入打包器**」為原則，將目前單一 `index.html` 逐步拆成可維護的模組化架構。

---

### 目標
- 讓結構、樣式、資料、互動邏輯可分開維護。
- 每一步都可獨立驗證，避免一次大改導致整站壞掉。
- 保持原本可直接用瀏覽器開啟的部署方式（靜態檔案）。

---

### 現況（單頁）
目前 `index.html` 同時包含：
1. HTML 結構
2. 大量 inline CSS（含 Tailwind 編譯結果）
3. 行程資料（`itineraryData` / `backupDB`）
4. 所有互動與渲染邏輯

這會造成：
- 修改任一區塊都要在超大檔案裡搜尋。
- 功能耦合高，不容易做局部測試。
- 後續多人協作容易衝突。

---

### 建議目錄（最小可行模組化）

```text
/
├─ index.html
├─ README.md
└─ assets/
   ├─ css/
   │  └─ app.css
   └─ js/
      ├─ main.js
      ├─ data/
      │  ├─ itinerary-data.js
      │  └─ backup-data.js
      ├─ state/
      │  └─ store.js
      ├─ ui/
      │  ├─ tabs.js
      │  ├─ itinerary-view.js
      │  ├─ print-view.js
      │  └─ backup-modal.js
      └─ utils/
         ├─ dom.js
         └─ text.js
```

---

### 分階段改造步驟

#### Phase 1（最低風險）
1. 將 inline `<style>` 全部搬到 `assets/css/app.css`。
2. 在 `index.html` 改成 `<link rel="stylesheet" href="assets/css/app.css">`。
3. JS 邏輯先不拆，功能應完全一致。

**驗收**：畫面外觀與互動行為和原版一致。

#### Phase 2（資料與程式分離）
1. 把 `itineraryData` 抽成 `assets/js/data/itinerary-data.js`。
2. 把 `backupDB` 抽成 `assets/js/data/backup-data.js`。
3. 以 ES Module 在 `main.js` 匯入資料。

**驗收**：切天數、備案 modal、複製行程都正常。

#### Phase 3（依功能拆 UI 模組）
1. `tabs.js`：`initTabs`, `updateTabsUI`, `switchDayContent`。
2. `itinerary-view.js`：`buildAllContent`, `copyDailyItinerary`。
3. `print-view.js`：`initPrintView`。
4. `backup-modal.js`：備案區域/分類切換與 `renderBackupList`。

**驗收**：所有按鈕、tab、列印區塊功能維持一致。

#### Phase 4（共用層）
1. `store.js` 管理 `currentDay/currentBackupRegion/currentBackupCategory`。
2. `utils/dom.js` 放 DOM 查找與 class 切換 helper。
3. `utils/text.js` 放文字清洗（例如去 HTML tag）。

**驗收**：重複程式碼降低、模組責任清楚。

---

### 最小變更原則（實作守則）
- **先搬移，不重寫**：先確保邏輯 1:1 搬移成功，再做優化。
- **函數名稱先不改**：避免大量連鎖修改。
- **一次只做一類拆分**（先 CSS、再 data、再 UI）。
- **每 phase 都可回滾**（單次 commit 粒度小）。

---

### 建議載入方式（index.html）
- CSS：`<link rel="stylesheet" href="assets/css/app.css">`
- JS：`<script type="module" src="assets/js/main.js"></script>`

`main.js` 作為唯一入口，負責：
1. 匯入資料與子模組
2. 初始化 state
3. 綁定 `window` 需要暴露給 HTML inline handler 的函數（若暫時保留）
4. 呼叫各模組 init

---

### 風險與對策
- **風險：模組化後路徑錯誤**  
  對策：先在本機直接開 `index.html` 驗證資源載入。

- **風險：全域函數消失導致按鈕失效**  
  對策：Phase 3 前先保留 `window.selectDay` 等介面，內部再改呼叫模組函數。

- **風險：拆分時意外改動 HTML 組字串**  
  對策：採「搬移 + snapshot 比對（目視）」策略，不先重構模板。

---

### 建議 commit 切分
1. `chore: extract inline css to assets/css/app.css`
2. `refactor: move itinerary and backup data into js modules`
3. `refactor: split rendering logic into ui modules`
4. `refactor: add shared store and utility modules`

這樣每一個 commit 都能單獨 review、單獨回滾，符合最小變更與低風險上線策略。
