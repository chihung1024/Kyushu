# 專案架構審查與模組化優化建議

## 1. 現況總覽

本專案目前採用「開發時拆分來源檔、交付時打包成單檔 HTML」的靜態前端架構。核心交付流程已清楚：維護者修改 `index.html`、`css/`、`js/` 下的來源檔，再透過 build script 產出 `dist/kyushu-trip-final.html` 作為離線交付版本。

目前可分成下列層次：

| 層次 | 目前檔案 | 職責 |
| --- | --- | --- |
| HTML shell | `index.html` | 頁面骨架、首頁卡片、所有靜態 dialog/modal、script 載入順序 |
| CSS manifest | `css/style.css` | 以 `@import` 統一載入樣式模組 |
| CSS modules | `css/*.css` | 基礎樣式、旅人 UX、美食、行前指南、效能與視覺補丁 |
| Data modules | `js/data/*.js` | 行程、停車、美食、備案、每日重點與常數資料 |
| Component helpers | `js/components/*.js` | 停車導航按鈕、每日美食區塊等 HTML render helper |
| App runtime | `js/main.js` | 初始化、tabs、每日內容渲染、備案列表、modal、列印、複製文字與互動流程 |
| Build/test tools | `tools/*.mjs` | CSS/JS inline 打包、smoke test 與來源檔結構檢查 |

## 2. 已具備的優點

1. **交付模型符合使用情境**：旅行文件需要可離線保存、可直接轉傳，單檔 HTML 輸出是合理的交付格式。
2. **資料已初步外移**：行程、停車、美食與備案資料已集中在 `js/data/`，比全部塞在 `index.html` 更容易維護。
3. **樣式已由 manifest 管理**：`css/style.css` 透過 `@import` 管理樣式來源，使 build script 能遞迴 inline CSS。
4. **已有自動化檢查**：`npm test` 會 build、語法檢查與執行 smoke test，可避免舊版大檔回流與基本 render 失效。
5. **低工具鏈成本**：目前不需要 Vite/Webpack/Babel，維護者只要 Node.js 即可重新產出交付檔。

## 3. 主要架構風險與模組化必要性

### 3.1 `js/main.js` 已成為多職責集中點

`js/main.js` 同時處理狀態、hash routing、tabs、每日行程 HTML 組裝、備案列表、每日資訊 dialog、modal scroll lock、列印 HTML 與剪貼簿輸出。這使得任何新功能都容易直接追加到同一個檔案，長期會造成：

- 修改風險擴大：小改每日資訊可能意外影響列印或 modal。
- 測試粒度不足：目前較難只測某一個 renderer 或 controller。
- 新維護者進入成本高：必須先理解整個 runtime 才敢調整單一 UI。

**必要性判斷：高。** 這是下一階段最值得拆分的核心。

### 3.2 `index.html` 承載過多靜態內容與事件綁定

`index.html` 不只是 shell，也包含大量 modal 內容、inline `onclick` 與靜態 HTML 區塊。當行前指南、飯店比較、預算、交通規則等內容增加時，HTML shell 會越來越難掃描，也難以重用既有 dialog 結構。

**必要性判斷：高。** 建議將「大型靜態內容」逐步資料化或 component 化，但要分階段進行，避免一次改動破壞離線交付。

### 3.3 Data 檔已拆分，但資料 schema 尚未被明文化

`js/data/*.js` 已把資料分檔，但目前主要依賴全域變數與隱性欄位約定，例如 `sections`、`type`、`time`、`mapQuery`、`deepTip`、`checklist` 等。當資料量持續成長，若沒有 schema 文件或 validation，容易出現欄位拼錯、HTML 片段不一致、停車查詢漏填等問題。

**必要性判斷：中高。** 不一定需要導入 TypeScript，但至少應建立資料欄位規格與 smoke validation。

### 3.4 CSS 已拆檔但模組邊界偏「補丁式」

CSS 檔名顯示已有領域拆分，但多個小檔目前只有少量內容，且命名包含 `visual-polish`、`performance`、`mobile-dialog` 這類補丁型分類。長期可能讓樣式修改者不知道該放在功能模組、頁面模組還是補丁檔。

**必要性判斷：中。** 可在不改變視覺的前提下整理命名與樣式歸屬，但優先順序低於 JS runtime 拆分。

### 3.5 Build script 仍依賴固定檔案形狀

目前 build script 直接尋找 `css/style.css` link 與 `js/*.js` script tag 來 inline。這很適合現在的架構，但也意味著模組化不能任意改成 ESM import tree，除非同步更新 build pipeline。

**必要性判斷：中。** 現階段建議保留全域 script 順序，先做「檔案層級拆分」，等 runtime 清楚後再評估是否升級為 ESM。

## 4. 建議的目標模組邊界

在維持單檔交付前提下，本次拆分以「仍由 `index.html` 依序載入多個 JS 檔」為原則，已把 `js/main.js` 拆成可讀性更高的 runtime modules：

