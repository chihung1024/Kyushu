# 九州親子大冒險行程頁

這個 repo 採用「開發時模組化、交付時單檔 HTML」的維護方式。

## 主要檔案結構

```txt
index.html                 # 頁面骨架與靜態 modal 容器
css/style.css              # CSS 載入 manifest
css/*.css                  # 依原本樣式補丁拆出的樣式模組
js/data/*.js               # 行程、停車場、備案、美食與每日重點資料
js/components/*.js         # 可重用的 HTML render helper
js/main.js                 # app 初始化、tabs、modal、列印與互動流程
tools/build-single-html.mjs # 產出交付用單檔 HTML
dist/kyushu-trip-final.html # 交付用單檔輸出
```

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
