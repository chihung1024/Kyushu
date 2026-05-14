// Static dialog/modal markup renderer.

function renderStaticModals() {
    return `
<dialog class="decision-modal bg-white w-11/12 max-w-[94vw] lg:max-w-5xl rounded-[2rem] p-0 shadow-2xl relative max-h-[92vh] flex-col outline-none border-0 custom-scrollbar m-auto" id="backupModal" aria-labelledby="backupModalTitle">
<button aria-label="關閉視窗" class="decision-modal-close" onclick="closeModal('backupModal')">✕</button>

<div class="decision-modal-header flex-shrink-0">
    <div class="decision-modal-titlebar">
        <div>
            <div class="decision-modal-kicker">FIELD DECISION CENTER</div>
            <h2 id="backupModalTitle" tabindex="-1">九州現場決策中心</h2>
            <p>把景點、用餐與補給拆成「主線、可攻、保底、收藏、不建議」。旅途中先看最穩選擇，再決定是否加碼。</p>
        </div>
        <div class="decision-modal-principle">
            <strong>現場原則</strong>
            <span>排隊、天候、孩子電量、硬切時間任一不對，就直接降級。</span>
        </div>
    </div>

    <div class="decision-modal-nav-grid">
        <div class="decision-nav-block">
            <span class="decision-nav-label">地區</span>
            <div class="decision-segment" role="tablist" aria-label="備案地區">
                <button class="decision-segment-btn" id="btn-region-oita" onclick="setBackupRegion('oita')" type="button">
                    <span>大分・別府・由布院</span>
                    <small>Days 1-4</small>
                </button>
                <button class="decision-segment-btn" id="btn-region-kumamoto" onclick="setBackupRegion('kumamoto')" type="button">
                    <span>熊本・阿蘇・上天草</span>
                    <small>Days 5-8</small>
                </button>
            </div>
        </div>
        <div class="decision-nav-block">
            <span class="decision-nav-label">決策類型</span>
            <div class="decision-category-tabs" id="backup-category-tabs" role="tablist" aria-label="備案分類">
                <button class="decision-category-tab" data-cat="sight" id="btn-cat-sight" type="button"><span>景點</span><small>去哪裡</small></button>
                <button class="decision-category-tab" data-cat="food" id="btn-cat-food" type="button"><span>吃什麼</span><small>正餐 / 甜點</small></button>
                <button class="decision-category-tab" data-cat="shop" id="btn-cat-shop" type="button"><span>補給</span><small>採買 / 救場</small></button>
            </div>
        </div>
    </div>
</div>

<div class="decision-modal-body flex-grow overflow-y-auto custom-scrollbar" id="backup-list-container"></div>
</dialog>

<dialog class="bg-white w-11/12 max-w-[90vw] lg:max-w-5xl rounded-[2rem] p-5 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto outline-none border-0 custom-scrollbar m-auto pretrip-guide" id="preTripModal" aria-labelledby="preTripModalTitle">
<button aria-label="關閉視窗" class="absolute top-4 right-4 bg-gray-100 text-gray-500 w-10 h-10 rounded-full font-bold hover:bg-gray-200 hover:text-gray-800 transition text-lg z-10" onclick="closeModal('preTripModal')">✕</button>
<div class="mb-6 border-b-2 border-amber-100 pb-4 pr-10">
<h2 id="preTripModalTitle" tabindex="-1" class="text-2xl md:text-3xl font-black text-amber-700 flex items-center gap-3"><span>🧳</span> 出發前必看｜VJW＋旅遊醫療保險教學</h2>
<p class="text-sm text-gray-600 mt-2 font-bold bg-amber-50 inline-block px-3 py-1.5 rounded-md border border-amber-100">用法：先照 S 級流程完成入境與保險；出發前一天只重看「截圖、紙本、緊急聯絡」三件事。</p>
<div class="flex flex-wrap gap-2 mt-3">
<a class="inline-flex items-center gap-2 bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://www.vjw.digital.go.jp/" rel="noopener noreferrer" target="_blank"><span>🛂</span> Visit Japan Web 官方</a>
<a class="inline-flex items-center gap-2 bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://www.japan.travel/en/plan/travel-insurance-in-japan/" rel="noopener noreferrer" target="_blank"><span>🏥</span> JNTO 醫療/保險說明</a>
<a class="inline-flex items-center gap-2 bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://www.jnto.go.jp/emergency/eng/mi_guide.html" rel="noopener noreferrer" target="_blank"><span>🏨</span> 日本就醫指南</a>
<a class="inline-flex items-center gap-2 bg-white text-rose-700 border-2 border-rose-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/teikyouseido/index_00003.html" rel="noopener noreferrer" target="_blank"><span>💊</span> 外國旅客就醫資訊</a>
</div>
</div>
<div class="space-y-5 pb-2">
<section class="guide-panel p-4 md:p-5 bg-gradient-to-br from-amber-50 to-white border-amber-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>✅</span> 先做這 5 件事</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold leading-relaxed text-gray-800">
<div class="check-row"><span class="box"></span><span><strong>每位旅客各自完成 VJW：</strong>大人、小孩都要有入境審查與海關申報資料；不要只做代表人。</span></div>
<div class="check-row"><span class="box"></span><span><strong>QR code 三備份：</strong>手機截圖、雲端相簿、紙本列印；紙本放護照夾，另一位大人也留一份。</span></div>
<div class="check-row"><span class="box"></span><span><strong>保險分層：</strong>台灣端旅平險/不便險先覆蓋全程；日本當地保險只當醫療補強，不取代台灣保單。</span></div>
<div class="check-row"><span class="box"></span><span><strong>醫療資料包：</strong>保單號碼、海外急難救助電話、信用卡旅遊保險、家屬聯絡人、孩子藥物過敏史。</span></div>
<div class="check-row"><span class="box"></span><span><strong>抵日前後核對：</strong>第一晚飯店地址電話、回程機票、租車資訊、台灣駕照正本＋日文譯本。</span></div>
</div>
</section>
<section class="guide-panel p-4 md:p-5">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🛂</span> Visit Japan Web 防呆流程</h3>
<table class="guide-table">
<tr><th>1 建帳/登入</th><td>建議由一位大人統一管理帳號，但每位同行者資料要分別建立；英文姓名、生日、護照號碼逐字核對。</td></tr>
<tr><th>2 入境資料</th><td>填入航班、抵達機場、第一晚住宿地址電話、停留日數；資料不確定時先查飯店訂單，不憑印象填。</td></tr>
<tr><th>3 海關申報</th><td>每個家庭依實際攜帶物品申報；肉類、水果、生鮮、未吃完機上餐不要帶入境。</td></tr>
<tr><th>4 截圖與列印</th><td>抵達前把 QR code、飯店地址、保險卡、租車訂單放同一個手機相簿；紙本列印放護照夾。</td></tr>
<tr><th>5 現場原則</th><td>若現場畫面與教學不同，以官方系統當下欄位為準；不要在入境隊伍中臨時找資料。</td></tr>
</table>
</section>
<section class="guide-panel p-4 md:p-5 bg-green-50 border-green-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🏥</span> 旅遊醫療保險與就醫 SOP</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold leading-relaxed text-gray-800">
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">非急症：</strong>先量體溫、拍症狀、記時間 → 聯絡保險公司或 JNTO 協助 → 依指示就醫 → 保留收據、診斷書、藥袋、刷卡紀錄。</div>
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">急症：</strong>優先撥 119 或請飯店/店家協助叫救護車；先處理人身安全，理賠資料之後再補。</div>
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">兒童：</strong>退燒藥、腸胃藥、過敏藥保留原包裝；藥名、劑量、上次服用時間用手機備忘錄記錄。</div>
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">理賠：</strong>收據、診斷書、明細、藥單、醫院名片、事故時間線都要留；不要只拍一張總金額。</div>
</div>
</section>
<section class="guide-panel p-4 md:p-5 bg-slate-50 border-slate-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>📌</span> 出發前一天只看這張表</h3>
<table class="guide-table">
<tr><th>手機</th><td>VJW QR、保險、租車、飯店、門票、餐廳訂位、Google Maps 清單、離線截圖。</td></tr>
<tr><th>紙本</th><td>VJW QR、護照影本、保單摘要、租車訂單、第一晚飯店、緊急電話、孩子用藥資訊。</td></tr>
<tr><th>家人同步</th><td>兩位大人都能打開同一份資料；不要讓所有 QR code 和保險電話只在一支手機。</td></tr>
<tr><th>現場原則</th><td>入境、就醫、租車三件事只求穩，不求省 5 分鐘；不確定就找官方櫃台或飯店協助。</td></tr>
</table>
</section>
</div>
</dialog>

<dialog class="bg-white w-11/12 max-w-[90vw] lg:max-w-5xl rounded-[2rem] p-5 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto outline-none border-0 custom-scrollbar m-auto pretrip-guide" id="preDepartureModal" aria-labelledby="preDepartureModalTitle">
<button aria-label="關閉視窗" class="absolute top-4 right-4 bg-gray-100 text-gray-500 w-10 h-10 rounded-full font-bold hover:bg-gray-200 hover:text-gray-800 transition text-lg z-10" onclick="closeModal('preDepartureModal')">✕</button>
<div class="mb-6 border-b-2 border-rose-100 pb-4 pr-10">
<h2 id="preDepartureModalTitle" tabindex="-1" class="text-2xl md:text-3xl font-black text-rose-700 flex items-center gap-3"><span>📋</span> 出發前總檢查｜文件・租車・訂位・禁帶品・飯店・醫療</h2>
<p class="text-sm text-gray-600 mt-2 font-bold bg-rose-50 inline-block px-3 py-1.5 rounded-md border border-rose-100">用法：出發前 10 天開始逐項打勾；出發前 1 天只看 S 級與 Day1 清單。</p>
<div class="flex flex-wrap gap-2 mt-3">
<a class="inline-flex items-center gap-2 bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://english.jaf.or.jp/driving-in-japan" rel="noopener noreferrer" target="_blank"><span>🚗</span> JAF 日本駕駛說明</a>
<a class="inline-flex items-center gap-2 bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://www.maff.go.jp/aqs/english/product/import.html" rel="noopener noreferrer" target="_blank"><span>🥩</span> 日本動物檢疫：肉製品</a>
<a class="inline-flex items-center gap-2 bg-white text-emerald-700 border-2 border-emerald-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://www.maff.go.jp/pps/j/information/languages.html" rel="noopener noreferrer" target="_blank"><span>🌱</span> 日本植物防疫</a>
<a class="inline-flex items-center gap-2 bg-white text-purple-700 border-2 border-purple-200 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition" href="https://impconf.mhlw.go.jp/about_en.htm" rel="noopener noreferrer" target="_blank"><span>💊</span> 藥品輸入確認</a>
</div>
</div>
<div class="space-y-5 pb-2">
<section class="guide-panel p-4 md:p-5 bg-gradient-to-br from-red-50 to-white border-red-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🚨</span> S 級：未確認不要出發</h3>
<div class="priority-grid text-sm font-bold leading-relaxed text-gray-800">
<div class="p-4 rounded-2xl bg-white border-2 border-red-200"><span class="risk-badge bg-red-100 text-red-700 mb-2">S1 入境文件</span><br/>每位旅客：護照、VJW QR、回程機票、第一晚飯店地址電話。QR code 要截圖與紙本雙備份。</div>
<div class="p-4 rounded-2xl bg-white border-2 border-red-200"><span class="risk-badge bg-red-100 text-red-700 mb-2">S2 自駕文件</span><br/>每位駕駛：台灣駕照正本＋日文譯本＋護照。租車主約人另備信用卡與 Budget 訂單。</div>
<div class="p-4 rounded-2xl bg-white border-2 border-red-200"><span class="risk-badge bg-red-100 text-red-700 mb-2">S3 兒童安全座椅</span><br/>6 歲以下必備兒童座椅；取車時確認數量、尺寸、固定方式。兩台車都要核對，不要只看訂單。</div>
</div>
</section>
<section class="guide-panel p-4 md:p-5">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🗂️</span> 出發前文件總檢查</h3>
<table class="guide-table">
<tr><th>入境</th><td>護照效期、VJW 每人 QR、回程機票、第一晚住宿資料、全家英文姓名與生日核對。</td></tr>
<tr><th>駕駛</th><td>台灣駕照正本、日文譯本、護照、Budget 訂單、主約人信用卡、ETC/保險/免責補償條件截圖。</td></tr>
<tr><th>保險</th><td>台灣旅平險＋旅遊不便險先買完整旅程；TOKIO 抵達日本後再逐人加保並截圖完成頁。</td></tr>
<tr><th>住宿</th><td>每間飯店訂單、兒童同住政策截圖、停車方式、早餐/入浴稅、取消期限、Check-in 時間。</td></tr>
<tr><th>訂位</th><td>Harmonyland 電子票、韓國苑別府、天草午餐、B-SPEAK、Sea Donut 體驗；備案含高千穗峽、鍋瀑布、砂湯。</td></tr>
<tr><th>離線備份</th><td>建立手機相簿：護照/VJW/保險/租車/飯店/訂位/停車/緊急聯絡。重要資料同步給另一位大人。</td></tr>
<tr><th>緊急聯絡</th><td>台灣旅平險專線、TOKIO/日本就醫聯絡、信用卡海外掛失、飯店電話、租車店電話、119 急救。</td></tr>
</table>
</section>
<section class="guide-panel p-4 md:p-5 bg-blue-50 border-blue-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🚗</span> 租車與右駕文件包</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold leading-relaxed text-gray-800">
<div class="bg-white border border-blue-100 rounded-xl p-3"><strong class="text-blue-800">透明文件夾：</strong>護照、台灣駕照正本、日文譯本、Budget 訂單、信用卡、保險條件、兒童座椅預約截圖。</div>
<div class="bg-white border border-blue-100 rounded-xl p-3"><strong class="text-blue-800">取車必拍：</strong>車身四面、輪框、後照鏡、行李箱、油量、里程、ETC、座椅、既有刮傷。</div>
<div class="bg-white border border-blue-100 rounded-xl p-3"><strong class="text-blue-800">右駕提醒：</strong>靠左行駛、右轉讓直行與左轉車、窄路不要壓線、停車場先慢慢適應車寬。</div>
<div class="bg-white border border-blue-100 rounded-xl p-3"><strong class="text-blue-800">兒童座椅：</strong>6 歲以下必用；6 歲以上但身高不足者，仍建議用增高墊讓安全帶落點正確。</div>
</div>
<p class="mt-3 text-xs text-blue-900 bg-white border border-blue-100 rounded-lg p-3 font-bold leading-relaxed">防呆句：台灣旅客在日本自駕，核心不是國際駕照，而是「台灣駕照正本＋日文譯本＋護照」。兩車駕駛都要各自備齊，不要集中放同一包。</p>
</section>
<section class="guide-panel p-4 md:p-5">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🥩</span> 日本入境禁帶品／藥品防呆</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<div class="font-black text-red-700 mb-2">不建議攜帶</div>
<table class="guide-table">
<tr><th>肉類</th><td>肉鬆、肉乾、香腸、火腿、含肉泡麵、肉包、肉餡零食。真空包、熟食、免稅店購買也不代表可帶。</td></tr>
<tr><th>生鮮</th><td>水果、生鮮蔬菜、種子、盆栽、未處理植物。親子零食以餅乾、糖果、茶包等低風險包裝食品為主。</td></tr>
<tr><th>機上餐</th><td>吃不完的含肉三明治、便當、水果不要帶下飛機入境。</td></tr>
</table>
</div>
<div>
<div class="font-black text-purple-700 mb-2">藥品與常備包</div>
<table class="guide-table">
<tr><th>一般藥</th><td>原包裝、少量、保留成分標示；兒童退燒藥、腸胃藥、過敏藥分袋標明用法。</td></tr>
<tr><th>處方藥</th><td>帶處方箋或診斷證明影本；慢性病藥不要帶超過需求太多。</td></tr>
<tr><th>管制/大量</th><td>安眠、精神科、強效止痛、含管制成分或超過一般用量者，出發前逐項查日本規定，必要時申請 Yunyu Kakunin-sho。</td></tr>
</table>
</div>
</div>
</section>
<section class="guide-panel p-4 md:p-5 bg-amber-50 border-amber-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🗓️</span> 訂位／預約追蹤表</h3>
<table class="guide-table">
<tr><th>項目</th><th>日期</th><th>處理方式</th><th>狀態</th></tr>
<tr><td>Harmonyland 電子票</td><td>5/30</td><td>建議出發前買好，減少現場售票等待。</td><td>□ 未確認</td></tr>
<tr><td>韓國苑別府店</td><td>6/1 晚餐</td><td>8 人晚餐建議先訂 17:30–18:00；若不吃就刪掉。</td><td>□ 未確認</td></tr>
<tr><td>African Safari 叢林巴士</td><td>6/1</td><td>本日早班多半採現場先到；若改下午保底班，需另查預約。</td><td>□ 未確認</td></tr>
<tr><td>B-SPEAK P-roll</td><td>6/1</td><td>想買才電話預留；不強求可刪。</td><td>□ 未確認</td></tr>
<tr><td>Sea Donut 海豚體驗</td><td>6/4</td><td>一般入館可不約；若要海豚訓練員等體驗，出發前先約。</td><td>□ 未確認</td></tr>
<tr><td>天草午餐</td><td>6/4</td><td>福伸 / L’isola 擇一訂位；8 人不要臨時賭熱門午餐。</td><td>□ 未確認</td></tr>
<tr><td>高千穗峽划船</td><td>備案</td><td>若啟用備案且要划船，必須事前網路預約。</td><td>□ 備案</td></tr>
<tr><td>鍋瀑布</td><td>備案</td><td>若啟用備案，先確認是否仍採事前預約/購票制。</td><td>□ 備案</td></tr>
<tr><td>別府砂湯</td><td>備案</td><td>若想泡砂湯，先預約時段，不要現場排長隊。</td><td>□ 備案</td></tr>
</table>
<p class="mt-3 text-xs text-amber-900 bg-white border border-amber-100 rounded-lg p-3 font-bold leading-relaxed">原則：親子 8 人團不是不能排隊，而是不要把「必吃／必玩」留到現場碰運氣；如果只是備案，不必過早預約，避免綁死行程。</p>
</section>
<section class="guide-panel p-4 md:p-5">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🏨</span> 飯店／兒童／停車／取消期限確認表</h3>
<table class="guide-table">
<tr><th>住宿</th><th>日期</th><th>出發前動作</th></tr>
<tr><td>別府溫泉 新鶴田</td><td>5/29–6/2</td><td>確認 2大2小同住、鋪床方式、停車場、入浴稅、Check-in/Check-out、兒童備品。</td></tr>
<tr><td>AMANEK / 龜之井備案</td><td>備選</td><td>保留備案時要標記取消期限；確定不住就出發前取消，不要留到當天。</td></tr>
<tr><td>Candeo 熊本新市街</td><td>6/2–6/5</td><td>確認兩間房相鄰備註、兒童同住、停車場 TERRACE87、早餐、SkySpa 使用規則。</td></tr>
</table>
</section>
<section class="guide-panel p-4 md:p-5 bg-slate-50 border-slate-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🚙</span> 兩車自駕 SOP</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold text-gray-800 leading-relaxed">
<div class="check-row"><span class="box"></span><span>出發前指定前導車與壓車；兩車 LINE 群組固定只放導航、集合點、停車場與緊急訊息。</span></div>
<div class="check-row"><span class="box"></span><span>每站只導航下一站；不要一邊開一邊改整天路線。</span></div>
<div class="check-row"><span class="box"></span><span>迷路不路邊急停：直接到下一個便利商店、道之驛或停車場集合。</span></div>
<div class="check-row"><span class="box"></span><span>每 60–90 分鐘主動問廁所、喝水、點心；孩子爆掉前先休息。</span></div>
<div class="check-row"><span class="box"></span><span>油量低於半桶就補；阿蘇山區、天草路線不要賭下一站。</span></div>
<div class="check-row"><span class="box"></span><span>每個停車導航都寫明「哪個點的停車場」，不要只寫停車場導航。</span></div>
</div>
</section>
<section class="guide-panel p-4 md:p-5 bg-green-50 border-green-200">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>🏥</span> 醫療／保險應變流程</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold leading-relaxed text-gray-800">
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">非急症：</strong>量體溫與記錄症狀 → 先聯絡 TOKIO 或台灣旅平險協助專線 → 依指示找醫院 → 保留收據、診斷書、藥袋。</div>
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">急症：</strong>呼吸困難、意識異常、嚴重外傷、疑似脫水等，先打日本急救 119，不要為了保險流程延誤救治。</div>
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">就醫包：</strong>護照、保單截圖、信用卡、現金、常用藥清單、兒童體重、過敏史。</div>
<div class="bg-white border border-green-100 rounded-xl p-3"><strong class="text-green-800">防呆：</strong>TOKIO 是日本境內醫療補強，不取代台灣旅平險；抵日當天通常仍靠台灣保險銜接。</div>
</div>
</section>
<section class="guide-panel p-4 md:p-5">
<h3 class="text-xl mb-3 flex items-center gap-2"><span>☀️</span> 每日出門前 3 分鐘</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 font-bold leading-relaxed">
<div class="check-row"><span class="box"></span><span>今日第一站營業時間與休館日。</span></div>
<div class="check-row"><span class="box"></span><span>今日天氣、雨備、薄外套、雨具、防曬。</span></div>
<div class="check-row"><span class="box"></span><span>今日停車場導航與備用停車場。</span></div>
<div class="check-row"><span class="box"></span><span>今日是否需票券、訂位、活動時刻表。</span></div>
<div class="check-row"><span class="box"></span><span>小孩包：水、零食、濕紙巾、塑膠袋、薄外套、備用衣。</span></div>
<div class="check-row"><span class="box"></span><span>車輛：油量、ETC、手機電量、行動電源、兩車通訊。</span></div>
</div>
</section>
</div>
</dialog>

<dialog class="bg-white w-11/12 max-w-3xl rounded-[2rem] p-6 md:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto outline-none border-0 custom-scrollbar m-auto" id="harmonylandModal">
<button aria-label="關閉視窗" class="absolute top-4 right-4 bg-gray-100 text-gray-500 w-10 h-10 rounded-full font-bold hover:bg-gray-200 hover:text-gray-800 transition text-lg z-10" onclick="closeModal('harmonylandModal')">✕</button>
<div class="mb-6 border-b-2 border-pink-100 pb-4 pr-8">
<h2 class="text-2xl md:text-3xl font-black text-pink-600 flex items-center gap-2"><span>🎀</span> 和諧粉彩樂園 (Harmonyland)</h2>
<p class="text-sm text-gray-500 mt-2 font-bold bg-pink-50 inline-block px-3 py-1 rounded-md">2026/5/30 官網查詢：10:00–17:00｜仍以當日官方 Schedule 為準</p>
<a class="mt-3 inline-flex items-center gap-2 bg-pink-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 transition" href="https://www.harmonyland.jp/event" rel="noopener noreferrer" target="_blank"><span>🔗</span> 官方活動/營業時間</a>
</div>
<div class="space-y-4 pb-2">
<div class="bg-pink-50 p-4 rounded-xl shadow-sm border-2 border-pink-200">
<div class="font-bold text-pink-800 flex justify-between items-center mb-1 text-lg">⏱️ 實戰時間軸</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-white px-2 py-1 rounded inline-block">08:50 出發｜09:30 停車/票券/廁所｜10:00 入園｜16:30 離園</p>
<p class="text-sm text-gray-700 leading-relaxed">核心修正：5/30 不是 08:30 入園遊玩，而是 10:00 開園。提前抵達是為了停車、買票、廁所與卡第一段動線。</p>
</div>
<div class="bg-white p-4 rounded-xl shadow-sm border border-pink-200">
<div class="font-bold text-pink-700 flex justify-between items-center mb-1 text-lg">👑 主秀策略</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-gray-100 px-2 py-1 rounded inline-block">入園後先拍官方 Schedule</p>
<p class="text-sm text-gray-700 leading-relaxed">只鎖定 1 場主遊行/主秀 + 1～2 個角色互動即可。官方時刻若和前一天截圖不同，以園內公告與官方頁為準；熱門秀提早 20 分鐘佔位。</p>
</div>
<div class="bg-white p-4 rounded-xl shadow-sm border border-pink-200">
<div class="font-bold text-pink-700 flex justify-between items-center mb-1 text-lg">🍱 午餐與撤退</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-gray-100 px-2 py-1 rounded inline-block">11:30 前先吃或買輕食｜15:30 後以收束節奏為主，不再新增大型設施</p>
<p class="text-sm text-gray-700 leading-relaxed">週六親子團不要追餐廳完整度。16:30 前離園去 Youme Town，比多玩一個設施更穩。</p>
</div>
</div>
</dialog>

<dialog class="bg-white w-11/12 max-w-2xl rounded-[2rem] p-6 md:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto outline-none border-0 custom-scrollbar m-auto" id="umitamagoModal">
<button aria-label="關閉視窗" class="absolute top-4 right-4 bg-gray-100 text-gray-500 w-10 h-10 rounded-full font-bold hover:bg-gray-200 hover:text-gray-800 transition text-lg z-10" onclick="closeModal('umitamagoModal')">✕</button>
<div class="mb-6 border-b-2 border-teal-100 pb-4 pr-8">
<h2 class="text-2xl md:text-3xl font-black text-teal-600 flex items-center gap-2"><span>🦭</span> 大分 海之卵 (うみたまご)</h2>
<p class="text-sm text-gray-500 mt-2 font-bold bg-teal-50 inline-block px-3 py-1 rounded-md">2026/5/31 週日適用：通常 9:00–17:00｜仍以官方頁面與現場 QR Code 為準</p>
<a class="mt-3 inline-flex items-center gap-2 bg-teal-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 transition" href="https://www.umitamago.jp/exhibition_guide/show_schedule/" rel="noopener noreferrer" target="_blank"><span>🔗</span> 官方展演時間表</a>
</div>
<div class="space-y-3 pb-2">
<div class="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
<div class="font-bold text-gray-800 mb-1 text-lg">➕ 13:00｜うみたまパフォーマンス（若提早抵達）</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-white px-2 py-1 rounded inline-block">M2F 戶外表演區</p>
<p class="text-sm text-gray-700 leading-relaxed">若上午地獄很順、13:00 前已入館，這場可先看；若來不及，不追，直接卡 14:00 海豚。</p>
</div>
<div class="bg-blue-50 p-4 rounded-xl shadow-sm border-2 border-blue-200">
<div class="font-bold text-blue-800 mb-1 text-lg">🐬 14:00｜海豚表演</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-white px-2 py-1 rounded inline-block">2F 戶外海豚池</p>
<p class="text-sm text-gray-700 leading-relaxed">Day 3 抵達後第一個必守主秀。建議 13:35～13:40 前完成停車、廁所與入館，直接往戶外海豚池移動。</p>
</div>
<div class="bg-cyan-50 p-4 rounded-xl shadow-sm border border-cyan-200">
<div class="font-bold text-cyan-800 mb-1 text-lg">🏖️ 14:30｜あそびーち・友だちライブ（週末限定）</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-white px-2 py-1 rounded inline-block">ASB あそびーち</p>
<p class="text-sm text-gray-700 leading-relaxed">5/31 是週日，官方時刻表列有週末限定場。若孩子想放電，這段比硬逛展區更適合。</p>
</div>
<div class="bg-teal-50 p-4 rounded-xl shadow-sm border-2 border-teal-300">
<div class="font-bold text-teal-800 mb-1 text-lg">🦭 15:00｜うみたまパフォーマンス</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-white px-2 py-1 rounded inline-block">M2F 戶外表演區</p>
<p class="text-sm text-gray-700 leading-relaxed">全館高潮之一。前排可能濕身，幼童請帶毛巾與備用衣；看完若坐不住，可直接改 Asobeach，不必硬等下一場。</p>
</div>
<div class="bg-cyan-50 p-4 rounded-xl shadow-sm border border-cyan-200">
<div class="font-bold text-cyan-800 mb-1 text-lg">🐟 15:40｜大回遊水槽解說（週末為潛水員秀）</div>
<p class="text-xs text-gray-500 mb-2 font-black bg-white px-2 py-1 rounded inline-block">2F Mermaid Hall</p>
<p class="text-sm text-gray-700 leading-relaxed">接在 15:00 表演後最順，轉到室內看大水槽並降溫。若孩子疲累，這場可調整，改買點心/休息。</p>
</div>
</div>
</dialog>

<dialog class="bg-white w-11/12 max-w-5xl rounded-[2rem] p-6 md:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto outline-none border-0 custom-scrollbar m-auto" id="hotelModal" aria-labelledby="hotelModalTitle">
<button aria-label="關閉視窗" class="absolute top-4 right-4 bg-gray-100 text-gray-500 w-10 h-10 rounded-full font-bold hover:bg-gray-200 hover:text-gray-800 transition z-10 text-lg" onclick="closeModal('hotelModal')">✕</button>
<h2 id="hotelModalTitle" tabindex="-1" class="text-2xl font-black text-purple-600 mb-2 flex items-center gap-2 pr-8"><span>🏨</span> 飯店訂單資訊與抉擇分析</h2>
<p class="text-xs md:text-sm text-gray-500 mb-4 bg-purple-50 p-2 md:p-3 rounded-lg border border-purple-100 leading-relaxed">
                全線 7 晚維持「大分/別府 4晚 ＋ 熊本 3晚」雙基地策略。以下金額一律改用「單一家庭（1間房／2大2小）」呈現：先看每晚單價，再看該段住宿總價；雙家庭訂單總額僅保留在備註中作核對。
            </p>
<div class="space-y-6 pb-2">

<div class="border-2 border-kawaii-light-blue rounded-2xl p-4 shadow-sm bg-white relative">
<div class="absolute -right-2 -top-2 text-3xl opacity-20">♨️</div>
<h3 class="font-bold text-kawaii-blue mb-3 text-lg">第一階段 (4晚)：5/29 - 6/2 <span class="text-xs bg-white text-kawaii-blue px-2 py-0.5 rounded-full border ml-2">大分/別府連泊基地</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
<div class="p-3 bg-blue-50/70 rounded-xl border-2 border-blue-300 shadow-md flex flex-col justify-between">
<div>
<div class="font-bold text-gray-800 text-sm flex flex-wrap items-center gap-1.5 mb-1">別府溫泉 新鶴田飯店 <span class="bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded shadow-sm animate-pulse">👑 首選・4晚確認</span></div>
<div class="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded-full inline-block border mb-2">1間 標準日式房｜海景｜禁菸｜2大 + 2小(6、4)｜約55㎡</div>
<div class="text-[10px] text-blue-700 font-bold mt-1 leading-relaxed">Rakuten 訂單核對：單一家庭 4晚總價 TWD 12,262（當地幣別 ¥61,220），平均每晚約 TWD 3,066。入住 2026/5/29 15:00 起，退房 2026/6/2 10:00 前。</div>
<div class="text-[10px] text-slate-600 mt-1 leading-relaxed">優勢：日式大房與海景更適合 2大2小同房鋪被、攤開行李；北濱位置接近海邊、Youme Town 與別府市區採買。注意：中學生以上另收溫泉入浴稅 ¥250/人，現場付款；停車與鋪床方式入住前再確認。</div>
</div>
<div class="mt-2 text-right border-t border-blue-200 pt-2">
<div class="text-[10px] text-slate-500 font-bold">單家單價：平均約 TWD 3,066 / 晚</div>
<div class="font-black text-blue-700 text-sm">單家4晚總價：TWD 12,262</div>
<div class="text-[10px] text-slate-500 mt-0.5">核對用：當地幣別 ¥61,220；訂單已登錄兒童年齡 6、4。</div>
<div class="text-[10px] text-slate-500 mt-0.5">取消節點：2026/5/2 23:59（JST）前取消不收費；期限後再依訂單規定確認。</div>
</div>
</div>
<div class="p-3 bg-amber-50/80 rounded-xl border-2 border-amber-200 shadow-sm flex flex-col justify-between opacity-95">
<div>
<div class="font-bold text-gray-800 text-sm flex flex-wrap items-center gap-1.5 mb-1">AMANEK Beppu YULA-RE <span class="bg-amber-500 text-white text-[10px] px-1.5 py-0.5 rounded shadow-sm">留用備選・不移除</span></div>
<div class="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded-full inline-block border mb-2">2間 高級雙床房｜各 2大 + 2小｜禁菸｜Room Only</div>
<div class="text-[10px] text-amber-700 font-bold mt-1 leading-relaxed">Booking.com 訂單核對：雙家庭訂單原總額 TWD 36,185，其中 TWD 3,618 已由 Booking.com 代付折抵，實際仍需支付 TWD 32,567。換算單一家庭：4晚總價約 TWD 16,284，平均每晚約 TWD 4,071。</div>
<div class="text-[10px] text-slate-600 mt-1 leading-relaxed">定位：原首選改列留用備案。優勢是別府站前與市區步行便利；注意無法預約私人停車、附近公共停車約 ¥600/日、無早餐。</div>
</div>
<div class="mt-2 text-right border-t border-amber-200 pt-2">
<div class="text-[10px] text-slate-500 font-bold">單家單價：平均約 TWD 4,071 / 晚</div>
<div class="font-black text-amber-700 text-sm">單家4晚總價：約 TWD 16,284</div>
<div class="text-[10px] text-slate-500 mt-0.5">核對用：雙家實付 TWD 32,567（已扣 Booking.com 代付 TWD 3,618）</div>
<div class="text-[10px] text-slate-500 mt-0.5">保留至最後取消日前；取消條款照原訂單：入住前7天內取消約收 50%；未如期入住收全額。</div>
</div>
</div>
<div class="p-3 bg-gray-50 rounded-xl border-2 border-gray-200 shadow-sm flex flex-col justify-between opacity-95">
<div>
<div class="font-bold text-gray-800 text-sm flex flex-wrap items-center gap-1.5 mb-1">龜之井酒店 別府 <span class="bg-gray-500 text-white text-[10px] px-1.5 py-0.5 rounded shadow-sm">留用備選・待選</span></div>
<div class="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded-full inline-block border mb-2">2間 豪華雙床房 (禁菸)</div>
<div class="text-[10px] text-gray-600 font-bold mt-1 leading-relaxed">原方案保留：雙家庭4晚合計 ¥108,328，換算單一家庭4晚約 ¥54,164，平均每晚約 ¥13,541（約 TWD 2,844）。優勢是價格低；缺點是相對市區步行便利性與新鮮感需再比較。</div>
</div>
<div class="mt-2 text-right border-t border-gray-200 pt-2">
<div class="text-[10px] text-slate-500 font-bold">單家單價：約 ¥13,541 / 晚（約 TWD 2,844）</div>
<div class="font-black text-gray-700 text-sm">單家4晚總價：約 ¥54,164（約 TWD 11,374）</div>
<div class="text-[10px] text-slate-500 mt-0.5">核對用：雙家4晚合計 ¥108,328</div>
</div>
</div>
</div>
<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs md:text-sm text-amber-900 leading-relaxed">
<strong>別府住宿決策：</strong>目前以新鶴田日式房作為首選，理由是訂單已登錄 2大2小、房間空間較大、單家4晚 TWD 12,262 明顯低於 AMANEK。AMANEK 與龜之井都保留為留用備選，不移除；決策節點是 2026/5/2 23:59（JST）前，先核對停車、鋪床、兒童同住與溫泉稅後再取消備案。
</div>
</div>

<div class="border-2 border-kawaii-light-pink rounded-2xl p-4 shadow-sm bg-white relative">
<div class="absolute -right-2 -top-2 text-3xl opacity-20">🐻</div>
<h3 class="font-bold text-kawaii-pink mb-3 text-lg">第二階段 (3晚)：6/2 - 6/5 <span class="text-xs bg-white text-kawaii-pink px-2 py-0.5 rounded-full border ml-2">熊本連泊基地</span></h3>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
<div class="p-3 bg-pink-50/70 rounded-xl border-2 border-pink-300 shadow-md flex flex-col justify-between">
<div>
<div class="font-bold text-gray-800 text-sm flex flex-wrap items-center gap-1.5 mb-1">熊本新市街光芒飯店 <span class="bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded shadow-sm animate-pulse">👑 3晚連泊確認</span></div>
<div class="text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded-full inline-block border mb-2">2間 好萊塢雙床房 (Room Only)</div>
<div class="text-[10px] text-pink-700 font-bold mt-1">✨ 頂樓無敵星空溫泉 SkySpa！已備註兩間房相鄰 (close together)。</div>
</div>
<div class="mt-2 text-right border-t border-pink-200 pt-2">
<div class="text-[10px] text-slate-500 font-bold">單家單價：約 ¥14,838 / 晚（約 TWD 3,116）</div>
<div class="font-black text-pink-700 text-sm">單家3晚總價：約 ¥44,514（約 TWD 9,348）</div>
<div class="text-[10px] text-slate-500 mt-0.5">核對用：雙家3晚合計 ¥89,028</div>
</div>
</div>
</div>
</div>
</div>
</dialog>

<dialog class="bg-white w-11/12 max-w-md rounded-[2rem] p-6 md:p-8 shadow-2xl relative outline-none border-0 m-auto" id="budgetModal" aria-labelledby="budgetModalTitle">
<button aria-label="關閉視窗" class="absolute top-4 right-4 bg-gray-100 text-gray-500 w-10 h-10 rounded-full font-bold hover:bg-gray-200 hover:text-gray-800 transition text-lg z-10" onclick="closeModal('budgetModal')">✕</button>
<h2 id="budgetModalTitle" tabindex="-1" class="text-2xl font-black text-kawaii-pink mb-4 flex items-center gap-2 pr-8"><span>📊</span> 單家預算結算表 <span class="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full ml-auto shrink-0">單家口徑</span></h2>
<p class="text-sm text-gray-500 mb-5 font-bold bg-gray-100 px-3 py-2 rounded-lg border border-gray-200 leading-relaxed">
                ⚠️ 以下開銷全部統一以<span class="text-pink-600">「單一家庭 (1間房／2大2小)」</span>呈現；每個項目盡量標示單價與總價，避免再混用雙家庭總額。
            </p>
<div class="space-y-4">
<div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
<div class="flex justify-between items-end mb-1">
<span class="font-bold text-sm text-gray-700">✈️ 虎航機票（單家總價）</span>
<span class="font-black text-gray-800">40,000 TWD</span>
</div>
<p class="text-[10px] text-gray-500 mb-1 leading-tight">單家估算：4人合計 TWD 40,000，平均約 TWD 10,000 / 人。</p>
<div class="progress-bar-bg bg-gray-200"><div class="progress-bar-fill bg-gray-500 w-[36%]"></div></div>
</div>
<div class="bg-kawaii-light-blue/30 p-3 rounded-xl border border-blue-100 shadow-inner relative">
<div class="absolute -right-2 -top-2 text-2xl opacity-50 pointer-events-none">🏨</div>
<div class="flex justify-between items-end mb-1">
<span class="font-bold text-sm text-blue-800">🏨 住宿預估（單家7晚總價）</span>
<span class="font-black text-kawaii-blue">~21,610 TWD</span>
</div>
<p class="text-[10px] text-blue-600 mb-1 leading-tight">新鶴田：TWD 3,066/晚 × 4晚 = TWD 12,262；熊本光芒：約 TWD 3,116/晚 × 3晚 = TWD 9,348</p>
<div class="progress-bar-bg bg-blue-100"><div class="progress-bar-fill bg-kawaii-blue w-[19%]"></div></div>
</div>
<div class="bg-red-50 p-3 rounded-xl border border-red-200">
<div class="flex justify-between items-end mb-1">
<span class="font-bold text-sm text-red-800">🚗 租車與交通（單家總價）</span>
<span class="font-black text-red-600">20,000 TWD</span>
</div>
<p class="text-[10px] text-red-600 mb-1 leading-tight">租車/保險/增高墊雙家合計 ¥80,619 → 單家約 ¥40,310；另含過路費、油資預備金</p>
<div class="progress-bar-bg bg-red-100"><div class="progress-bar-fill bg-red-400 w-[18%]"></div></div>
</div>
<div class="bg-kawaii-light-pink/30 p-3 rounded-xl border border-pink-100">
<div class="flex justify-between items-end mb-1">
<span class="font-bold text-sm text-pink-800">🍔 餐飲與和牛烤肉（單家總價）</span>
<span class="font-black text-kawaii-pink">15,000 TWD</span>
</div>
<p class="text-[10px] text-pink-700 mb-1 leading-tight">單家估算：約 TWD 1,875 / 天；含一般餐飲與1～2餐較好的燒肉/海鮮彈性。</p>
<div class="progress-bar-bg bg-pink-100"><div class="progress-bar-fill bg-kawaii-pink w-[13%]"></div></div>
</div>
<div class="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
<div class="flex justify-between items-end mb-1">
<span class="font-bold text-sm text-yellow-800">🎟️ 門票活動（單家總價）</span>
<span class="font-black text-yellow-600">10,000 TWD</span>
</div>
<p class="text-[10px] text-yellow-700 mb-1 leading-tight">單家估算：含 Harmonyland、海之卵、African Safari/叢林巴士、Sea Donut 等門票活動</p>
<div class="progress-bar-bg bg-yellow-100"><div class="progress-bar-fill bg-yellow-400 w-[11%]"></div></div>
</div>
<div class="border-t-2 border-dashed border-gray-200 my-1"></div>
<div class="flex justify-between items-center p-4 bg-slate-800 rounded-xl border-2 border-slate-700 shadow-lg">
<span class="font-black text-white text-sm">單一家庭總計估算</span>
<span class="font-black text-2xl text-white tracking-tight">~106,610 <span class="text-sm text-gray-300">TWD</span></span>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[10px] text-slate-600 leading-relaxed">
<strong class="text-slate-800">單家口徑確認：</strong>以上總價已全部改為單一家庭估算；別府段目前採新鶴田首選價，AMANEK 與龜之井作為留用備案，不併入主要預算。
</div>
</div>
</dialog>

<dialog class="bg-white w-11/12 max-w-4xl rounded-[2rem] p-5 md:p-8 shadow-2xl relative max-h-[88vh] overflow-y-auto outline-none border-0 custom-scrollbar m-auto" id="dayInfoModal" aria-labelledby="dayInfoModalTitle">
<button aria-label="關閉視窗" class="absolute top-4 right-4 bg-gray-100 text-gray-500 w-10 h-10 rounded-full font-bold hover:bg-gray-200 hover:text-gray-800 transition z-10 text-lg" onclick="closeModal('dayInfoModal')">✕</button>
<div class="pr-10 border-b border-gray-100 pb-4 mb-4">
<h2 class="text-2xl md:text-3xl font-black text-gray-900 flex items-center gap-3" id="dayInfoModalTitle" tabindex="-1">每日資訊</h2>
<p class="text-sm text-gray-500 font-bold mt-2" id="dayInfoModalSubtitle">行程輔助資訊</p>
</div>
<div class="space-y-4 text-gray-900 leading-relaxed" id="dayInfoModalBody"></div>
</dialog>


`;
}