```txt
js/
  data/
    constants.js
    itinerary.js
    parking.js
    backup.js
    gourmet-backup.js
    day-focus.js
    day-gourmet.js
  components/
    parking-buttons.js
    daily-gourmet.js
    day-timeline.js          # 每日行程 timeline HTML renderer
    day-info-modal.js        # 每日資訊 dialog renderer
    backup-list.js           # 景點/美食/購物備案 renderer
    print-view.js            # 列印版 HTML renderer
    static-modals.js         # 首頁大型靜態 dialog/modal renderer
  controllers/
    tabs.js                  # tabs 初始化與切換
    modal.js                 # dialog 開關、scroll lock、viewport height
    backup-modal.js          # 備案 modal 狀態與分類切換
    clipboard.js             # 每日行程複製文字
  main.js                    # bootstrap：讀初始 hash、初始化 controllers
```

> 重點：已保留非 ESM、無 bundler 的載入方式。只要維持 script tag 順序，build script 仍可 inline 多個 JS 檔，風險最低。

## 5. 分階段優化方案

### Phase 0：文件化與驗證補強（低風險，立即可做）

- 新增資料 schema 文件，定義 itinerary section、parking entry、gourmet item、backup item 的必要/選填欄位。
- 擴充 smoke test：檢查每一天都有 `day`、`title`、`sections`；每個有 `mapQuery` 的地點若需要停車，能對應停車按鈕或明確標註不需要。
- README 補上架構審查文件入口。

### Phase 1：拆出純 renderer（已完成）

已拆出沒有副作用、主要回傳 HTML string 的邏輯：

- `buildDayContent(data)` → `js/components/day-timeline.js`
- `renderBackupList()` 中的 HTML 組裝 → `js/components/backup-list.js`
- `openDayInfo()` 內的 card/內容組裝 → `js/components/day-info-modal.js`
- `initPrintView()` 的列印 HTML 組裝 → `js/components/print-view.js`
- `index.html` 大型靜態 dialog markup → `js/components/static-modals.js`

驗收標準：`js/main.js` 只負責呼叫 renderer 與放入 DOM，不直接包含大段 template string。

### Phase 2：拆出 controllers（已完成）

已把會讀寫 DOM、綁事件與維持狀態的流程拆出：

- tabs 狀態與 hash routing → `js/controllers/tabs.js`
- dialog 開關與 scroll lock → `js/controllers/modal.js`
- backup modal region/category 狀態 → `js/controllers/backup-modal.js`
- clipboard fallback → `js/controllers/clipboard.js`

驗收標準：`main.js` 控制在 100 行以內，只做 bootstrap、初始狀態建立與 controller 初始化。

### Phase 3：大型靜態 modal 內容元件化（已完成 shell 拆分）

`index.html` 中的行前指南、出發前總檢查、飯店、預算等大型 modal 已集中到 `js/components/static-modals.js`，`index.html` 只保留 `dialogs-root` 掛載點與 `print-container`。若後續內容還會頻繁改動，可再把 `static-modals.js` 內的個別 modal 進一步拆成 `pretrip-guide`、`hotels`、`budget` 等更細 renderer/data 檔。

### Phase 4：視需要升級為 ESM 或小型 bundler（可選）

只有在下列條件出現時才建議導入 ESM/bundler：

- 全域變數相依越來越難追蹤。
- 需要 tree-shaking 或第三方套件。
- 需要更完整的單元測試與 import/export 邊界。

若目前專案仍以單人或小團隊維護、功能集中在靜態旅遊頁，保留無 bundler 架構會更符合成本效益。

## 6. 建議優先順序

| 優先級 | 工作 | 原因 | 風險 |
| --- | --- | --- | --- |
| P0 | 文件化架構與 schema | 讓後續拆分有共識 | 低 |
| P1 | 拆 `buildDayContent`、print renderer | 最大化降低 `main.js` 複雜度 | 中低 |
| P1 | 補 smoke validation | 防止資料錯誤進入交付檔 | 低 |
| P2 | 拆 modal/tabs/backup controllers | 降低互動邏輯耦合 | 中 |
| P2 | `index.html` 大型 modal shell 拆分 | 已移至 `static-modals.js`，降低 HTML shell 膨脹 | 已完成 |
| P3 | CSS 模組重新命名與歸屬整理 | 改善樣式維護體驗 | 中 |
| P3 | 評估 ESM/bundler | 只有在維護成本超過現狀時導入 | 中高 |

## 7. 不建議立即做的事

- **不要一次改成 SPA framework**：目前使用情境是靜態行程頁與離線單檔交付，React/Vue/Svelte 會增加 build 與交付成本。
- **不要直接改成 ESM 而不調整 build/test**：現有 build script 是依 script tag inline，突然改 import/export 可能讓交付檔在 file/offline 情境下失效。
- **不要直接刪除全域 function**：`index.html` 仍有 inline `onclick`，應先改事件綁定或保留兼容 wrapper。
- **不要修改 `dist/kyushu-trip-final.html` 作為來源**：它是 build 產物，應由來源模組產生。

## 8. 結論

此專案已完成第一步「從單一大 HTML 拆成來源模組」的良好基礎；下一步的必要優化不是導入大型框架，而是把 `js/main.js` 的多職責拆成 renderer 與 controller，並把 `index.html` 中的大型靜態內容逐步資料化。建議以 Phase 1 的純 renderer 拆分作為第一個實作里程碑，因為它對現有交付流程影響小，卻能明顯降低後續維護成本。
