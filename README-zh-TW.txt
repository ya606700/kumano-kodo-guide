熊野古道雙朝聖｜離線地圖資料包
版本：2026-11-17-r3

包含
- kumano-dual-pilgrim-stamps.gpx：10 個章點 waypoint（不包含步道軌跡線）。
- kumano-dual-pilgrim-stamps.geojson：相同 10 個地標點，供 GIS／地圖工具使用。
- r2 座標修正：第 6 顆大齋原改為大鳥居入口附近的近似導航點 33.836900,135.774900；第 10 顆飛瀧神社改採 Geoshape 神社代表點 33.673761,135.888166。兩者均不是官方公布的印章木台精確 GPS。
- 官方地圖請出發前下載保存（網站提供官方來源連結，不重新散布官方 PDF）：
  1. 發心門王子至熊野本宮大社官方步行圖（官方圖標示 7.5 km、步行 2–3 小時）
     https://www2.tb-kumano.jp/kumano-kodo/pdf/Kumano-Kodo-Nakahechi-Route-Maps-Hongu.pdf
  2. 本宮地區地圖
     https://www2.tb-kumano.jp/en/kumano-kodo/pdf/Kumano-Kodo-Nakahechi-Route-Maps-Hongu-Area.pdf
  3. 新宮／勝浦市區地圖
     https://www2.tb-kumano.jp/en/kumano-kodo/pdf/Kumano-Kodo-Nakahechi-Route-Maps-Shingu-Katsuura.pdf

OsmAnd 離線使用建議
1. 出發前連 Wi-Fi，在 OsmAnd 下載和歌山／紀伊半島相關離線地圖區域。
2. 將本資料包的 GPX 下載到手機，點選檔案並選擇以 OsmAnd 開啟；亦可在 My Places／Tracks 匯入 GPX。
3. 到地圖上確認 10 個章點是否顯示，再把官方 PDF 地圖下載到手機檔案中。
4. 途中若沒有網路，先用已下載底圖與 GPS 定位；重要分岔仍以官方步道標誌、現地指標和官方 PDF 為準。

非常重要的限制
- GPX 僅為 10 個集章地標點，不是實際步道 track，亦不是逐轉彎導航路線。請勿把點與點直線當成步道。
- 座標是導航參考點，不保證印章木台的精確位置。第 6 顆是大鳥居入口附近近似點；第 10 顆是 Geoshape 飛瀧神社地標代表點。官方未公開印章木台精確 GPS，神社／寺院內的印章台可能移位，請依官方清單及現場工作人員指示。
- 地圖點位不是安全導航承諾；山區岔路請跟隨官方路標與實地標示。

雙朝聖集章記錄工具（請在第一顆章之前取得）
- 方案 A：免費「共通巡禮手帳」。熊野本宮大社同一枚完成章，除路線進度第 5 格外，還必須蓋在熊野古道側首頁的「COMPLETION OF PILGRIMAGE」欄位。
- 方案 B（有條件）：官方 FAQ Q2 允許熊野古道使用「觀光協會發行的集章手冊」，搭配聖地牙哥大教堂認可的聖雅各之路 Credential；但 FAQ 並未表示所有押印帳都合格。請在使用前把手冊封面及內頁照片寄給田邊市熊野觀光旅遊局，確認這一本及 10 顆章欄位可用後才採用。
- 官方雙朝聖 FAQ Q2：https://www.tb-kumano.jp/tw/kumano-kodo/dual-pilgrim/registration/
- 重要：100 日圓、41 格「和歌山縣中邊路押印帳」屬另一套縣級集章活動，官方明確表示不符合雙朝聖認證，不可當作替代手冊：https://www.tb-kumano.jp/en/2024/03/08/12591/
- 下載 OsmAnd 的區域底圖是另一個步驟；單獨下載 GPX 不等於已下載離線底圖。

來源與授權說明
- 路線長度與步行時間：Tanabe City Kumano Tourism Bureau 官方步行圖／路線頁。
- 點位座標來源：Geoshape（國立情報學研究所等資料集）、Kiiminpo/KiiLife 開放資料（頁面標示 OpenStreetMap）、Mapcarta（基於 OpenStreetMap 的地標資料）。各筆來源寫在 GeoJSON properties 及 GPX 描述中。
- OpenStreetMap 資料適用 ODbL；本資料包保留來源標記。Geoshape POI 資料依各資料頁 CC BY 4.0 標示，請按來源頁規範註明。
- OsmAnd 匯入 GPX：官方說明 https://docs.osmand.net/docs/user/personal/tracks/manage-tracks/


【網站本身離線】
使用 HTTPS 首次成功開啟網站後，網站會嘗試快取首頁、版面、程式及章點資料。這不會自動下載第三方地圖圖磚、外部官方 PDF、即時巴士／JR 班次、天氣或外部網站。請在有 Wi-Fi 時另行下載官方 PDF，並在 OsmAnd 等地圖 App 內下載和歌山離線底圖。GPX 僅含 10 個地標 waypoint，不是古道軌跡線。


空拍法律資訊請參考網站「攝影／空拍」章節及其中環境省、國土交通省與警察廳最新官方連結。任何既有申請都須以核准文件列明的坐標、日期、時段、高度與航線為準。


Google 地圖全部地點匯入檔（新增）
- kumano-google-maps-places-2026-11.csv：包含三晚住宿、10 顆章點、拍攝／觀景點、行程周邊餐廳與交通目的地。
- 使用電腦開啟 https://www.google.com/mymaps ，建立新地圖，新增圖層並匯入 CSV。
- 匯入時選 Location 作為位置欄，Name 作為標題欄。Location 有些列是經緯度、有些是地址／日文地名，由 My Maps 定位；若有個別列無法自動定位，請在該筆資料上手動搜尋同名地點。
- 匯入完成後，手機 Google Maps 可至「已儲存／Saved」→「地圖／Maps」開啟這張自訂地圖。
- Google Maps 的公開 Maps URL 無法直接把所有 POI 寫入你的個人「已儲存」清單；CSV 匯入 My Maps 是一次整理多個自訂圖釘的方式。
- 個別地點連結仍可從網站各清單按「地圖定位」直接開啟 Google Maps。
- Google Maps 公共交通連結僅作路線查詢，不保證顯示指定日期巴士班次；請以 JR／巴士營運商公告為準。
- Google Maps 走路路線不等於熊野古道正式步道路線；徒步請遵循官方步道標誌、官方 PDF 與現地指示。
- 餐廳均為路線附近備選，不代表預約、營業保證或一定符合當天時間；請先核對臨時休業及最後點餐時間。


【Google Maps 全部地點匯入（r5 修正版）】

本資料包的 kumano-google-maps-places-2026-11.csv 含 37 個地點。請注意：
- 網站「建立 Google 我的地圖」按鈕只開啟 My Maps 建立頁，Google 不會自動替網站讀取 CSV。
- 初次匯入請在電腦瀏覽器操作：下載 CSV → 開啟 Google My Maps 建立新地圖 → 匯入 CSV → 定位欄位選 Location、標題欄位選 Name。
- 地圖存入自己的 Google 帳號後，手機 Google Maps 登入相同帳號，至「已儲存／你 → 地圖」開啟。
- 網站各地點的「單點定位」連結只顯示一個地點；要同時看到全部圖釘，必須完成 CSV 匯入。
- 若手機地圖清單沒有出現，先核對手機與匯入時是否使用同一個 Google 帳號。
