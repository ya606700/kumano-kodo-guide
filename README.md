# 日本朝聖之路｜熊野古道雙朝聖指南

公開網站：<https://ya606700.github.io/kumano-kodo-guide/>

本專案為熊野古道中邊路 4 天 3 夜雙朝聖行程指南，包含每日交通時間軸、10 個集章地標、雙朝聖登記資料、住宿與出發前查核、GPX／GeoJSON 章點及可離線開啟的網站資源。

## 更新提醒

- GPX 僅包含 10 個印章地標 waypoint，不是官方步道軌跡線。
- 大齋原及飛瀧神社座標是導航參考點，不保證為印章木台精確位置。
- 雙朝聖集章：免費共通巡禮手帳為已確認首選。官方 FAQ Q2 容許特定觀光協會發行手冊作替代，但必須先確認具體版本；100 日圓、41 格的和歌山縣中邊路押印帳屬不同活動，官方明確說明不符合 Dual Pilgrim 認證。
- GPX 僅包含 10 個印章地標 waypoint，不是官方步道軌跡線。
- 大齋原及飛瀧神社座標是導航參考點，不保證為印章木台精確位置。
- 官方交通班次、營運公告、集章位置、登記資格及空拍限制可能變動；出發前請以官方最新公告及現場指示為準。
- 網站首次以 HTTPS 開啟後會快取核心頁面與資料；第三方地圖底圖及官方 PDF 仍須另行下載。

## 主要資料

- `index.html`：網站首頁與行程指南
- `styles.css`、`app.js`：版面與互動功能
- `data/`：行程資料與離線地圖點位資料
- `offline/`：GPX、GeoJSON 與離線使用說明
- `sw.js`：網站核心資源快取


## Google Maps 地點整合（r4）

- 網站離線地圖區新增「全部地點匯入 Google 我的地圖」按鈕及各分類單點地圖連結。
- `offline/kumano-google-maps-places-2026-11.csv` 收錄住宿、10 顆印章、拍攝點、餐廳與交通目的地。
- 將 CSV 匯入 Google My Maps 後，可在 Google Maps App「已儲存 → 地圖」查看。
- 官方 Maps URLs 的多站導航有平台限制，因此每一個 POI 另有單點定位；Google Maps 的步行路線不可替代官方熊野古道步道圖。


## Google Maps（r6）

- 網站「離線地圖」主按鈕已改為一鍵開啟使用者建立的熊野古道 2026 自訂地圖。
- 檢視連結：`https://www.google.com/maps/d/view?mid=16-FastABm3-u0kARUCDCnZQlQyDMtc0&usp=sharing`
- 地圖包含 37 個地點；不必每次由網站重新建立或匯入 CSV。
- Google My Maps 分享權限需由地圖擁有者設定為「知道連結的任何人 → 檢視者」，網站程式無法代替使用者修改 Google 權限。
- 網站仍保留 CSV 備份及每個地點的單點定位連結。
- Service Worker cache 已升至 v6，避免手機沿用舊版地圖區塊。
