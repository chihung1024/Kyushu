# 九州親子大冒險行程頁

這個 repo 採用「開發時模組化、交付時單檔 HTML」的維護方式。

## 主要檔案結構

```txt
index.html                 # 頁面骨架與靜態 modal 容器
css/style.css              # CSS 載入 manifest
css/*.css                  # 依原本樣式補丁拆出的樣式模組
js/data/*.js               # 行程、停車場、備案、美食與每日重點資料
js/components/*.js         # 可重用的 HTML renderer/helper（每日行程、備案、美食、列印、靜態 modal 等）
js/controllers/*.js        # tabs、modal、備案 modal、剪貼簿等互動控制器
js/main.js                 # app bootstrap 與 controller wiring
tools/build-single-html.mjs # 產出交付用單檔 HTML
dist/kyushu-trip-final.html # 交付用單檔輸出
```




## 紙本攻略列印

「列印紙本攻略」按鈕會重新產生專用的 `#print-container`，並等待字型與版面 reflow 後才呼叫瀏覽器列印，避免印到互動版網頁或尚未完成排版的內容。紙本內容由 `js/components/print-view.js` 依最新 `js/data/*.js` 資料即時組出；`dist/kyushu-travel-manual.pdf` 只作既有紙本範例/備援，不再作為按鈕的資料來源。

## 架構審查與模組化建議

完整的專案架構盤點、風險評估與分階段拆分方案請見 [`docs/architecture-modularization-review.md`](docs/architecture-modularization-review.md)。

## 本機開發預覽

```bash
python3 -m http.server 8000
```

打開 `http://127.0.0.1:8000/`。

## 產出交付用單檔 HTML

```bash
npm run build
```

等同於：

```bash
node tools/build-single-html.mjs
```

產物會輸出到：

```txt
dist/kyushu-trip-final.html
```

交付給旅伴或手機離線保存時，使用 `dist/kyushu-trip-final.html`；日常維護請修改 `index.html`、`css/`、`js/` 裡的模組化來源檔。

> 注意：不要直接修改 `dist/kyushu-trip-final.html`，它是 build 產物；修改來源模組後請重新執行 `npm run build`。

## 檢查

```bash
npm test
```

`npm test` 會重新產出單檔 HTML、檢查 build script / smoke test 語法，並確認舊版 `js/data.js` / `js/components.js` 不存在、模組化資料與元件 helper 可正常載入。
