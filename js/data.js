// 九州親子大冒險 - trip data and lookup tables
// Kept as plain globals so existing inline handlers and render code remain unchanged.

const icons = { play: '🎡', food: '🍽️', sight: '📸', drive: '🚗', action: '✅', rain: '☔', shop: '🛍️' };
        const bgColors = { play: 'bg-pink-50 border-pink-200', food: 'bg-yellow-50 border-yellow-200', sight: 'bg-blue-50 border-blue-200', drive: 'bg-slate-50 border-slate-300', action: 'bg-purple-50 border-purple-200', rain: 'bg-cyan-50 border-cyan-200', shop: 'bg-emerald-50 border-emerald-200' };
        const BACKUP_CARD_BASE_CLASS = "bg-white p-4 md:p-5 rounded-xl border shadow-sm hover:shadow-md transition-all flex items-start gap-3";

        const parkingLookup = {
            "阿蘇熊本空港": "阿蘇くまもと空港 駐車場",
            "阿蘇くまもと空港": "阿蘇くまもと空港 駐車場",
            "俵山交流館 萌の里": "俵山交流館 萌の里 駐車場",
            "白川水源": "白川水源 駐車場",
            "高森駅": "高森駅 駐車場",
            "上色見熊野座神社": "上色見熊野座神社 駐車場",
            "Hotel New Tsuruta Beppu": "ザ・パーク 別府北浜 ホテルニューツルタ 駐車場",
            "ゆめタウン別府": "ゆめタウン別府 駐車場",
            "ハーモニーランド": "ハーモニーランド 駐車場",
            "大分県立美術館 OPAM": "大分県立美術館 OPAM 駐車場",
            "かまど地獄": ["かまど地獄 駐車場", "海地獄 駐車場"],
            "大分マリーンパレス水族館 うみたまご": "うみたまご 駐車場",
            "別府タワー": "別府タワー 近隣 駐車場",
            "アフリカンサファリ": "九州自然動物公園アフリカンサファリ 駐車場",
            "湯の坪街道": ["湯の坪街道 駐車場", "金鱗湖 駐車場"],
            "別府 焼肉 韓国苑": "焼肉韓国苑 別府店 駐車場",
            "ゆふいんフローラルヴィレッジ": "湯布院フローラルヴィレッジ 駐車場",
            "大観峰": "大観峰 駐車場",
            "道の駅阿蘇": "道の駅 阿蘇 駐車場",
            "道の駅 阿蘇": "道の駅 阿蘇 駐車場",
            "阿蘇神社": "阿蘇神社 駐車場",
            "草千里ヶ浜": "草千里駐車場",
            "CANDEO HOTELS 熊本新市街": "TERRACE87 駐車場 熊本市中央区新市街8-7",
            "御船町恐竜博物館": ["御船町恐竜博物館 駐車場", "御船町ふれあい広場 駐車場"],
            "熊本 新市街 ランチ": "辛島公園地下駐車場",
            "くまモンスクエア": "鶴屋パーキング 熊本 駐車場",
            "ゆめタウン光の森": "ゆめタウン光の森 駐車場",
            "SAKURA MACHI Kumamoto": "サクラマチ クマモト 駐車場",
            "長部田海床路": "長部田海床路 駐車場",
            "天草五橋": "藍のあまくさ村 駐車場",
            "L’isola Terrace Amakusa": "リゾラテラス天草 駐車場",
            "海中水族館シードーナツ": "海中水族館シードーナツ 駐車場",
            "mio camino AMAKUSA": ["mio camino AMAKUSA 駐車場", "リゾラテラス天草 駐車場"],
            "イオンモール熊本": "イオンモール熊本 駐車場",
            "熊本県庁 ルフィ像": "熊本県庁 来庁者駐車場 ルフィ像",
            "熊本市動植物園": "熊本市動植物園 駐車場"
        };

        const parkingLabelLookup = {
            "阿蘇くまもと空港 駐車場": "阿蘇熊本機場停車場導航",
            "俵山交流館 萌の里 駐車場": "萌之里／娜美像停車場導航",
            "白川水源 駐車場": "白川水源停車場導航",
            "高森駅 駐車場": "高森車站／佛朗基像停車場導航",
            "上色見熊野座神社 駐車場": "上色見熊野座神社停車場導航",
            "ザ・パーク 別府北浜 ホテルニューツルタ 駐車場": "新鶴田指定停車場導航",
            "ゆめタウン別府 駐車場": "Youme Town 別府停車場導航",
            "ハーモニーランド 駐車場": "Harmonyland 停車場導航",
            "大分県立美術館 OPAM 駐車場": "OPAM 美術館停車場導航",
            "かまど地獄 駐車場": "灶地獄停車場導航",
            "海地獄 駐車場": "海地獄停車場導航",
            "うみたまご 駐車場": "海之卵停車場導航",
            "別府タワー 近隣 駐車場": "別府塔周邊停車場導航",
            "九州自然動物公園アフリカンサファリ 駐車場": "African Safari 停車場導航",
            "湯の坪街道 駐車場": "湯之坪街道周邊停車場導航",
            "金鱗湖 駐車場": "金鱗湖周邊停車場導航",
            "焼肉韓国苑 別府店 駐車場": "韓國苑別府店停車場導航",
            "湯布院フローラルヴィレッジ 駐車場": "童話村周邊停車場導航",
            "大観峰 駐車場": "大觀峰停車場導航",
            "道の駅 阿蘇 駐車場": "道之驛阿蘇停車場導航",
            "阿蘇神社 駐車場": "阿蘇神社停車場導航",
            "草千里駐車場": "草千里停車場導航",
            "TERRACE87 駐車場 熊本市中央区新市街8-7": "Candeo 提攜停車場 TERRACE87 導航",
            "御船町恐竜博物館 駐車場": "御船恐龍博物館停車場導航",
            "御船町ふれあい広場 駐車場": "布魯克像／ふれあい廣場停車場導航",
            "辛島公園地下駐車場": "辛島公園地下停車場導航",
            "鶴屋パーキング 熊本 駐車場": "熊本熊廣場周邊停車場導航",
            "ゆめタウン光の森 駐車場": "Youme Town 光之森停車場導航",
            "サクラマチ クマモト 駐車場": "SAKURA MACHI 停車場導航",
            "長部田海床路 駐車場": "長部田海床路停車場導航",
            "藍のあまくさ村 駐車場": "藍之天草村停車場導航",
            "リゾラテラス天草 駐車場": "L’isola Terrace 停車場導航",
            "海中水族館シードーナツ 駐車場": "Sea Donut 停車場導航",
            "mio camino AMAKUSA 駐車場": "Mio Camino 停車場導航",
            "イオンモール熊本 駐車場": "AEON MALL 熊本停車場導航",
            "熊本県庁 来庁者駐車場 ルフィ像": "熊本縣廳來庁者停車場導航",
            "熊本市動植物園 駐車場": "熊本市動植物園停車場導航"
        };

const itineraryData = [
            {
                        "day": 1,
                        "date": "5/29 (五)",
                        "title": "🌋 Day 1｜熊本抵達・南阿蘇彩蛋線・別府進場",
                        "weather": "🌤️ 預報 24-28°C",
                        "mapLink": "https://www.google.com/maps/dir/阿蘇熊本空港/俵山交流館萌の里/白川水源/高森駅/上色見熊野座神社/Hotel+New+Tsuruta+Beppu",
                        "route": "熊本機場 🚗 → 萌之里/娜美 → 白川水源 → 高森/佛朗基 → 上色見熊野座 → 別府",
                        "hotel": "別府溫泉 新鶴田飯店 (連住第 1/4 晚｜首選)",
                        "checklist": [
                                    "入境禁帶品防呆：肉鬆、肉乾、香腸、火腿、含肉泡麵、肉包、水果、生鮮蔬菜不要帶下飛機；機上餐吃不完也不要入境。",
                                    "常備藥包：兒童退燒、腸胃、過敏、暈車與外傷用品放原包裝；處方藥留處方箋或診斷證明影本，管制/大量藥品出發前先查日本規定。",
                                    "租車文件分車備份：兩台車各有一份租車訂單、飯店地址、停車場、緊急聯絡；不要所有文件只放前導車。",
                                    "出發前已完成 Visit Japan Web：每位大人與小孩都有入境審查＋海關申報 QR code，並已截圖＋紙本備份放進護照夾。",
                                    "若 VJW 或 TOKIO 畫面顯示日文/英文，打開首頁『行前準備中心』對照日文欄位表，不要憑感覺填。",
                                    "台灣旅平險/旅遊不便險已涵蓋全程；抵達日本後若要加買 TOKIO OMOTENASHI POLICY，建議到第一晚飯店連 Wi-Fi 後逐人投保並截圖完成頁。",
                                    "航班：去程 Tigerlight IT766，2026/5/29 08:45 高雄 KHH 起飛，11:50 抵達熊本 KMJ；抵達後先處理入境、取車與右駕設定，不排正式午餐。",
                                    "證件/租車包：護照、台灣駕照正本、日文譯本、Budget 租車單、信用卡放同一個透明夾，不分散到兩台車。",
                                    "取車必拍：車身四面、輪框、後照鏡、行李箱、油量、ETC 卡、保險與 2 個增高座椅都拍照留存。",
                                    "導航先做『整段路線』，但實際只看下一站；萌之里後每站都先問孩子是否要廁所/喝水/點心。",
                                    "第一天安排的南阿蘇景點盡量保留；若 16:15 未到上色見，可改鳥居快閃或略過本殿，17:00 後優先往別府移動，不額外加遠點。",
                                    "兩車通訊：出發前確認 LINE 群組、前導車/壓車、迷路集合點規則，避免路邊臨停重整路線。"
],
                        "highlights": [
                                    "🍊 娜美像",
                                    "🤖 佛朗基像",
                                    "💧 白川水源",
                                    "⛩️ 上色見熊野座神社",
                                    "🏨 別府連泊進場"
                        ],
                        "sections": [
                                    {
                                                "type": "action",
                                                "time": "11:50 - 13:00",
                                                "mapQuery": "阿蘇熊本空港",
                                                "title": "阿蘇熊本機場：取車與右駕設定",
                                                "content": "降落後先往 <strong class='text-slate-800'>阿蘇熊本機場</strong>／<strong class='text-slate-800'>Sora-Yoka 遊客中心</strong> 集合，再依租車公司指示前往 <strong class='text-slate-800'>Budget 熊本機場店</strong>。取車完成後，兩台車先同步 Google Maps、LINE 群組與第一站。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=阿蘇熊本空港' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 機場導航</a><a href='https://www.kumamoto-airport.co.jp/zh-TW/%E5%9C%B0%E5%9C%96-%E7%B4%A2%E6%8B%89%E7%B4%84%E5%8D%A1%E9%81%8A%E5%AE%A2%E4%B8%AD%E5%BF%83/' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>✈️</span> 機場/Sora-Yoka 官方</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>第一天原則：</strong>維持南阿蘇排點，但把每一站視為可縮短點；先讓駕駛熟悉右駕、車寬與 ETC。抵達別府才是勝利。</li><li><strong>兩車協作：</strong>出發前指定一台前導車、一台壓車；迷路時不要臨停路邊，先找便利商店或道之驛再重整。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "13:30 - 14:25",
                                                "mapQuery": "俵山交流館 萌の里",
                                                "title": "俵山交流館萌之里＋娜美像",
                                                "content": "第一站安排 <strong class='text-slate-800'>俵山交流館萌之里</strong>，距機場約 20 分鐘，停車方便、廁所方便、可買在地便當/牛奶/蔬果。👉 <strong class='text-slate-800'>娜美像</strong> 就在交流館旁草地區，拍照後讓孩子跑 10 分鐘再上車。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=俵山交流館 萌の里' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 萌之里導航</a><a href='https://www.google.com/maps/search/?api=1&query=ナミ像 西原村' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 娜美像導航</a><a href='https://moenosato.net/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 萌之里官方</a><a href='https://op-kumamoto.com/' target='_blank' rel='noopener noreferrer' class='bg-amber-50 text-amber-700 border-2 border-amber-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🏴‍☠️</span> ONE PIECE 官方專案/地圖</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>銅像地圖：</strong>ONE PIECE 官方專案/地圖可作為全程銅像總覽；本日先以娜美像與佛朗基像串起南阿蘇線，後續各雕像使用各自導航即可。</li><li><strong>午餐策略：</strong>不追求正式餐廳，買便當、飯糰、牛奶與點心最穩。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "14:50 - 15:25",
                                                "mapQuery": "白川水源",
                                                "title": "白川水源：短版踏水與取水",
                                                "content": "前往 <strong class='text-slate-800'>白川水源</strong>，步道平緩，適合讓孩子看湧泉、踏踏水、裝一小瓶天然湧泉。車輛可使用 <strong class='text-slate-800'>白川水源周邊停車場</strong>。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=白川水源' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 白川水源導航</a><a href='https://kumamoto.guide/tw/spots/detail/219' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>💧</span> 熊本官方介紹</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>彈性提示：</strong>若離開萌之里已超過 14:45，或孩子上車秒睡，白川水源可改短停或順延略過，把精神留給佛朗基與進別府。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "15:40 - 16:05",
                                                "mapQuery": "高森駅",
                                                "title": "高森車站＋佛朗基像",
                                                "content": "順路停 <strong class='text-slate-800'>高森車站</strong>，👉 <strong class='text-slate-800'>佛朗基像</strong> 位於站前廣場，停車、廁所、拍照都很快，是 Day1 最不繞路的高報酬銅像點。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=高森駅' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 高森車站導航</a><a href='https://www.google.com/maps/search/?api=1&query=フランキー像 高森駅' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 佛朗基像導航</a><a href='https://kumamoto.guide/spots/detail/20051' target='_blank' rel='noopener noreferrer' class='bg-amber-50 text-amber-700 border-2 border-amber-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🤖</span> 佛朗基像官方介紹</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>停留上限：</strong>20～25 分鐘足夠，避免壓縮後面山路與別府 Check-in。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "16:15 - 17:00",
                                                "mapQuery": "上色見熊野座神社",
                                                "title": "上色見熊野座神社：體力許可才爬",
                                                "content": "前往 <strong class='text-slate-800'>上色見熊野座神社</strong>，車輛停 <strong class='text-slate-800'>神社停車場</strong>。參道石階與青苔非常美，但需要爬坡與石階，抵達時間太晚、下雨或孩子疲累就只拍鳥居，不硬上。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=上色見熊野座神社' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 神社導航</a><a href='https://kumamoto.guide/spots/detail/12741' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>⛩️</span> 熊本官方介紹</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>彈性提示：</strong>16:15 後才抵達、地面濕滑、或任何一個小孩喊累，就改成鳥居快閃或略過本殿與穿戶岩，把時間留給別府入住。</li></ul>"
                                    },
                                    {
                                                "type": "drive",
                                                "time": "17:00 - 19:15",
                                                "mapQuery": "Hotel New Tsuruta Beppu",
                                                "title": "進入別府：飯店 Check-in＋超市補給",
                                                "content": "從南阿蘇往 <strong class='text-slate-800'>別府溫泉 新鶴田飯店</strong> 拉車，抵達後先 Check-in。新鶴田位於北濱海邊，日式房空間較大，先確認房間、鋪床方式與入浴稅。若入住完成順利，晚餐可步行或短程開車補給，以 <strong class='text-slate-800'>Youme Town 別府</strong>、<strong class='text-slate-800'>Tokiwa 別府店</strong> 或 <strong class='text-slate-800'>MEGA Trial 別府店</strong> 為主。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=Hotel+New+Tsuruta+Beppu' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 新鶴田飯店導航</a><a href='https://www.google.com/maps/search/?api=1&query=ゆめタウン別府' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Youme Town 別府</a><a href='https://www.google.com/maps/search/?api=1&query=トキハ別府店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Tokiwa 別府</a><a href='https://www.google.com/maps/search/?api=1&query=MEGAセンタートライアル 別府店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> MEGA Trial</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>今日終點：</strong>成功抵達飯店、車停好、孩子洗澡睡覺，就是 Day1 完美結束。</li><li><strong>飯店停車：</strong>新鶴田官方停車為飯店旁指定投幣停車場，住客優待入庫後 21 小時最大 ¥700；先到先停，滿車時改用周邊停車場。優待僅適用指定第一/第二停車場。<a href='https://www.newtsuruta.com/access/' target='_blank' rel='noopener noreferrer'>官方停車說明</a></li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "ゆめタウン別府",
                                                "title": "Day1 彈性方案：別府提早進場",
                                                "content": "Day1 南阿蘇線維持完整方向；若任一點縮短或略過，不再補新的遠點，改把時間還給晚餐、停車與睡眠。<br><strong>A 短版南阿蘇：</strong>萌之里＋娜美完成後，白川水源或上色見擇一，佛朗基盡量保留。<br><strong>B 直接進別府：</strong>若取車超過 13:30 或山區天候差，改為萌之里快閃後直奔新鶴田，晚餐補給放 Youme Town / Tokiwa / MEGA Trial。<br><strong>C 飯店回血：</strong>抵達後只做停車、Check-in、泡湯、鋪床確認，不再外出逛街。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=ゆめタウン別府' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Youme Town 別府</a><a href='https://www.google.com/maps/search/?api=1&query=トキハ別府店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Tokiwa 別府</a><a href='https://www.google.com/maps/search/?api=1&query=MEGAセンタートライアル 別府店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> MEGA Trial</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>彈性原則：</strong>Day1 的彈性方案不是加點，而是提早把車停好、孩子洗好、睡眠補回來。</li></ul>"
                                    }
                        ],
                        "tips": "Day1 是右駕適應日，南阿蘇每站都採彈性停留；不要為了湊滿景點犧牲抵達別府的安全與睡眠。"
            },
            {
                        "day": 2,
                        "date": "5/30 (六)",
                        "title": "🎀 Day 2｜Harmonyland 早起日＋別府一站式補給",
                        "weather": "🌤️ 預報 23-27°C",
                        "mapLink": "https://www.google.com/maps/dir/Hotel+New+Tsuruta+Beppu/ハーモニーランド/ゆめタウン別府/Hotel+New+Tsuruta+Beppu",
                        "route": "別府 🚗 → Harmonyland → Youme Town 別府 → 飯店",
                        "hotel": "別府溫泉 新鶴田飯店 (連住第 2/4 晚｜首選)",
                        "checklist": [
                                    "票券防呆：Harmonyland 電子票/購票頁已存手機與截圖；入園前先拍當日官方秀表，確認主遊行與角色活動時間。",
                                    "入園前：防曬、帽子、薄外套、雨具、濕紙巾、水壺、行動電源集中放一個樂園包。",
                                    "營業時間修正：5/30 官方頁面顯示 10:00–17:00；08:50 出發、09:30 到場處理停車/票券/廁所、10:00 入園。",
                                    "入園第一件事：拍官方秀表/地圖，確認主遊行與角色活動時間，不只依賴前一天資料。",
                                    "午餐策略：11:30 前先吃或先買輕食，避免 12 點後全園一起排隊導致孩子餓爆。",
                                    "購物策略：想買限定商品先拍照加入清單，離園前集中採買，不每間店都停。",
                                    "離園線：15:30 後以收束節奏為主，不再新增大型設施，16:30 前離園；若下雨或孩子累，Youme Town 補給直接提前。"
],
                        "highlights": [
                                    "🎀 Sanrio 樂園",
                                    "👑 Parade Parallel",
                                    "🛍️ Youme Town 補給",
                                    "🧺 隔天水族館備糧"
                        ],
                        "sections": [
                                    {
                                                "type": "play",
                                                "time": "08:50 - 16:30",
                                                "mapQuery": "ハーモニーランド",
                                                "title": "Harmonyland：Sanrio 主秀日",
                                                "content": "08:50 從新鶴田出發前往 <strong class='text-slate-800'>Harmonyland</strong>，停 <strong class='text-slate-800'>Harmonyland 停車場</strong>。5/30 官方營業時間為 10:00–17:00；09:30 前後抵達後先處理停車、票券、廁所與推車/包包，10:00 入園。入園後先確認當日活動板與官方時刻，核心只守 2～3 個秀，不追全設施。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=ハーモニーランド' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Harmonyland 導航</a><a href='https://www.harmonyland.jp/event' target='_blank' rel='noopener noreferrer' class='bg-white text-pink-700 border-2 border-pink-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🎀</span> 官方活動/表演時間</a><a href='https://www.harmonyland.jp/' target='_blank' rel='noopener noreferrer' class='bg-white text-pink-700 border-2 border-pink-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🕒</span> 官方首頁/營業時間</a></div><button onclick=\"showModal('harmonylandModal')\" class=\"mt-3 bg-pink-500 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition flex items-center gap-2\"><span>🎀</span> 查看樂園展演筆記</button>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>主秀策略：</strong>09:30 到場不是為了入園，是為了把停車/票券/廁所前置；10:00 入園後先拍官方 Schedule，熱門秀提早 20 分鐘找位置；孩子若熱到失控，就找室內/陰影設施降溫。</li><li><strong>午餐策略：</strong>比起排熱門餐廳，快速補熱量更重要。</li></ul>"
                                    },
                                    {
                                                "type": "food",
                                                "time": "17:00 - 20:00",
                                                "mapQuery": "ゆめタウン別府",
                                                "title": "Youme Town 別府：晚餐＋補給一次完成",
                                                "content": "16:30 前離園後約 17:15 抵達 <strong class='text-slate-800'>Youme Town 別府</strong>。美食街、超市、DAISO、KALDI、扭蛋與童裝都集中，適合兩家分頭行動：一組買晚餐、一組買隔天水族館點心與飲料。若想追 Workman 最新機能線，備案是 <strong class='text-slate-800'>Tokiwa Wasada Town / Workman Colors</strong>，但會多拉車，非必要不去。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=ゆめタウン別府' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Youme Town 導航</a><a href='https://www.google.com/maps/search/?api=1&query=トキハわさだタウン Workman Colors' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Workman Colors 備案導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>父母保命：</strong>17:15 左右先進 Youme Town 補給；停車方便、廁所方便、孩子可自由選餐才是王道，不要回飯店後再重新開車找餐廳。</li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "大分県立美術館 OPAM",
                                                "title": "Harmonyland 彈性方案：別府/大分室內",
                                                "content": "Harmonyland 仍是主線；若因現場狀況提早離園或想保留體力，調整時不要再找戶外遊樂園，改成低移動、可吃可坐的地方。<br><strong>A 最穩：</strong>Youme Town 別府晚餐＋超市＋扭蛋，直接完成補給。<br><strong>B 雨天文化案：</strong>大分縣立美術館 OPAM，適合大雨、需要室內空調與洗手間時使用。<br><strong>C 近距離短案：</strong>別府塔展望台或竹細工傳統產業會館；兩者都比再拉遠行程安全。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=大分県立美術館 OPAM' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> OPAM 導航</a><a href='https://www.opam.jp/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> OPAM 官方</a><a href='https://bepputower.co.jp/en/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 別府塔官方</a><a href='https://oita-tourism.com/en/attractions/detail_1159.html' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 竹細工會館資訊</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>不要做：</strong>Harmonyland 若縮短，不建議臨時補城島高原或其他大型戶外點，疲勞與排隊風險太高。</li></ul>"
                                    }
                        ],
                        "tips": "Day2 是全程第一個早起日。目標不是玩遍 Harmonyland，而是看主秀、買到開心、全員安全回飯店。"
            },
            {
                        "day": 3,
                        "date": "5/31 (日)",
                        "title": "♨️ Day 3｜別府地獄微踩點＋海之卵展演連擊",
                        "weather": "🌤️ 預報 22-26°C",
                        "mapLink": "https://www.google.com/maps/dir/Hotel+New+Tsuruta+Beppu/かまど地獄/海地獄/大分マリーンパレス水族館うみたまご/Hotel+New+Tsuruta+Beppu",
                        "route": "別府市區 🚗 → 地獄溫泉 → 海之卵 → 飯店",
                        "hotel": "別府溫泉 新鶴田飯店 (連住第 3/4 晚｜首選)",
                        "checklist": [
                                    "上午地獄區只做短打：灶地獄或海地獄二選一，若孩子熱/累/排隊長，直接砍第二個。",
                                    "出門先開海之卵官方展演頁；5/31 週日重點排序為 14:00 海豚、14:30 あそびーち、15:00 うみたまパフォーマンス、15:40 大回遊水槽。",
                                    "水族館包：薄外套、濕紙巾、水壺、零食、可能被海象/海豚區濺濕的小毛巾。",
                                    "12:45 前離開午餐/鐵輪區，13:30 前抵達海之卵；晚到就放棄展區閒逛，直接卡秀場。",
                                    "車上先講規則：海之卵不是逛完全部，而是看完海豚、海象、大水槽三連發就成功。"
],
                        "highlights": [
                                    "♨️ 灶地獄",
                                    "🌊 海地獄備案",
                                    "🐬 海豚表演",
                                    "🦭 海象互動",
                                    "🏖️ Asobeach"
                        ],
                        "sections": [
                                    {
                                                "type": "sight",
                                                "time": "10:00 - 12:50",
                                                "mapQuery": "かまど地獄",
                                                "title": "地獄溫泉：灶地獄主線，海地獄視時間",
                                                "content": "早上視起床時間決定：主線只走 <strong class='text-slate-800'>灶地獄</strong>，若 10:00 前能出門才加 <strong class='text-slate-800'>海地獄</strong>。停車可找 <strong class='text-slate-800'>灶地獄停車場</strong> 或 <strong class='text-slate-800'>海地獄停車場</strong>。中午在 <strong class='text-slate-800'>地獄蒸工房鐵輪</strong>、周邊小吃或便利商店簡化。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=かまど地獄' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 灶地獄導航</a><a href='https://www.google.com/maps/search/?api=1&query=海地獄' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 海地獄導航</a><a href='https://kamadojigoku.com/traditional-chinese/' target='_blank' rel='noopener noreferrer' class='bg-white text-red-700 border-2 border-red-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>♨️</span> 灶地獄官方</a><a href='https://beppu-tourism.com/zh-tw/course01/' target='_blank' rel='noopener noreferrer' class='bg-white text-red-700 border-2 border-red-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 別府地獄巡禮資訊</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>時間建議：</strong>12:50 左右建議往海之卵移動。今天下午展演比地獄完整度更值得保留。</li></ul>"
                                    },
                                    {
                                                "type": "play",
                                                "time": "13:30 - 16:30",
                                                "mapQuery": "大分マリーンパレス水族館 うみたまご",
                                                "title": "海之卵：依官方展演順序參與",
                                                "content": "抵達 <strong class='text-slate-800'>大分海之卵水族館</strong>，停 <strong class='text-slate-800'>海之卵停車場</strong>。建議順序：13:30～13:40 入館/廁所 → 14:00 海豚表演 → 14:30 あそびーち・友だちライブ（週日限定）→ 15:00 うみたまパフォーマンス → 15:40 大回遊水槽解說（週末為潛水員秀）→ <strong class='text-slate-800'>Asobeach</strong> 視體力放電。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=大分マリーンパレス水族館 うみたまご' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 海之卵導航</a><a href='https://www.umitamago.jp/exhibition_guide/show_schedule/' target='_blank' rel='noopener noreferrer' class='bg-white text-teal-700 border-2 border-teal-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🦭</span> 官方展演時間表</a><a href='https://www.umitamago.jp/' target='_blank' rel='noopener noreferrer' class='bg-white text-teal-700 border-2 border-teal-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 海之卵官方首頁</a></div><button onclick=\"showModal('umitamagoModal')\" class=\"mt-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition flex items-center gap-2\"><span>🦭</span> 展演時刻大補帖</button>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>現場優先：</strong>若官方時刻表與網頁不一致，以當日館內公告為準。</li><li><strong>孩子狀態：</strong>15:00 看完若坐不住，直接改 Asobeach，不必硬等 15:40。</li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "別府タワー",
                                                "title": "地獄/海之卵彈性方案：同區低風險安排",
                                                "content": "地獄以灶地獄 or 海地獄擇一或都去為原則；若上午停留較久，就不要補 7 地獄共通。<br><strong>A 地獄縮短：</strong>只去灶地獄，保留海之卵展演時間。<br><strong>B 海之卵縮短：</strong>只追 14:00 海豚、14:30 あそびーち、15:00 うみたまパフォーマンス三段核心；其他館內自由看。<br><strong>C 完全室內/近距離：</strong>別府塔、Youme Town 或 OPAM；若天氣好但想放電，可把高崎山自然動物園列為海之卵旁邊加點。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=別府タワー' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 別府塔導航</a><a href='https://bepputower.co.jp/en/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 別府塔官方</a><a href='https://www.google.com/maps/search/?api=1&query=高崎山自然動物園' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 高崎山導航</a><a href='https://www.umitamago.jp/show_schedule-en/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🕒</span> 海之卵展演表</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>排序：</strong>這天的主秀其實是海之卵展演，地獄要替展演讓路。</li></ul>"
                                    }
                        ],
                        "tips": "Day3 的成功關鍵是 13:30 到海之卵。上午地獄只做精華，不要把下午展演壓掉。"
            },
            {
                        "day": 4,
                        "date": "6/1 (一)",
                        "title": "🦁 Day 4｜九州自然動物園早鳥戰＋由布院快閃",
                        "weather": "🌤️ 預報 24-28°C",
                        "mapLink": "https://www.google.com/maps/dir/Hotel+New+Tsuruta+Beppu/アフリカンサファリ/湯の坪街道/金鱗湖/Hotel+New+Tsuruta+Beppu",
                        "route": "別府 🚗 → African Safari → 由布院 → 別府",
                        "hotel": "別府溫泉 新鶴田飯店 (連住第 4/4 晚｜首選)",
                        "checklist": [
                                    "訂位防呆：今晚若吃韓國苑別府店，出發前確認訂位時間、人數、停車與兒童座位；若未訂，先備妥 Youme Town / 速食 / 超市晚餐備案。",
                                    "由布院防呆：若要 B-SPEAK P-roll，出發前確認是否已電話預留；若沒預留，現場售完就改吃其他甜點，不為甜點壓縮回別府時間。",
                                    "07:45 前完成早餐與上廁所，08:00 準時從別府出門；越早抵達，越容易保留叢林巴士、自駕 Safari 與接觸區的完整度。",
                                    "到門口先分工：一位排隊/買票，一位帶孩子廁所與整理外套零食，兩台車保持明確集合點。",
                                    "叢林巴士安排：官網網路預約只開放平日下午部分班次；本日目標是早上班次，因此採 08:00 出門、現場排早上先到先買票。",
                                    "Safari 順序：一早 08:00 出門現場排早班；無論是否買到中午前叢林巴士，都至少自駕 Safari 1 圈；若只剩 12:30 後或售罄，就只做自駕 Safari＋小動物區。",
                                    "等待巴士期間只做低風險項目：小動物接觸、袋鼠/迷你馬、廁所、點心；不要走太遠錯過集合。",
                                    "12:15 起開始評估：若想完整保留貓頭鷹＋湯之坪＋金鱗湖，建議 12:30 左右離園；若金鱗湖改短拍或略過，13:00 前後離園仍可接受。",
                                    "新鶴田停車提醒：今天晚回別府，回飯店前先導航指定停車場；若滿車，直接改周邊停車場再步行。"
],
                        "highlights": [
                                    "🦁 叢林巴士",
                                    "🚗 自駕 Safari",
                                    "🐰 小動物互動",
                                    "🌸 湯之坪街道",
                                    "⏱️ 12:30–13:00 彈性離園"
                        ],
                        "sections": [
                                    {
                                                "type": "play",
                                                "time": "08:00 - 12:30/13:00",
                                                "mapQuery": "アフリカンサファリ",
                                                "title": "九州自然動物園 African Safari：早鳥排巴士＋必跑自駕 Safari",
                                                "content": "08:00 從 <strong class='text-slate-800'>別府溫泉 新鶴田飯店</strong> 出發，目標 08:30 抵達 <strong class='text-slate-800'>九州自然動物園 African Safari 正門</strong>。官網網路預約僅平日下午部分班次，早上班次採當日先到先買；入園後一位排/買叢林巴士票，一位帶孩子廁所與整理外套零食。<strong class='text-red-700'>本日固定原則：</strong>不管是否買到中午前叢林巴士，都至少自駕 Safari Zone 1 圈；叢林巴士是加碼，不是取代自駕。園內設施不使用 Google Maps 導航，全部依官方指標走。<br><strong>A 早班票：</strong>先搭巴士或先自駕，依售票時間倒排；兩種體驗都做，並視由布院目標在 12:30–13:00 間收束。<br><strong>B 中午前票：</strong>先用自己的車跑一圈 Safari Zone，再回指定乘車處搭叢林巴士。<br><strong>C 太晚/售罄：</strong>不等巴士，做自駕 Safari＋接觸區，再依時間轉由布院標準版或短版。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=アフリカンサファリ' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> African Safari 導航</a><a href='https://africansafari.co.jp/information/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🕒</span> 官方營業/票價</a><a href='https://africansafari.co.jp/jungle-bus/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🦁</span> 叢林巴士官方</a><a href='https://africansafari.co.jp/faq/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>❓</span> 官方 FAQ</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>最重要：</strong>官網明示網路預約外時段為當日先到先售，混雜時可能搭不到。自駕 Safari 是必做主菜，叢林巴士是加碼；12:30–13:00 是由布院時間窗，依想保留的由布院內容決定何時收束。<br/><strong>導航原則：</strong>只導航到 African Safari 正門；園內分區全部看官方指標，不用 Google Maps 搜內部區域。</li><li><strong>安全：</strong>叢林巴士金網車體可能悶熱，補水與遮陽帽要先拿在身上。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "13:15/13:45 - 16:30",
                                                "mapQuery": "湯の坪街道",
                                                "title": "由布院快閃：貓頭鷹＋湯之坪逛街主線，金鱗湖為輔",
                                                "content": "下午主線改為 <strong class='text-slate-800'>湯布院貓頭鷹之森</strong>＋<strong class='text-slate-800'>湯之坪街道</strong> 快閃。車停外圍停車場後步行，不開進人潮核心。貓頭鷹之森官方營業約 9:30–17:30、時間可能變動；孩子狀態好才加 <strong class='text-slate-800'>金鱗湖</strong>，狀態普通就只逛甜點、買 <strong class='text-slate-800'>B-speak 瑞士捲</strong>、<strong class='text-slate-800'>Miffy 森之廚房</strong>、<strong class='text-slate-800'>湯布院童話村</strong> 周邊。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=湯の坪街道' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 湯之坪街道導航</a><a href='https://www.google.com/maps/search/?api=1&query=湯布院 フクロウの森' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🦉</span> 貓頭鷹之森導航</a><a href='https://owls-cats-forest.com/free/owls-yufuin' target='_blank' rel='noopener noreferrer' class='bg-white text-indigo-700 border-2 border-indigo-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 貓頭鷹官方</a><a href='https://www.google.com/maps/search/?api=1&query=金鱗湖' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 金鱗湖導航</a><a href='https://www.google.com/maps/search/?api=1&query=湯布院フローラルヴィレッジ' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 童話村導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>由布院定位：</strong>這天不是深度由布院，貓頭鷹與湯之坪逛街優先；若 Safari 接近 13:00 後離園，金鱗湖改為短拍或備選，把貓頭鷹與湯之坪放前面。</li></ul>"
                                    },
                                    {
                                                "type": "food",
                                                "time": "17:30 - 20:00",
                                                "mapQuery": "別府 焼肉 韓国苑",
                                                "title": "回別府晚餐：燒肉/超市彈性收尾",
                                                "content": "回別府後兩種收尾：想犒賞大人可去 <strong class='text-slate-800'>燒肉 韓國苑 別府店</strong> 或 <strong class='text-slate-800'>燒肉 King 別府店</strong>；若孩子累爆，直接 <strong class='text-slate-800'>MEGA Trial</strong> 採買回房吃。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=焼肉 韓国苑 別府店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 韓國苑導航</a><a href='https://www.google.com/maps/search/?api=1&query=焼肉きんぐ 別府店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 燒肉 King 導航</a><a href='https://www.google.com/maps/search/?api=1&query=MEGAセンタートライアル 別府店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 超市導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>明天搬家：</strong>今晚先整理 60% 行李，Day5 退房移動會輕鬆很多。</li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "ゆふいんフローラルヴィレッジ",
                                                "title": "Safari / 由布院彈性方案：三段式安排",
                                                "content": "Day4 固定先完成自駕 Safari 至少 1 圈；之後依離園時間與想保留的由布院內容選方案。<br><strong>A 由布院標準案：</strong>12:30 左右離園，安排貓頭鷹之森＋湯之坪街道＋金鱗湖短拍，逛街時間約 90–120 分鐘。<br><strong>B Safari 完整案：</strong>自駕 Safari＋叢林巴士＋接觸區都做，約 13:00 前後離園，則由布院以貓頭鷹之森＋甜點/逛街 60–90 分鐘為主，金鱗湖改短拍或備選。<br><strong>C 別府收尾案：</strong>Safari 玩得很滿或山區雨勢明顯，改回別府，接別府塔/Youme Town/飯店泡湯，保留隔天退房體力。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=湯布院 フローラルヴィレッジ' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Floral Village 導航</a><a href='https://owls-cats-forest.com/free/owls-yufuin' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🦉</span> 貓頭鷹官方</a><a href='https://www.google.com/maps/search/?api=1&query=金鱗湖' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 金鱗湖導航</a><a href='https://bepputower.co.jp/en/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🔗</span> 別府塔官方</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>重點：</strong>Safari 不是只為了巴士；本日設定是自駕 Safari 必做，巴士是加分體驗。</li></ul>"
                                    }
                        ],
                        "tips": "Day4 已是早起日，重點是自駕 Safari、叢林巴士機會與由布院短走。Safari 離園時間用 12:30–13:00 作為彈性時間窗：想保留金鱗湖就早收束，想多玩動物園就接受由布院短版。"
            },
            {
                        "day": 5,
                        "date": "6/2 (二)",
                        "title": "⛰️ Day 5｜別府退房・阿蘇橫斷・熊本進城",
                        "weather": "🌤️ 預報 23-27°C",
                        "mapLink": "https://www.google.com/maps/dir/Hotel+New+Tsuruta+Beppu/大観峰/道の駅阿蘇/阿蘇神社/草千里ヶ浜/CANDEO+HOTELS+熊本新市街",
                        "route": "別府退房 🚗 → 大觀峰 → 阿蘇車站/午餐 → 阿蘇神社彈性加入 → 草千里 → 熊本",
                        "hotel": "Candeo Hotels 熊本新市街 (連住第 1/3 晚)",
                        "checklist": [
                                    "山區自駕防呆：離開別府前油量至少半桶以上；阿蘇山區以安全、廁所與補給為優先，不把火口當固定必達點。",
                                    "退房前：檢查房間充電器、兒童物品、藥品、停車券；兩台車油量與導航先設到大觀峰。",
                                    "火口只查不賭：目前官方顯示因遊覽直升機事故搜救而規制火口見學；當天只查官方連結，確認開放才加入。",
                                    "阿蘇站午餐補給：先廁所、買水與車上點心，再拍騙人布；避免讓孩子餓著上草千里。",
                                    "阿蘇神社是彈性點：兩車精神好、孩子未午睡才去；任一車不想去就直接草千里/下山。",
                                    "15:30 前開始往熊本下山；到熊本先入住與停車，不先開去逛街。"
],
                        "highlights": [
                                    "🏔️ 大觀峰",
                                    "🚉 阿蘇車站/騙人布",
                                    "⛩️ 阿蘇神社彈性加入",
                                    "🐎 草千里",
                                    "🌋 火口備案"
                        ],
                        "sections": [
                                    {
                                                "type": "drive",
                                                "time": "09:30 - 11:20",
                                                "mapQuery": "大観峰",
                                                "title": "別府退房後前往大觀峰",
                                                "content": "退房後沿山路前往 <strong class='text-slate-800'>大觀峰展望所</strong>，停 <strong class='text-slate-800'>大觀峰停車場</strong>。這是火口不開時最穩的阿蘇代表景觀，停留 30～40 分鐘即可。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=大観峰' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 大觀峰導航</a><a href='https://kumamoto.guide/spots/detail/211' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🏔️</span> 熊本官方介紹</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>山路提醒：</strong>孩子易暈車者，大觀峰前後少吃太甜與奶製品。</li></ul>"
                                    },
                                    {
                                                "type": "food",
                                                "time": "11:50 - 13:00",
                                                "mapQuery": "道の駅阿蘇",
                                                "title": "阿蘇車站/道之驛午餐＋騙人布像",
                                                "content": "中午落在 <strong class='text-slate-800'>道之驛阿蘇</strong>、<strong class='text-slate-800'>阿蘇車站</strong> 周邊最穩。👉 <strong class='text-slate-800'>騙人布像</strong> 在阿蘇站前，停車/廁所/午餐/伴手禮一次處理。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=道の駅阿蘇' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 道之驛阿蘇導航</a><a href='https://www.google.com/maps/search/?api=1&query=ウソップ像 阿蘇駅' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 騙人布像導航</a><a href='https://www.aso-denku.jp/' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🚉</span> 道之驛阿蘇官方</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>午餐策略：</strong>這段不要追排隊名店；赤牛便當、阿蘇牛奶、簡餐最適合親子團。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "13:10 - 14:00",
                                                "mapQuery": "阿蘇神社",
                                                "title": "阿蘇神社＋門前町：時間與體力允許時加入",
                                                "content": "若兩家都想加點，從阿蘇站前往 <strong class='text-slate-800'>阿蘇神社</strong> 與 <strong class='text-slate-800'>門前町商店街</strong>。停車可查 <strong class='text-slate-800'>阿蘇神社停車場</strong>。若孩子午餐後想睡，改為備選這站，改直上草千里。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=阿蘇神社' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 阿蘇神社導航</a><a href='https://www.google.com/maps/search/?api=1&query=阿蘇神社 門前町商店街' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 門前町導航</a><a href='https://www.city.aso.kumamoto.jp/tourism/spot/aso_shrine_parking/' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🅿️</span> 阿蘇神社官方停車資訊</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>這站定位：</strong>不是必排，是阿蘇站後的彈性文化散步。最多 45～50 分鐘。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "14:20 - 15:30",
                                                "mapQuery": "草千里ヶ浜",
                                                "title": "草千里：火口關閉時的阿蘇主景點",
                                                "content": "前往 <strong class='text-slate-800'>草千里之濱</strong> 與 <strong class='text-slate-800'>阿蘇火山博物館</strong> 周邊。孩子可在草原短跑，天氣好可看馬；若天候差，直接進火山博物館或只在停車場拍照。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=草千里ヶ浜' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 草千里導航</a><a href='https://www.google.com/maps/search/?api=1&query=阿蘇火山博物館' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 火山博物館導航</a><a href='https://www.aso-volcano.jp/' target='_blank' rel='noopener noreferrer' class='bg-white text-red-700 border-2 border-red-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🌋</span> 阿蘇火口即時規制</a><a href='https://www.city.aso.kumamoto.jp/tourism/spot/park_road_fee/' target='_blank' rel='noopener noreferrer' class='bg-white text-red-700 border-2 border-red-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🚧</span> 阿蘇市火口/道路資訊</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>火山口設定：</strong>目前官方顯示因遊覽直升機事故搜救而規制火口見學；本行程不預設安排火口。當天若官方顯示火口開放、天氣佳、火山氣體與車流可接受，再臨時加入。</li></ul>"
                                    },
                                    {
                                                "type": "drive",
                                                "time": "15:30 - 18:00",
                                                "mapQuery": "CANDEO HOTELS 熊本新市街",
                                                "title": "下山進熊本：Check-in＋新市街晚餐",
                                                "content": "從草千里下山往 <strong class='text-slate-800'>Candeo Hotels 熊本新市街</strong>。抵達後先停車、Check-in，再以飯店周邊步行晚餐為主：<strong class='text-slate-800'>下通商店街</strong>、<strong class='text-slate-800'>新市街</strong>、<strong class='text-slate-800'>勝烈亭</strong>、<strong class='text-slate-800'>黑亭下通店</strong> 都是步行候選。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=CANDEO HOTELS 熊本新市街' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 飯店位置參考</a><a href='https://www.google.com/maps/search/?api=1&query=熊本 下通商店街' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 下通導航</a><a href='https://www.google.com/maps/search/?api=1&query=勝烈亭 新市街本店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 勝烈亭導航</a><a href='https://www.google.com/maps/search/?api=1&query=黒亭 下通店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 黑亭下通店導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>今晚不要再開車：</strong>停好車後以步行吃喝為主，讓駕駛休息。</li><li><strong>Candeo 停車：</strong>飯店無專用停車場，導航目的地請設提攜停車場，例如 TERRACE87；飯店鄰近商店街與單行道，建議避免在飯店前臨停上下客。<a href='https://www.candeohotels.com/ja/kumamoto-shinshigai/access/' target='_blank' rel='noopener noreferrer'>官方停車說明</a></li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "道の駅 阿蘇",
                                                "title": "阿蘇山區彈性方案：火口不開也不空轉",
                                                "content": "阿蘇火口目前不放主線；當天只查官方規制資訊，確認開放才加。若火口或草千里受天候影響，依車程縮短安排。<br><strong>A 山區仍可走：</strong>大觀峰＋道之駅阿蘇＋阿蘇神社/門前町，保留阿蘇感。<br><strong>B 山上天候差：</strong>道之駅阿蘇補給後直進熊本，抵達 Candeo 前先停車場定位。<br><strong>C 早進熊本：</strong>SAKURA MACHI / 下通 / 鶴屋百貨晚餐採買，讓孩子提前休息。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=道の駅 阿蘇' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 道之駅阿蘇</a><a href='https://www.aso-volcano.jp/' target='_blank' rel='noopener noreferrer' class='bg-white text-red-700 border-2 border-red-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🌋</span> 火口規制官方</a><a href='https://sakuramachi-kumamoto.jp/time' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🛍️</span> SAKURA MACHI 營業時間</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>避免空轉：</strong>火口若關閉，就不要在山上等開放；把時間移到阿蘇站補給或熊本市區。</li></ul>"
                                    }
                        ],
                        "tips": "Day5 是長距離移動日。火口只當備案；大觀峰、阿蘇站、草千里與安全進熊本才是主線。"
            },
            {
                        "day": 6,
                        "date": "6/3 (三)",
                        "title": "🦖 Day 6｜熊本近郊修復日：恐龍・布魯克・熊本熊・光之森",
                        "weather": "🌤️ 預報 24-28°C",
                        "mapLink": "https://www.google.com/maps/dir/CANDEO+HOTELS+熊本新市街/御船町恐竜博物館/ブルック像/くまモンスクエア/ゆめタウン光の森/CANDEO+HOTELS+熊本新市街",
                        "route": "熊本市區 🚗 → 御船恐龍/布魯克 → 市區休息 → 熊本熊廣場 → 光之森 Workman",
                        "hotel": "Candeo Hotels 熊本新市街 (連住第 2/3 晚)",
                        "checklist": [
                                    "今天是修復日：早上只鎖御船恐龍＋布魯克，不把前幾天沒跑到的點塞回來。",
                                    "出門包輕量化：水、點心、薄外套、恐龍館門票/營業資訊截圖；不用帶整套長途裝備。",
                                    "熊本熊廣場時間修正：6/3 官方在室時間為 14:00–14:30；13:40 抵達卡位，14:30 才到會錯過。",
                                    "光之森採買清單先寫好：Workman、童裝、尿布濕巾/藥妝、超市宵夜，各家分工採買。",
                                    "晚上回飯店後先洗衣/整理 50% 行李，Day7 天草日不要早上才找東西。"
],
                        "highlights": [
                                    "🦖 御船恐龍博物館",
                                    "💀 布魯克像",
                                    "🐻 熊本熊部長",
                                    "🛍️ Workman 女子",
                                    "🍱 市區吃喝"
                        ],
                        "sections": [
                                    {
                                                "type": "play",
                                                "time": "09:00 - 11:20",
                                                "mapQuery": "御船町恐竜博物館",
                                                "title": "御船恐龍博物館＋布魯克像",
                                                "content": "09:00 從飯店出發，前往 <strong class='text-slate-800'>御船町恐龍博物館</strong>，車輛停 <strong class='text-slate-800'>博物館停車場</strong>。館內抓 60～75 分鐘；👉 <strong class='text-slate-800'>布魯克像</strong> 在旁邊ふれあい広場，出館後拍照最順。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=御船町恐竜博物館' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 恐龍館導航</a><a href='https://www.google.com/maps/search/?api=1&query=ブルック像 御船町' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 布魯克像導航</a><a href='https://mifunemuseum.jp/visit-top/general-info/' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🦖</span> 恐龍館官方開館資訊</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>布魯克定位：</strong>本日只需使用布魯克單點導航；先處理恐龍館與布魯克，下午留給熊本熊廣場。</li><li><strong>休息日控管：</strong>11:20 前離開御船，下午才有足夠緩衝看 14:00 熊本熊。</li></ul>"
                                    },
                                    {
                                                "type": "food",
                                                "time": "11:50 - 13:15",
                                                "mapQuery": "熊本 新市街 ランチ",
                                                "title": "回熊本市區午餐＋飯店回血",
                                                "content": "回 <strong class='text-slate-800'>熊本新市街</strong> 或 <strong class='text-slate-800'>下通商店街</strong> 午餐。候選：<strong class='text-slate-800'>勝烈亭新市街本店</strong>、<strong class='text-slate-800'>紅蘭亭下通本店</strong>、<strong class='text-slate-800'>黑亭下通店</strong>、<strong class='text-slate-800'>SAKURA MACHI 美食區</strong>。餐後若時間允許回房 20～30 分鐘，但 13:25 建議準備往熊本熊廣場。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=勝烈亭 新市街本店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 勝烈亭</a><a href='https://www.google.com/maps/search/?api=1&query=紅蘭亭 下通本店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 紅蘭亭</a><a href='https://www.google.com/maps/search/?api=1&query=サクラマチ クマモト フードコート' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 櫻町美食區</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>關鍵回血：</strong>這段不是空白，是為下午熊本熊與晚上購物保留體力。</li></ul>"
                                    },
                                    {
                                                "type": "play",
                                                "time": "13:40 - 14:40",
                                                "mapQuery": "くまモンスクエア",
                                                "title": "熊本熊廣場：部長活動依官方月曆",
                                                "content": "前往 <strong class='text-slate-800'>熊本熊廣場</strong>，位於 <strong class='text-slate-800'>鶴屋百貨東館</strong> 一帶。6/3 官方月曆顯示熊本熊在室時間為 <strong class='text-red-700'>14:00–14:30</strong>，建議 13:40 抵達卡位；14:30 才到等於錯過。若人太多，就改逛鶴屋/上通下通，不追下一場。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=くまモンスクエア' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 熊本熊廣場導航</a><a href='https://kumamon-land.jp/square/' target='_blank' rel='noopener noreferrer' class='bg-amber-50 text-amber-700 border-2 border-amber-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🐻</span> 熊本熊廣場官方/出勤表</a><a href='https://www.google.com/maps/search/?api=1&query=鶴屋百貨店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 鶴屋百貨導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>卡位：</strong>13:40 是建議抵達時間；若想看前排更早到。孩子坐不住時站後方看也很夠，不為前排犧牲情緒。</li></ul>"
                                    },
                                    {
                                                "type": "shop",
                                                "time": "17:30 - 21:00",
                                                "mapQuery": "ゆめタウン光の森",
                                                "title": "Youme Town 光之森＋Workman 女子",
                                                "content": "傍晚開車到 <strong class='text-slate-800'>Youme Town 光之森</strong>，停車方便、餐飲多。主目標是本館 2F 的 <strong class='text-slate-800'>＃ワークマン女子 光之森店</strong>，同場也可逛 <strong class='text-slate-800'>阿卡將本舖</strong>、超市與伴手禮。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=ゆめタウン光の森' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 光之森導航</a><a href='https://www.google.com/maps/search/?api=1&query=ワークマン女子 ゆめタウン光の森店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Workman 女子導航</a><a href='https://www.workman.co.jp/store/%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%9E%E3%83%B3%E5%A5%B3%E5%AD%90-%E3%82%86%E3%82%81%E3%82%BF%E3%82%A6%E3%83%B3%E5%85%89%E3%81%AE%E6%A3%AE%E5%BA%97' target='_blank' rel='noopener noreferrer' class='bg-white text-purple-700 border-2 border-purple-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>👕</span> Workman 店鋪官方</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>晚上購物規則：</strong>先吃晚餐再逛；兩家分頭採買，約定 20:45 集合回飯店。</li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "SAKURA MACHI Kumamoto",
                                                "title": "御船 / 熊本熊彈性方案：市區回收",
                                                "content": "Day6 的固定時間點是 14:00–14:30 熊本熊在室；前段御船不要拖垮這個時間。<br><strong>A 御船縮短：</strong>恐龍博物館只看主展＋商店，布魯克快閃，13:40 到熊本熊廣場。<br><strong>B 錯過熊本熊：</strong>不追下一場，改熊本城外觀＋城彩苑或 SAKURA MACHI 室內吃逛。<br><strong>C 晚上補買：</strong>光之森/Workman 女子提前，或直接回飯店泡湯休息。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=桜の馬場 城彩苑' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 城彩苑導航</a><a href='https://sakuramachi-kumamoto.jp/time' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🛍️</span> SAKURA MACHI 官方</a><a href='https://www.google.com/maps/search/?api=1&query=ゆめタウン光の森' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 光之森導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>判斷：</strong>熊本熊是有固定在室時間的行程，不建議用臨場追趕補上。</li></ul>"
                                    }
                        ],
                        "tips": "Day6 是 Day5 長途後的恢復日：上午只做御船，下午熊本熊，晚上購物。不要再加遠點。"
            },
            {
                        "day": 7,
                        "date": "6/4 (四)",
                        "title": "🌊 Day 7｜上天草一日遠征：長部田・甚平・Sea Donut",
                        "weather": "🌤️ 預報 24-28°C",
                        "mapLink": "https://www.google.com/maps/dir/CANDEO+HOTELS+熊本新市街/長部田海床路/ジンベエ像/海中水族館シードーナツ/mio+camino+AMAKUSA/CANDEO+HOTELS+熊本新市街",
                        "route": "熊本市區 🚗 → 長部田/甚平 → 天草五橋 → Sea Donut → 回程潮汐判斷 → 熊本",
                        "hotel": "Candeo Hotels 熊本新市街 (連住第 3/3 晚)",
                        "checklist": [
                                    "天草午餐防呆：福伸或 L’isola 擇一先確認訂位/營業；若未訂，11:30 前決定餐廳，等待超過 20 分鐘就切換備案。",
                                    "回程防呆：天草回熊本前確認油量、ETC、孩子是否上廁所；不要在傍晚疲勞時才臨時找加油站與晚餐。",
                                    "天草日防暈車：早餐不要太油，車上準備塑膠袋、濕紙巾、換洗上衣、薄外套與小零食。",
                                    "出門前查兩件事：長部田潮汐時間、Sea Donut 營業/活動資訊；6/4 氣象廳熊本潮汐為滿潮 10:39/23:37、干潮 5:00/16:57，截圖給兩車共用。",
                                    "午餐不排名店執念：11:30 前決定餐廳；若客滿直接轉 L’isola / Mio Camino 周邊，不等待超過 20 分鐘。",
                                    "長部田改成兩段：上午 10:39 滿潮前後拍海中電線桿與甚平，下午條件允許則 16:57 干潮前後當主秀走海床路。",
                                    "14:50～15:10 之間依 Sea Donut 停留狀態、天氣與孩子精神決定回程二刷長部田；若不二刷，就改熊本市區晚餐與採買。"
],
                        "highlights": [
                                    "🌊 長部田海床路",
                                    "🧜 甚平像",
                                    "🌉 天草五橋",
                                    "🐬 Sea Donut",
                                    "🛍️ L’isola/Mio Camino"
                        ],
                        "sections": [
                                    {
                                                "type": "sight",
                                                "time": "08:30 - 10:20",
                                                "mapQuery": "長部田海床路",
                                                "title": "長部田海床路＋甚平像：上午滿潮景，下午再拚主秀",
                                                "content": "08:30 從熊本市區出發先到 <strong class='text-slate-800'>長部田海床路</strong>，停 <strong class='text-slate-800'>海床路停車場</strong>。6/4 氣象廳熊本潮汐：滿潮 10:39、23:37；干潮 5:00、16:57。上午這段接近 10:39 滿潮，重點是拍海中電線桿與旁邊 <strong class='text-slate-800'>甚平像</strong>，不是走海床路；真正海床路主秀放在回程 16:57 干潮前後。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=長部田海床路' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 海床路導航</a><a href='https://www.google.com/maps/search/?api=1&query=ジンベエ像 宇土市' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 甚平像導航</a><a href='https://kumamoto.guide/tw/spots/detail/12475' target='_blank' rel='noopener noreferrer' class='bg-white text-teal-700 border-2 border-teal-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🌊</span> 熊本官方海床路介紹</a><a href='https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?GRAPH=on&LV=DL&S_HILO=on&de=18&ds=04&me=06&ms=06&stn=KU&ye=2026&ys=2026' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🌗</span> 氣象廳潮汐查詢</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>潮汐策略：</strong>上午是滿潮景，下午才是海床路主秀。長部田官方觀光資料建議在滿潮/干潮前後約 2 小時觀賞，但不要為了等潮把 Sea Donut 與午餐節奏壓得太緊；下午二刷是加分，不是取代水族館。</li></ul>"
                                    },
                                    {
                                                "type": "drive",
                                                "time": "10:20 - 11:25",
                                                "mapQuery": "天草五橋",
                                                "title": "天草五橋兜風：把路線本身當景點",
                                                "content": "沿 <strong class='text-slate-800'>天草五橋/珍珠線</strong> 往上天草。可視天氣短停 <strong class='text-slate-800'>天草四郎博物館外觀/周邊</strong> 或 <strong class='text-slate-800'>藍之天草村</strong> 上廁所買點心，但不要每個橋都停。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=天草五橋' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 天草五橋導航</a><a href='https://www.google.com/maps/search/?api=1&query=藍のあまくさ村' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 藍之天草村導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>親子版天草：</strong>今天只到上天草，不往崎津、大江或牛深深追。</li></ul>"
                                    },
                                    {
                                                "type": "food",
                                                "time": "11:30 - 12:35",
                                                "mapQuery": "L’isola Terrace Amakusa",
                                                "title": "上天草午餐候選：三組平行展開",
                                                "content": "午餐採停車方便優先，三組候選：<br>① 海景穩定：<strong class='text-slate-800'>L’isola Terrace</strong>／<strong class='text-slate-800'>Plate Cafe L’isola</strong>。<br>② 園區簡化：<strong class='text-slate-800'>天草 Pearl Garden 餐飲區</strong>。<br>③ 在地味：<strong class='text-slate-800'>天草ちゃんぽん 千蘭</strong> 或 <strong class='text-slate-800'>海鮮家福伸</strong>。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=L’isola Terrace Amakusa' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> L’isola 導航</a><a href='https://www.google.com/maps/search/?api=1&query=天草パールガーデン レストラン' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Pearl Garden 餐飲</a><a href='https://www.google.com/maps/search/?api=1&query=天草ちゃんぽん 千蘭' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> ちゃんぽん</a><a href='https://www.google.com/maps/search/?api=1&query=海鮮家 福伸' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 海鮮家福伸</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>選餐原則：</strong>不要排隊名店。小孩餓了就選最近、最快、有停車與廁所的餐廳。</li></ul>"
                                    },
                                    {
                                                "type": "play",
                                                "time": "12:45 - 14:20",
                                                "mapQuery": "海中水族館シードーナツ",
                                                "title": "Wakuwaku 海中水族館 Sea Donut",
                                                "content": "下午主菜是 <strong class='text-slate-800'>Wakuwaku 海中水族館 Sea Donut</strong>，停 <strong class='text-slate-800'>Sea Donut 停車場</strong>。官方夏季營業為 9:00–18:00、最終入場 17:00；水族館規模不大但親子友善，抓 1.5 小時左右剛好；若孩子很投入可略延，14:20～14:40 開始收束，仍保留回長部田看 16:57 干潮的可能。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=海中水族館シードーナツ' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Sea Donut 導航</a><a href='https://amakusapearl.com/sea/' target='_blank' rel='noopener noreferrer' class='bg-white text-teal-700 border-2 border-teal-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🐬</span> Sea Donut 官方</a><a href='https://amakusapearl.com/news-list/' target='_blank' rel='noopener noreferrer' class='bg-white text-teal-700 border-2 border-teal-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🕒</span> 營業/活動公告</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>停留節奏：</strong>Sea Donut 盡量保留完整體驗；14:20～14:40 視現場狀況收束，回程再判斷是否二刷長部田。</li></ul>"
                                    },
                                    {
                                                "type": "shop",
                                                "time": "14:20 - 14:50",
                                                "mapQuery": "mio camino AMAKUSA",
                                                "title": "Mio Camino / L’isola：咖啡、伴手禮、回程決策",
                                                "content": "水族館後在 <strong class='text-slate-800'>Mio Camino AMAKUSA</strong>、<strong class='text-slate-800'>L’isola Terrace</strong> 買天草鹽、珍珠/海洋雜貨、咖啡甜點，讓孩子上廁所換衣。14:45 前後檢查：孩子狀態 OK、天氣可、潮汐仍值得 → 回程再停長部田；若不二刷，改把時間留給熊本市區晚餐與採買。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=mio camino AMAKUSA' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> Mio Camino 導航</a><a href='https://www.google.com/maps/search/?api=1&query=L’isola Terrace Amakusa' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> L’isola 導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>雙家庭決策：</strong>若任一車孩子已累，採市區收尾案回熊本，不二刷海床路。</li></ul>"
                                    },
                                    {
                                                "type": "drive",
                                                "time": "15:30 - 19:30",
                                                "mapQuery": "長部田海床路",
                                                "title": "回熊本：16:57 干潮主秀 or 市區吃喝採買",
                                                "content": "<strong>A 潮汐主秀案：</strong>14:50～15:10 從上天草回程，15:40～17:20 回到 <strong class='text-slate-800'>長部田海床路</strong>，配合 16:57 干潮前後拍海床路與夕方景；孩子狀態 OK 才執行。<br><strong>B 穩定案：</strong>若暈車、下雨或太累，改回 <strong class='text-slate-800'>下通商店街</strong>／<strong class='text-slate-800'>新市街</strong>，晚餐與藥妝採買。晚餐候選：<strong class='text-slate-800'>燒肉孫三郎</strong>、<strong class='text-slate-800'>彩爐燒肉</strong>、<strong class='text-slate-800'>唐吉訶德熊本中央店</strong> 採買。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=熊本 下通商店街' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 下通導航</a><a href='https://www.google.com/maps/search/?api=1&query=長部田海床路' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 長部田回程主秀導航</a><a href='https://www.google.com/maps/search/?api=1&query=焼肉 孫三郎 新市街店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 孫三郎導航</a><a href='https://www.google.com/maps/search/?api=1&query=ドン・キホーテ 熊本中央店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 唐吉訶德導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>最後完整夜晚：</strong>今晚先打包 70%，隔天返台不會慌。</li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "イオンモール熊本",
                                                "title": "天草 / 潮汐彈性方案：回程與市區收尾",
                                                "content": "Day7 已改成上午滿潮景、下午 16:57 干潮主秀；Sea Donut 仍盡量安排進主線，依當日條件用以下方案調整。<br><strong>A 標準完整案：</strong>上午甚平像＋滿潮景，午餐後 Sea Donut 約 75–100 分鐘，下午 15:40–17:20 二刷長部田看干潮海床路。<br><strong>B Sea Donut 優先案：</strong>若水族館孩子很投入，Sea Donut 延到 14:40 左右收束，回程長部田改短停或只拍夕方景。<br><strong>C 回程穩定案：</strong>若大雨、孩子不想再拉車或天草五橋路況慢，保留 Sea Donut 後改回熊本，改 AEON MALL 熊本或 SAKURA MACHI 吃飯採買。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=長部田海床路' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 長部田導航</a><a href='https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?GRAPH=on&LV=DL&S_HILO=on&de=18&ds=04&me=06&ms=06&stn=KU&ye=2026&ys=2026' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🌊</span> 6/4 熊本潮汐</a><a href='https://kumamoto.aeonmall.jp/guide/hours' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🛍️</span> AEON MALL 熊本</a><a href='https://sakuramachi-kumamoto.jp/time' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🛍️</span> SAKURA MACHI</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>彈性邏輯：</strong>Day7 不是只能全有或全無；Sea Donut 盡量保留，長部田下午干潮則依回程時間與天氣作加分選項。</li></ul>"
                                    }
                        ],
                        "tips": "Day7 不深入天草南部。上午長部田是 10:39 滿潮景，Sea Donut 盡量保留；下午條件允許才把 16:57 干潮海床路當主秀，否則改熊本市區穩定收尾。"
            },
            {
                        "day": 8,
                        "date": "6/5 (五)",
                        "title": "✈️ Day 8｜返台前穩定收尾日：魯夫・喬巴・機場收尾",
                        "weather": "🌤️ 預報 24-28°C",
                        "mapLink": "https://www.google.com/maps/dir/CANDEO+HOTELS+熊本新市街/熊本県庁/熊本市動植物園/阿蘇くまもと空港",
                        "route": "熊本退房 🚗 → 魯夫 → 喬巴/動植物園 or 室內案 → 加油還車 → 機場",
                        "hotel": "溫暖的家",
                        "checklist": [
                                    "前一晚完成 70% 打包；早上只收盥洗、睡衣、充電器、藥品與冰箱物品。",
                                    "退房前拍照檢查：床底、插座、浴室、冰箱、保險箱、兒童玩具角落。",
                                    "回程航班：Tigerlight IT767，2026/6/5 19:50 熊本 KMJ 起飛，21:40 抵達高雄 KHH；以 17:00 前還車、17:30 前到機場作為保守目標。",
                                    "班機回推還車時間：15:30 後進入返程優先模式，設定『回機場準備』鬧鐘；鬧鐘響就優先加油、還車與機場。",
                                    "滿油還車：加油站導航先存好，加完油拍收據與油表。",
                                    "機場策略：先在公共區吃飽、買伴手禮、上廁所，再報到/安檢；不要進安檢後才找熱食。"
],
                        "highlights": [
                                    "👒 魯夫像",
                                    "🦌 喬巴像",
                                    "🦁 動植物園短玩",
                                    "🛍️ 室內雨天案",
                                    "✈️ Sora-Yoka 機場"
                        ],
                        "sections": [
                                    {
                                                "type": "action",
                                                "time": "09:30 - 10:30",
                                                "mapQuery": "CANDEO HOTELS 熊本新市街",
                                                "title": "退房與裝車：不製造最後一天風險",
                                                "content": "從 <strong class='text-slate-800'>Candeo 熊本新市街</strong> 退房裝車。若需要最後補買，以 <strong class='text-slate-800'>下通</strong>、<strong class='text-slate-800'>SAKURA MACHI</strong>、<strong class='text-slate-800'>唐吉訶德熊本中央店</strong> 等近距離快閃為主，節奏以順路、短停、好撤退為原則。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=CANDEO HOTELS 熊本新市街' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 飯店位置參考</a><a href='https://www.google.com/maps/search/?api=1&query=サクラマチ クマモト' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> SAKURA MACHI 導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>今天原則：</strong>任何行程都保留 15 分鐘內切換到機場路線的餘裕。</li><li><strong>退房停車：</strong>Candeo 無專用停車場，退房與裝車仍以提攜停車場出庫規則為準；若使用 TERRACE87，先確認車輛出庫與行李搬運動線。</li></ul>"
                                    },
                                    {
                                                "type": "sight",
                                                "time": "10:45 - 11:15",
                                                "mapQuery": "熊本県庁 ルフィ像",
                                                "title": "魯夫像：縣廳銀杏大道快閃",
                                                "content": "前往 <strong class='text-slate-800'>熊本縣廳</strong>，停 <strong class='text-slate-800'>縣廳來庁者停車場</strong>。👉 <strong class='text-slate-800'>魯夫像</strong> 位於縣廳正門銀杏大道，抓 20～30 分鐘拍照即可。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=ルフィ像 熊本県庁' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 魯夫像導航</a><a href='https://www.google.com/maps/search/?api=1&query=熊本県庁 来庁者駐車場' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 縣廳停車場</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>拍照效率：</strong>兩家輪流拍，不在這裡消耗太久。</li></ul>"
                                    },
                                    {
                                                "type": "play",
                                                "time": "11:30 - 13:00",
                                                "mapQuery": "熊本市動植物園",
                                                "title": "A 案：熊本市動植物園＋喬巴像",
                                                "content": "天氣好、班機時間充裕就去 <strong class='text-slate-800'>熊本市動植物園</strong>，車輛停 <strong class='text-slate-800'>動植物園停車場</strong>。👉 <strong class='text-slate-800'>喬巴像</strong> 在正門附近，可只拍照不入園；若入園，抓 60～90 分鐘看動物與小型遊樂設施。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=熊本市動植物園' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 動植物園導航</a><a href='https://www.google.com/maps/search/?api=1&query=チョッパー像 熊本市動植物園' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 喬巴像導航</a><a href='https://www.ezooko.jp/one_html3/pub/default.aspx?c_id=6' target='_blank' rel='noopener noreferrer' class='bg-white text-green-700 border-2 border-green-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>🦁</span> 動植物園官方營業資訊</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>可縮可放：</strong>只拍喬巴也完全可以，不需要為了門票逛完整園區。</li></ul>"
                                    },
                                    {
                                                "type": "shop",
                                                "time": "11:30 - 13:00",
                                                "mapQuery": "SAKURA MACHI Kumamoto",
                                                "title": "B 案：雨天/疲勞室內收尾",
                                                "content": "若下雨、太熱或孩子累，改走室內收尾，在 <strong class='text-slate-800'>SAKURA MACHI</strong>、<strong class='text-slate-800'>下通商店街</strong> 或 <strong class='text-slate-800'>鶴屋百貨</strong> 午餐採買，提早往機場。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=SAKURA MACHI Kumamoto' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> SAKURA MACHI 導航</a><a href='https://www.google.com/maps/search/?api=1&query=熊本 下通商店街' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 下通導航</a><a href='https://www.google.com/maps/search/?api=1&query=鶴屋百貨店' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 鶴屋導航</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>最穩選擇：</strong>室內午餐＋提早機場，是返台日最不會出錯的方案。</li></ul>"
                                    },
                                    {
                                                "type": "action",
                                                "time": "15:30 - 17:40",
                                                "mapQuery": "阿蘇くまもと空港",
                                                "title": "加油還車＋阿蘇熊本機場 Sora-Yoka",
                                                "content": "回程 IT767 為 19:50 起飛。15:30 後進入返程優先模式，先找 <strong class='text-slate-800'>機場周邊加油站</strong> 滿油，目標 17:00 前還車、17:30 前抵達 <strong class='text-slate-800'>阿蘇熊本機場</strong>。進機場後，先在 <strong class='text-slate-800'>Sora-Yoka 區域</strong> 吃熱食、買伴手禮，再進國際線安檢。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=阿蘇くまもと空港' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 機場導航</a><a href='https://www.kumamoto-airport.co.jp/zh-TW/%E5%80%99%E6%A9%9F%E5%A4%A7%E6%A8%93/' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>✈️</span> 機場官方設施資訊</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>機場提醒：</strong>國際線安檢後餐飲通常比公共區少，先吃飽再報到/安檢。</li></ul>"
                                    },
                                    {
                                                "type": "rain",
                                                "time": "彈性方案",
                                                "mapQuery": "阿蘇くまもと空港",
                                                "title": "返台日彈性方案：機場優先",
                                                "content": "返台日若略過任何景點，都不需要再補新點；只把時間移到午餐、加油、還車與機場。<br><strong>A 魯夫＋機場案：</strong>只拍魯夫，動植物園與喬巴改為下次，提早加油還車。<br><strong>B 室內午餐案：</strong>SAKURA MACHI 或下通午餐後直接往機場。<br><strong>C 機場早到案：</strong>Sora-Yoka 公共區吃熱食與採買，避免安檢後選擇不足。<div class='flex flex-wrap gap-2 mt-3'><a href='https://www.google.com/maps/search/?api=1&query=阿蘇くまもと空港' target='_blank' rel='noopener noreferrer' class='bg-white text-blue-700 border-2 border-blue-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>📍</span> 機場導航</a><a href='https://www.kumamoto-airport.co.jp/zh-TW/%E5%80%99%E6%A9%9F%E5%A4%A7%E6%A8%93/' target='_blank' rel='noopener noreferrer' class='bg-white text-cyan-700 border-2 border-cyan-200 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:scale-105 transition flex items-center gap-2'><span>✈️</span> 機場官方設施</a></div>",
                                                "deepTip": "<ul class='list-disc pl-4 space-y-1'><li><strong>返台日不補點：</strong>任何景點縮短或略過，都能增加機場緩衝。</li></ul>"
                                    }
                        ],
                        "tips": "Day8 是返台保守日：魯夫、喬巴、動植物園都可縮短；準時還車與平安登機最重要。"
            }
];

        const backupDB = {
            oita: {
                sight: ["⭐ 九州自然動物園 African Safari|自駕必排第一名！可開自家車進野生區，或排隊買叢林巴士親手餵獅子。", "⭐ 大分海之卵水族館 Umitamago|九州頂級親子水族館。戶外Asobeach白沙灘可與海豚零距離，海象互動秀極為精彩。", "⭐ 別府 Global Tower (B-Con Plaza)|推車直達100公尺高空！360度全玻璃觀景台，輕鬆俯瞰別府溫泉鄉四處冒白煙的奇景。", "⭐ 海地獄|別府腹地最大、造景最美。鈷藍色高溫池水壯觀，步道平坦好推車。", "⭐ 灶地獄|互動性最強。導覽員用香菸吹煙霧，還有蒸氣足湯，像看魔術表演。", "⭐ 別府空中纜車|西日本最大型，10分鐘抵達鶴見岳山頂，俯瞰別府灣遼闊景色。", "⭐ 湯布院童話村 Floral Village|英國科茨沃爾德風。有貓頭鷹、山羊和兔子，宛如愛麗絲夢遊仙境。", "⭐ 金鱗湖|由布院指標，半清水半溫泉。環湖步道完善，四歲小孩散步無負擔。", "⭐ 狹霧台展望所|自駕必經觀景台，免爬山就能將由布院盆地絕景盡收眼底。", "⭐ 和諧粉彩樂園 (Harmonyland)|三麗鷗迷的聖地。戶外設施適合幼童，花車大遊行水準極高，建議平日前往避開人潮。", "大分縣立美術館 (OPAM)|大分市必訪！遇大雨的完美救贖，一樓大廳有免費的藝術互動遊具，建築絕美。", "高崎山自然動物園|水族館對面，看滿山野生日本獼猴。設有單軌小電車免去推車爬坡。", "城島高原樂園|木製雲霄飛車聞名，但有專為幼童設計的兒童駕訓班與室內玩具區。", "大分農業文化公園|超大戶外公園。有大型攀爬溜滑梯與湖畔腳踏車，五月初夏放電極佳。", "別府公園|市區綠色寶地，大草地與松樹林，自駕中途讓孩子跑跳喘口氣極佳。", "別府海濱砂湯|浴衣埋入溫熱黑砂中。小孩可在旁邊玩砂看父母被活埋，非常有趣。", "志高湖|海拔600公尺湖泊，有天鵝與鯉魚。湖畔平坦，適合輕鬆野餐。", "別府市竹細工傳統產業會館|精緻竹編工藝，有簡單竹編手作體驗，培養孩子手眼協調與耐心。", "別府樂天地|昭和懷舊山頂遊樂園。搭可愛貓狗纜車上山，名物小鴨競速超逗趣。", "由布院彩色玻璃美術館|古典彩色玻璃與歐式教堂。光影變化迷人，需留意小孩勿觸展品。", "九重自然觀動物園|阿蘇與由布院之間。主打零距離接觸，牽大型犬散步、餵食迷你馬。", "久住花公園|西日本最大花園之一。五月粉蝶花盛開，背倚九重連山拍照極佳。"],
                food: ["⭐ 豐後牛牛排館 Somuri (そむり)|【排餐/單點】別府頂級豐後牛排老店。午間套餐約¥3,000起，晚餐約¥8,000起。肉汁鮮甜軟嫩，提供兒童餐具，小孩可共食，絕對是犒賞大人的極致美味。", "⭐ 燒肉 韓國苑 (別府店)|【單點/吃到飽】主打大分頂級「豐後牛」。吃到飽大人約¥4,000-6,000，小學生半價，學齡前幼童免費！最大亮點是附設超大型室內兒童遊戲區。", "⭐ 由布まぶし 心|【特色蓋飯套餐】必點「豐後牛」土鍋飯！單份套餐約¥3,000，份量大建議大人點餐小孩共食。一鍋三吃法非常有趣，豐後牛炭烤香氣逼人。", "⭐ 大砲拉麵 (別府海岸線店)|【單點】久留米濃厚豚骨拉麵大分人氣分店！大人均消約¥800-1,000。設有榻榻米座位與兒童拉麵套餐(約¥500)，自駕好停車，重口味老饕必吃。", "⭐ 麵堂 香 (別府店)|【單點】大分在地極具人氣的豚骨拉麵。大人均消約¥800-1,000。湯頭濃郁滑順，提供兒童椅與半份拉麵(約¥400)，深受當地家庭喜愛。", "⭐ 別府 胡月 冷麵|【單點】別府冷麵創始名店。大人均消約¥900-1,100。麵條極具嚼勁，湯頭清爽解膩，若小孩怕冷麵嚼勁也有溫熱湯麵選項，大熱天極度推薦。", "地獄蒸工房 鐵輪|必玩體驗！用高溫溫泉蒸氣自己蒸熟海鮮蔬菜，像新奇的料理實驗。", "東洋軒 Toyoken|「雞肉天婦羅」發源地！外皮酥脆肉質軟嫩，對親子客非常友善。", "甘味茶屋 Amamichaya|日式庭園享用「團子汁」。備有寬敞榻榻米座位，對親子客極度友善。", "Joyfull 大分本店|大分發跡的國民餐廳。大停車場、無敵兒童餐，自駕不敗神隊友。", "迴轉壽司 藏壽司/壽司郎|空間大好停車。扭蛋互動與炸薯條能完美安撫挑食的孩子。", "岡本屋賣店|微苦焦糖「地獄蒸布丁」。雞蛋三明治與溫泉烏龍麵適合輕食午餐。", "龜正迴轉壽司 (別府)|別府超神人氣名店！海鮮切片厚到不講武德，CP值極高，但需提早去抽號碼牌排隊。", "とよ常 Toyotsune (別府)|別府站前超人氣天丼！特上天丼的兩隻巨無霸炸蝦視覺震撼，獨門醬汁淋在飯上超開胃。", "海鮮居酒屋 水天|現代裝潢環境乾淨，讓父母好好享用大分在地新鮮漁獲的壽司海鮮。", "六盛 冷麵|湯頭清爽不膩的冷麵名店，適合五月漸暖天氣，店面相對整潔寬敞。", "Snoopy Cha-ya 史努比茶屋|滿滿史努比！可愛造型蛋包飯與抹茶甜點，絕對收服小朋友的心。", "Miffy 森之廚房|米飛兔主題烘焙坊。買兔兔造型麵包帶車上，自駕防餓最佳點心。", "Milch 起司塔|金賞半熟起司蛋糕。有分冷熱，小小一個適合拿手上吃，口感濃郁。", "B-Speak 瑞士捲|由布院排隊甜點。蛋糕體極度膨鬆柔軟，非常適合給小小孩當下午茶。", "金賞可樂餅|湯之坪必吃小吃。牛肉馬鈴薯香氣四溢，現炸熱騰騰，最佳解饞零食。", "Cafe La Ruche|金鱗湖畔景觀咖啡廳。戶外露台座位吃可頌看湖面發呆，氣氛極佳。", "Yufuin Burger House|在地食材手工漢堡。肉排多汁，適合吃膩日式料理時換換口味。", "鞠智 cucuchi|販售高級和菓子與現烤銅鑼燒。店鋪有質感，提供舒適座位區休息。", "九重野草鄉村餐廳|使用大量新鮮野菜的自助餐或定食，健康美味，自駕途經九重必吃。"],
        shop: ["⭐ Tokiwa Wasada Town (含 Workman Colors)|🔥 2026年4月全新開幕最新指標店！距別府約30分車程。3樓有「Workman Colors」，是旗下最著重「時尚穿搭」的頂級產品線，主打將高防風/防潑水機能隱藏在都會時裝中(無工作服)。(大分市玉沢775-1 / 10:00起)", "Park Place 大分|南加州風戶外商場。有AEON大創，中庭有讓小孩玩水噴泉與遊樂設施。", "Youme Town 別府|別府灣旁大型賣場。採買小孩換洗衣物、日常零食與超市水果最佳去處。", "AMU Plaza 大分|大分車站共構。頂樓有鐵道神社與迷你觀光小火車，完美結合購物與溜小孩。", "西松屋 別府店|路面獨立店好停車。臨時缺衣服、幼童牙刷或消耗品，掃貨便宜又齊全。", "Mega Trial 巨型超市|24小時營業超平價。自駕回飯店前來這裡搬鮮奶、果汁與宵夜最划算。", "唐吉訶德 別府店|獨立大店面。爸媽半夜補齊藥妝、免稅品或買奇特玩具的不二選擇。", "Tokiwa 別府店|別府老牌百貨，地下一樓超市是採買大分高級特產(柚子胡椒/香菇)好地方。", "湯之坪街道|由布院散步商店街。開滿手工藝、木製品與甜點店，推推車慢慢逛非常愜意。", "橡子共和國 どんぐりの森|吉卜力專賣店。巨大龍貓車站超好拍，滿滿龍貓周邊大小朋友都失心瘋。", "Snoopy Chocolat|史努比主題巧克力專賣店。包裝極度精美，非常適合買回台灣送禮。", "由布院 Kotokotoya|無添加手工果醬專賣。口味多元(草莓牛奶/無花果)，是很棒的天然伴手禮。", "由布院之森 紀念品店|由布院車站周邊。不搭車也能買到精緻九州鐵道相關木製玩具或紀念品。", "由布院 鞠智|包裝果醬與手工餅乾非常有質感，是送給長輩或主管的高級選擇。", "道之驛 由布院|交流道旁公路休息站。能買在地新鮮蔬果、便宜鮮奶與特色木作。", "別府交通中心|集合千種大分縣伴手禮。不想提大包小包逛街，可安排在此一次買齊。", "海地獄 紀念品店|名產「湯之花(溫泉粉)」，重現別府溫泉滑潤感，還有地獄溫泉入浴劑。", "大分香氛博物館 商店|獨特香水與擴香。時間允許還能讓孩子體驗調製自己的專屬香水。", "和諧樂園 紀念品店|外面買不到的九州限定版三麗鷗商品，滿足六歲半女孩公主夢的最終站。", "道之驛 中津|大分北部休息站。能買到日本第一「中津唐揚炸雞」，極佳車內點心。"]
    },
    kumamoto: {
        sight: ["⭐ 熊本城|日本三大名城。天守閣已全面修復，內部有電梯，推嬰兒車也能輕鬆登頂。", "⭐ 櫻之馬場 城彩苑|熊本城下江戶街景。湧湧座能讓孩子體驗穿傳統服飾與歷史遊戲。", "⭐ 熊本熊廣場 (部長辦公室)|來熊本必朝聖。提前查好時刻表，看熊本熊本尊現場唱跳秀，氣氛超嗨，小孩會跟著跳。", "⭐ 水前寺成趣園|腹地廣大且平坦的日式庭園。非常適合推車散步，池塘有很多錦鯉可餵。", "⭐ 大觀峰展望所|阿蘇北外輪山制高點。火口關閉時的最佳替代絕景，停車場大、推車可達。", "⭐ 阿蘇神社 ＆ 門前町商店街|地震修復完畢。周邊門前町極好逛，水基巡禮喝湧泉，必吃馬肉可樂餅與赤牛烤肉串。", "⭐ 上色見熊野座神社|絕美森林探險，需爬 260 階石階，小孩可當體能放電。⚠️ 雨天青苔濕滑改為備選！", "⭐ 白川水源|日本名水百選。水質清澈步道平緩，帶空瓶讓孩子體驗裝取天然湧泉。", "⭐ 阿蘇農場樂園 (元氣之森)|自駕強推！超大戶外體能挑戰區，還能住宿在可愛的圓頂饅頭屋裡。", "⭐ 草千里之濱 (草千里展望所)|阿蘇山下廣闊大草原。孩子可盡情奔跑、體驗騎馬，風景絕美停車方便。", "⭐ 高千穗峽|宮崎縣絕景！雖然車程稍遠，但峽谷划船與飛瀑景觀極度震撼（划船需預約）。", "⭐ 長部田海床路|退潮才會浮現的「海中道路」。宛如《神隱少女》場景，黃昏拍照極夢幻。", "⭐ 海中水族館海洋甜甜圈|漂浮在海上的環狀水族館。可看海豚、餵食海龜，規模小但極具特色。", "⭐ 天草賞野生海豚|搭船出海看野生海豚，遭遇率高達90%以上，是非常棒的生命教育。", "黑川溫泉|九州最美溫泉街。⚠️ 休旅車嚴禁駛入巷弄，需停外圍大型停車場徒步進入。距熊本市區較遠請留意車程。", "阿蘇卡德利動物樂園|可買飼料餵熊，還有企鵝水豚。甚至提供直升機搭乘看火山口付費體驗。", "阿蘇火山博物館|草千里旁。在安全的室內了解火山知識，很好的自然科學教育景點。", "熊本市動植物園|門票極便宜！園區廣大有大象長頸鹿，附設復古遊樂園，在地家庭首選。", "阿蘇牛奶牧場|可以體驗擠牛奶、餵食小羊與賽豬。動物互動溫和，非常適合當作阿蘇下山時的收心站。", "Asobi Park PLUS (櫻町商場)|位在 KOKO 飯店樓下商場的室內樂園！有光影互動沙灘與氣墊，市區遇雨躲避的絕佳去處。", "鍋瀑布 (小國町)|罕見可「走到瀑布背面」的水濂洞瀑布，夏天消暑，像探險一樣有趣。", "通潤橋 (山都町)|日本最大石造拱橋。特定時間會在橋中央豪邁放水，水花四濺非常震撼。", "熊本熊港八代|為迎接郵輪建的超大公園。數十座大小不一的熊本熊雕像，拍照拍到手軟。", "御輿來海岸|退潮時出現美麗沙紋。被選為日本百大海岸，適合喜歡自然生態的家庭。", "格林主題樂園 Greenland|九州最大遊樂園。日本最多遊樂設施，從幼童溫和到刺激雲霄飛車通通有。"],
        food: ["⭐ 燒肉 孫三郎|【單點/精緻套餐】嚴選九州頂級黑毛和牛。大人均消約¥5,000-7,000。座位寬敞、排煙系統極佳，提供高品質的雙家庭無煙燒肉環境。", "⭐ 彩爐 (Sairo) 燒肉|【單點/家庭套餐】熊本在地連鎖和牛燒肉。大人均消約¥3,000-4,000。提供豐富的九州產特選和牛，設有包廂、平板點餐及兒童專屬小禮物，極度友善。", "⭐ ASO MILK FACTORY|超濃郁阿蘇牛奶、玫瑰霜淇淋。附設義式餐廳，廣大停車場與庭園非常讚。", "⭐ 黑亭拉麵 (本店/下通店)|【單點】熊本拉麵霸主！大人均消約¥900-1,200。特色是濃郁豚骨加上「焦黑蒜油」。備有兒童拉麵套餐(約¥600)，翻桌快，朝聖必吃。", "⭐ 味千拉麵 (本店/各分店)|【單點】風靡全球的熊本拉麵代表！大人均消約¥800-1,000。提供豐富兒童餐(約¥500)與玩具，自駕路面店極多且好停車，小孩極愛。", "⭐ 桂花拉麵 (本店)|【單點】創立於昭和30年的老字號！大人均消約¥900-1,100。濃郁豚骨雞骨白湯加上特製太肉(控肉)極度軟嫩，大人吃肉滿意，小孩喝湯滿足。", "勝烈亭 新市街本店|熊本超強米其林推薦炸豬排！提供兒童餐，高麗菜絲與味噌湯可續加。", "いまきん食堂 (赤牛丼)|【單點蓋飯】阿蘇必吃赤牛名店。半熟赤牛丼約¥2,000，肉質軟嫩小孩好咬。周邊有老街可散步等待。", "燒肉きんぐ (燒肉King)|【吃到飽】家庭客神店！大人約¥3,500，小學生半價，學齡前幼童直接免費！平板點餐送餐快，附餐與甜點極豐富。", "紅蘭亭 下通本店|熊本特有「太平燕」(大骨湯底蔬菜冬粉)。清爽不油膩，非常適合幼童。", "菅乃屋 (馬肉料理)|熊本名產。備有熟食、兒童餐與包廂，家庭用餐無壓力嚐鮮在地特色。", "Center River 漢堡排|現烤多汁漢堡排，上桌時在鐵板上滋滋作響，绝对是小朋友的最爱。", "蜂樂饅頭 熊本本店|上通商店街內，類似台灣紅豆餅。內餡飽滿，自駕逛街隨手買解饞點心。", "迴轉壽司 壽司市場|自駕途中最棒救星。平價好停車，有烏龍麵炸薯條，解決小孩挑食。", "櫻之馬場 城彩苑小吃|海膽可樂餅、即食赤牛串。買了直接在戶外休息區吃，不怕吵別人。", "熊本長崎次郎喫茶室|二樓復古咖啡廳。窗邊可俯瞰熊本路面電車經過，鐵道迷小孩必訪。", "高森田樂之里|200年歷史茅草屋。一家人圍著傳統「地爐」烤田樂，極具文化體驗感。", "白水乃藏 (南阿蘇)|南阿蘇景觀餐廳。美味赤牛漢堡排，室內有榻榻米，窗外就是阿蘇山景。", "草千里 Douce Nuage|草千里旁的優雅景觀咖啡廳。看著草原喝下午茶吃蛋糕非常愜意。", "林檎之樹 (南阿蘇)|果園中的超人氣咖啡廳。必吃自製蘋果派，戶外空間充滿鄉村童話風。", "岡本豆腐店 (小國町)|深山百年老店。提供純粹豆腐定食、炸豆皮，口味清淡適合長輩幼童。", "天草 海鮮家 福伸|天草最強海鮮餐廳。新鮮生魚片，設大停車場與海景榻榻米包廂，極友善。", "天草 L’isola Terrace|南洋度假風海景餐廳。除了海鮮西餐，必買極品車上點心「天草鹽麵包」。", "天草 奴壽司|日本百大名店級別的握壽司。若父母想犒賞自己，職人手藝值得開車前往。"],
        shop: ["⭐ Tokiwa Wasada Town (含 Workman Colors)|🔥 2026年4月全新開幕最新指標店！距別府約30分車程。3樓有「Workman Colors」，是旗下最著重「時尚穿搭」的頂級產品線，主打將高防風/防潑水機能隱藏在都會時裝中(無工作服)。(大分市玉沢775-1 / 10:00起)", "AMU PLAZA 熊本|熊本車站直通大型商場。有BicCamera、航海王專賣店與戶外庭園瀑布。", "SAKURA MACHI 櫻町熊本|結合巴士總站大型綠建築。頂樓有巨型熊本熊，地下街有超市，頂樓花園。", "AEON MALL 熊本|自駕必去！免費超大停車場，有童裝、室內遊樂區，甚至附設天然溫泉。", "Youme Town 濱線|超大型連鎖商場，停車方便。內有豐富的母嬰用品與生活雜貨。", "上通商店街|有遮雨棚的步行街。路面平坦適合推推車，有許多老字號文具店與咖啡廳。", "下通商店街|熊本最熱鬧商店街。藥妝店密集度最高，買免稅品來這裡就對了。", "鶴屋百貨店|熊本最高級老字號百貨。一樓是熊本熊辦公室，地下美食街買在地高級伴手禮。", "HAB@ 熊本|全新商場。有大創質感升級品牌「Standard Products」，非常好買。", "唐吉訶德 熊本中央店|獨棟唐吉訶德附設停車場。自駕隨時可以來搬尿布、零食、免稅品。", "熊本縣物產館|市區內集結熊本各鄉鎮特產。沒時間跑郊區的話來這裡買伴手禮最省事。", "城彩苑 櫻之小路|江戶風情商店街。買熊本特色茶葉、當地限定版的熊本熊周邊小物。", "阿卡將本舖 (Youme光之森)|日本必逛母嬰用品天堂。衣服、副食品、推車配件一次買齊。", "西松屋 (路面店)|自駕容易抵達。主打超級平價的童裝與嬰兒消耗品，搜Google Map即有。", "Mega Trial 菊陽店|24小時巨型超市，自駕族補給神庫！半夜買超級便宜飲料、生鮮與日用品。", "道之驛 阿蘇|滿意度極高公路休息站。必買阿蘇限定鮮奶、優酪乳及當地手工赤牛便當。", "道之驛 大津|往阿蘇必經之路。以「地瓜」為主題，買各種好吃的地瓜甜點與烤地瓜。", "Aso Milk Factory 伴手禮|除了吃冰，起司、年輪蛋糕及國際三星獎「ASO MILK」都是頂級伴手禮。", "L'isola Terrace 天草|主打天草海鹽相關製品、珍珠以及海洋風的雜貨，包裝精美。", "阿蘇熊本機場 國內線商店|回國前最後衝刺！全新改裝伴手禮陣容極強，知名土產陣太鼓皆有。"]
    }
};


        const gourmetBackupDB = {
            "oita": [
                        {
                                    "name": "豊後牛ステーキの店 そむり 別府本店",
                                    "rank": "S",
                                    "type": "豐後牛排／大人犒賞",
                                    "bestDay": "Day2・Day3 晚餐",
                                    "area": "別府北浜",
                                    "mapQuery": "豊後牛ステーキの店 そむり 別府本店",
                                    "must": "豊後牛サーロイン、豊後牛ヒレ、漢堡排或白飯分食。",
                                    "why": "大分段若只吃一餐高級牛，這家最有「豐後牛」記憶點；適合大人把這餐當主菜。",
                                    "strategy": "避開週一與週三晚餐；兩家庭 8 人建議先訂位，吃完可回別府飯店休息。",
                                    "kid": "不是最兒童向，但可讓小孩分食牛排、飯、湯；孩子累時改元相或亜李蘭。",
                                    "warning": "價格高於家庭燒肉；Day4 週一不排。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://www.somuri.net/info/"
                                                }
                                    ]
                        },
                        {
                                    "name": "焼肉 元相 本店",
                                    "rank": "S",
                                    "type": "豐後牛／和牛燒肉",
                                    "bestDay": "Day3・Day4 晚餐",
                                    "area": "別府石垣東",
                                    "mapQuery": "焼肉 元相 本店 別府",
                                    "must": "上カルビ、上ロース、赤身拼盤、牛タン、冷麵、石鍋拌飯。",
                                    "why": "親子團最平衡的別府燒肉；比連鎖吃到飽更有質感，比牛排館更適合多人分食。",
                                    "strategy": "Safari＋由布院後若想犒賞大人，這家優先；訂不到再切亜李蘭或韓国苑。",
                                    "kid": "燒肉由大人負責烤熟再分給小孩；白飯、冷麵、湯品好處理。",
                                    "warning": "熱門晚餐時段建議訂位。",
                                    "links": []
                        },
                        {
                                    "name": "個室焼肉 亜李蘭別邸 別府店",
                                    "rank": "A",
                                    "type": "個室燒肉／親子穩定",
                                    "bestDay": "Day2・Day3・Day4 晚餐",
                                    "area": "別府",
                                    "mapQuery": "個室焼肉 亜李蘭別邸 別府店",
                                    "must": "黒毛和牛三種、和牛カルビ、ファミリーセット、冷麵、甜點。",
                                    "why": "包廂與座位穩定度高，適合兩家庭帶小孩；肉質不是最頂但執行成功率高。",
                                    "strategy": "若孩子疲累、不想排名店，就把這家當別府燒肉保險牌。",
                                    "kid": "個室、平板點餐、附餐多，親子壓力低。",
                                    "warning": "請確認當月店休日；大型連假最好提前訂。",
                                    "links": []
                        },
                        {
                                    "name": "焼肉 韓国苑 別府店",
                                    "rank": "A",
                                    "type": "家庭燒肉／備案",
                                    "bestDay": "Day4 晚餐",
                                    "area": "別府",
                                    "mapQuery": "焼肉 韓国苑 別府店",
                                    "must": "豊後牛／おおいた和牛標示品項、赤身、カルビ、ハラミ、石焼ビビンバ。",
                                    "why": "你原行程中已列為備案；菜單廣、孩子能吃的東西多，適合疲勞日。",
                                    "strategy": "訂不到元相／亜李蘭時使用；不要把它當最高級和牛主餐。",
                                    "kid": "吃到飽／附餐多，小孩接受度高。",
                                    "warning": "確認「豐後牛」品項是否當日供應；別只點一般便宜肉。",
                                    "links": []
                        },
                        {
                                    "name": "焼肉 一力",
                                    "rank": "B",
                                    "type": "別府在地老派燒肉",
                                    "bestDay": "Day2・Day3 晚餐備案",
                                    "area": "別府站東口",
                                    "mapQuery": "焼肉 一力 別府",
                                    "must": "地元豊後牛、カルビ、ロース、牛タン。",
                                    "why": "較像在地老店，適合大人想吃老派燒肉氣氛。",
                                    "strategy": "只有大人會更適合；親子 8 人仍以元相／亜李蘭優先。",
                                    "kid": "座位與動線不如大型店穩。",
                                    "warning": "停車與座位容量需現場確認。",
                                    "links": []
                        },
                        {
                                    "name": "地獄蒸し工房 鉄輪",
                                    "rank": "S",
                                    "type": "別府體驗海鮮／溫泉蒸",
                                    "bestDay": "Day3 午餐",
                                    "area": "鐵輪溫泉",
                                    "mapQuery": "地獄蒸し工房 鉄輪",
                                    "must": "蒸蝦、貝類、蟹爪、魚、玉米、地瓜、蛋。",
                                    "why": "不是頂級海鮮，但它是別府最有記憶點的親子料理體驗。",
                                    "strategy": "上午地獄巡禮後接午餐最順；若下午要海之卵，務必控時。",
                                    "kid": "小孩會覺得像料理實驗；食物原味、相對好分食。",
                                    "warning": "不接受預約，以現場號碼順序；別壓縮海之卵表演時間。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://jigokumushi.com/"
                                                }
                                    ]
                        },
                        {
                                    "name": "亀正くるくる寿司",
                                    "rank": "S",
                                    "type": "厚切壽司／別府海鮮",
                                    "bestDay": "Day3 晚餐",
                                    "area": "別府",
                                    "mapQuery": "亀正くるくる寿司 別府",
                                    "must": "當日地魚、白身魚、ひらめ、炙り魚、貝類。",
                                    "why": "想吃高 CP 值生魚片與壽司，別府段首選；切片厚、人氣高。",
                                    "strategy": "放晚餐，不放海之卵前；排隊太長直接改海鮮いづつ或とよ常。",
                                    "kid": "壽司、茶碗蒸、炸物可分流小孩需求。",
                                    "warning": "名店排隊不可控；先查當日營業與候位規則。",
                                    "links": []
                        },
                        {
                                    "name": "海鮮いづつ",
                                    "rank": "A",
                                    "type": "刺身／關鰺關鯖／海鮮丼",
                                    "bestDay": "Day3 晚餐",
                                    "area": "別府市區",
                                    "mapQuery": "海鮮いづつ 別府",
                                    "must": "刺身盛合、海鮮丼、関あじ、関さば、河豚看預算。",
                                    "why": "若目標是「生魚片」而不是天丼，這家比一般餐廳更對題。",
                                    "strategy": "有関あじ就點；関さば 6 月非主旬，價格高就改刺身或海鮮丼。",
                                    "kid": "小孩可點熟食或白飯分食；成人主攻刺身。",
                                    "warning": "魚種與價格依當日供應變動。",
                                    "links": []
                        },
                        {
                                    "name": "とよ常 別府駅前店／本店",
                                    "rank": "A",
                                    "type": "天丼／琉球丼／家庭餐",
                                    "bestDay": "Day3・Day4 午晚餐",
                                    "area": "別府站周邊",
                                    "mapQuery": "とよ常 別府",
                                    "must": "特上天丼、りゅうきゅう丼、刺身定食。",
                                    "why": "兩隻大蝦天丼視覺強，孩子接受度高；りゅうきゅう丼是大分鄉土海鮮。",
                                    "strategy": "排隊比壽司名店可控時可用；想吃炸物＋海鮮兼顧就選。",
                                    "kid": "天丼、白飯、炸物對孩子友善。",
                                    "warning": "不是高級刺身第一名；尖峰時間仍會等。",
                                    "links": []
                        },
                        {
                                    "name": "りゅうきゅう丼",
                                    "rank": "A",
                                    "type": "大分鄉土海鮮",
                                    "bestDay": "Day3・Day4 任一餐",
                                    "area": "大分／別府",
                                    "mapQuery": "別府 りゅうきゅう丼",
                                    "must": "以鰺、鯛、鯖等魚片拌醬油、芝麻、薑後蓋飯。",
                                    "why": "這是大分本地性最高的海鮮丼，比追帝王蟹更符合路線。",
                                    "strategy": "在とよ常、海鮮居酒屋或定食店看到就可點；當作午餐比高價刺身盤穩。",
                                    "kid": "醬漬魚片較重口，小孩不吃生魚可改天丼。",
                                    "warning": "仍屬生魚片料理，幼童不建議大量吃。",
                                    "links": [
                                                {
                                                            "label": "料理背景",
                                                            "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/ryukyu_oita.html"
                                                }
                                    ]
                        },
                        {
                                    "name": "関あじ／関さば",
                                    "rank": "A",
                                    "type": "大分品牌魚",
                                    "bestDay": "Day3 晚餐有貨再點",
                                    "area": "別府／大分",
                                    "mapQuery": "別府 関あじ 関さば 刺身",
                                    "must": "関あじ刺身、関さば刺身。",
                                    "why": "関あじ接近夏季更值得問；関さば偏冬季，不需硬追。",
                                    "strategy": "到海鮮店問「関あじ、今日はありますか？」有貨且價格可接受再點。",
                                    "kid": "大人嘗鮮，小孩可吃熟食。",
                                    "warning": "6 月不是関さば主旬；避免為名氣支付過高溢價。",
                                    "links": []
                        },
                        {
                                    "name": "六盛 松原本店",
                                    "rank": "S",
                                    "type": "別府冷麵／溫麵",
                                    "bestDay": "Day2・Day3 午餐",
                                    "area": "別府松原町",
                                    "mapQuery": "六盛 松原本店 別府冷麺",
                                    "must": "別府冷麵、溫麵、チャーシューメン、飯糰。",
                                    "why": "別府麵食第一順位；6 月天氣熱，冷麵比一般豚骨拉麵更有地方性。",
                                    "strategy": "排午餐最穩；湯賣完會提早結束，晚餐要保守。",
                                    "kid": "麵有嚼勁，孩子怕冷可點溫麵或分食飯糰。",
                                    "warning": "麵含蕎麥粉，過敏者避開。週三休。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://www.6-sei.com/"
                                                }
                                    ]
                        },
                        {
                                    "name": "胡月",
                                    "rank": "A",
                                    "type": "別府冷麵老名店",
                                    "bestDay": "Day2・Day3 午餐",
                                    "area": "別府",
                                    "mapQuery": "別府冷麺 胡月",
                                    "must": "冷麵、溫麵、叉燒冷麵。",
                                    "why": "別府冷麵老名店；若六盛排隊或動線不順，可改胡月。",
                                    "strategy": "白天吃比晚上安全；營業時間通常較早結束。",
                                    "kid": "有溫麵可照顧孩子。",
                                    "warning": "晚餐不穩，請查當日營業。",
                                    "links": []
                        },
                        {
                                    "name": "豊後ラーメン 一刀竜 別府店",
                                    "rank": "B",
                                    "type": "豚骨拉麵備案",
                                    "bestDay": "Day3・Day4 晚餐備案",
                                    "area": "別府",
                                    "mapQuery": "豊後ラーメン 一刀竜 別府店",
                                    "must": "屋台風、白豚骨、赤豚骨、濃厚つけ麺。",
                                    "why": "想吃正統拉麵時可用；但地方特色不如六盛冷麵。",
                                    "strategy": "燒肉、海鮮都排不到時的晚餐備案。",
                                    "kid": "翻桌快，孩子可分食麵與飯。",
                                    "warning": "若只能吃一碗別府麵食，仍先選冷麵。",
                                    "links": []
                        },
                        {
                                    "name": "東洋軒",
                                    "rank": "A",
                                    "type": "大分名物雞天",
                                    "bestDay": "Day2・Day3 午餐備案",
                                    "area": "別府",
                                    "mapQuery": "レストラン東洋軒 別府 とり天",
                                    "must": "とり天、定食、飯類。",
                                    "why": "非海鮮／牛肉，但大分代表小吃；孩子接受度高。",
                                    "strategy": "樂園日或地獄日若想吃熟食定食可排。",
                                    "kid": "炸雞天比生魚片穩，非常適合幼童。",
                                    "warning": "人氣店仍可能排隊。",
                                    "links": []
                        },
                        {
                                    "name": "岡本屋売店",
                                    "rank": "A",
                                    "type": "地獄蒸布丁／輕食",
                                    "bestDay": "Day3 地獄區",
                                    "area": "明礬溫泉",
                                    "mapQuery": "岡本屋売店 別府 地獄蒸しプリン",
                                    "must": "地獄蒸布丁、雞蛋三明治、溫泉烏龍麵。",
                                    "why": "地獄區點心首選；可當孩子車上補給。",
                                    "strategy": "不當正餐主菜，當午餐前後甜點最好。",
                                    "kid": "甜點、三明治、烏龍麵都適合孩子。",
                                    "warning": "尖峰停車可能滿。",
                                    "links": []
                        },
                        {
                                    "name": "由布まぶし 心",
                                    "rank": "A",
                                    "type": "由布院豐後牛土鍋飯",
                                    "bestDay": "Day4 午餐",
                                    "area": "由布院",
                                    "mapQuery": "由布まぶし 心 由布院",
                                    "must": "豐後牛まぶし、地雞まぶし、鰻まぶし。",
                                    "why": "由布院段若想把豐後牛放午餐，這家比普通咖啡廳更有地方性。",
                                    "strategy": "若湯之坪街道時間夠且孩子不累再排；不與晚餐燒肉同日重複也可。",
                                    "kid": "一鍋可分食，小孩可吃白飯與牛肉。",
                                    "warning": "排隊與等待時間可能壓縮由布院散步。",
                                    "links": []
                        },
                        {
                                    "name": "金賞コロッケ",
                                    "rank": "B",
                                    "type": "由布院小吃",
                                    "bestDay": "Day4 湯之坪街道",
                                    "area": "由布院",
                                    "mapQuery": "金賞コロッケ 由布院",
                                    "must": "牛肉可樂餅、起司可樂餅。",
                                    "why": "現炸小吃，適合湯之坪街道邊走邊吃。",
                                    "strategy": "不是正餐；孩子餓了先墊胃很好用。",
                                    "kid": "熱食好接受，但小心燙口。",
                                    "warning": "油炸品別買太多，避免影響晚餐燒肉。",
                                    "links": []
                        },
                        {
                                    "name": "B-speak",
                                    "rank": "B",
                                    "type": "由布院瑞士捲",
                                    "bestDay": "Day4 甜點／伴手禮",
                                    "area": "由布院",
                                    "mapQuery": "B-speak 由布院",
                                    "must": "Pロール、切片蛋糕。",
                                    "why": "由布院知名甜點；適合飯店宵夜或車上點心。",
                                    "strategy": "有經過再買，不要為排隊犧牲主行程。",
                                    "kid": "蛋糕柔軟，孩子接受度高。",
                                    "warning": "熱門口味售完快。",
                                    "links": []
                        },
                        {
                                    "name": "Milch",
                                    "rank": "B",
                                    "type": "由布院起司甜點",
                                    "bestDay": "Day4 甜點",
                                    "area": "由布院",
                                    "mapQuery": "Milch 由布院",
                                    "must": "半熟起司蛋糕、布丁、冰淇淋。",
                                    "why": "小份甜點很好分食，比排長隊餐廳更彈性。",
                                    "strategy": "邊逛邊吃，不需特地排時段。",
                                    "kid": "甜點小份，適合孩子。",
                                    "warning": "冷熱版本口感不同，現場看喜好。",
                                    "links": []
                        }
            ],
            "kumamoto": [
                        {
                                    "name": "海鮮家 福伸 上天草松島本店",
                                    "rank": "S",
                                    "type": "上天草海鮮主餐",
                                    "bestDay": "Day7 午餐第一順位",
                                    "area": "上天草・松島",
                                    "mapQuery": "海鮮家 福伸 上天草",
                                    "must": "車海老御膳、特上海鮮丼、刺身御膳、鮑魚、岩牡蠣有貨再加。",
                                    "why": "你這趟「珍貴海鮮在日本吃」的最高命中率餐廳；比牡蠣小屋更適合 6 月。",
                                    "strategy": "Day7 直接鎖午餐；若排隊太久，切到天のや。",
                                    "kid": "有座位與定食，孩子可吃天婦羅、白飯、熟食；生食由成人主攻。",
                                    "warning": "海膽、岩牡蠣、活車蝦依當日供應；出發前或當天確認。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://www.fukushin.com/"
                                                }
                                    ]
                        },
                        {
                                    "name": "天草パールガーデン どんぶり亭 天のや",
                                    "rank": "S",
                                    "type": "海鮮丼／天丼／親子穩",
                                    "bestDay": "Day7 午餐第二順位",
                                    "area": "上天草・Sea Donut 旁",
                                    "mapQuery": "どんぶり亭 天のや 天草パールガーデン",
                                    "must": "バラ散らし海鮮丼、車海老、アワビ、マグロ、天丼、贅沢三食丼。",
                                    "why": "Sea Donut 動線最順，90 席等級的親子穩定度高；停車、廁所、座位都好處理。",
                                    "strategy": "福伸客滿或孩子狀態不穩時立刻切換，不要硬等。",
                                    "kid": "丼飯、天丼、熟食比純刺身更友善。",
                                    "warning": "伊勢海老丼多為數量限定與季節型，6 月不要硬追。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://amakusapearl.com/gourmetshopb/"
                                                }
                                    ]
                        },
                        {
                                    "name": "L’isola Terrace Amakusa／Plate Cafe L’isola",
                                    "rank": "A",
                                    "type": "海景休息／鹽麵包",
                                    "bestDay": "Day7 下午茶",
                                    "area": "上天草・五號橋周邊",
                                    "mapQuery": "L’isola Terrace Amakusa Plate Cafe",
                                    "must": "天草鹽麵包、真鯛料理、咖啡甜點、伴手禮。",
                                    "why": "景觀、休息、採買強；海鮮性價比不是第一，但動線漂亮。",
                                    "strategy": "主餐仍給福伸或天のや；這裡當咖啡、鹽麵包、廁所休息點。",
                                    "kid": "小孩適合鹽麵包、甜點、果汁。",
                                    "warning": "不要把它當生魚片／海膽主戰場。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://www.lisolaterrace.com/"
                                                }
                                    ]
                        },
                        {
                                    "name": "天草ちゃんぽん 千蘭 本店",
                                    "rank": "A",
                                    "type": "天草強棒麵",
                                    "bestDay": "Day7 午餐備案",
                                    "area": "三角町・往上天草途中",
                                    "mapQuery": "天草ちゃんぽん 千蘭 本店",
                                    "must": "天草ちゃんぽん、海鮮強棒麵。",
                                    "why": "若當天想吃熱湯麵，不想吃海鮮丼，這是最貼近上天草動線的麵食備案。",
                                    "strategy": "只有在福伸／天のや不排時使用；上天草主線仍是海鮮。",
                                    "kid": "熱湯麵、蔬菜、海鮮，孩子比生魚片更容易接受。",
                                    "warning": "座位與停車有限；休業日需查。",
                                    "links": []
                        },
                        {
                                    "name": "mio camino AMAKUSA 牡蠣活動",
                                    "rank": "C",
                                    "type": "牡蠣小屋／季節活動",
                                    "bestDay": "Day7 不建議主排",
                                    "area": "上天草・松島",
                                    "mapQuery": "mio camino AMAKUSA オイスターフェスティバル",
                                    "must": "冬季烤牡蠣、ヒオウギ貝、車海老海鮮 BBQ。",
                                    "why": "上天草確實有牡蠣小屋／牡蠣活動，但 2026 活動期為 1/17–3/15，你們 6 月已過主季。",
                                    "strategy": "這趟不為牡蠣改行程；若餐廳有岩牡蠣，當加點即可。",
                                    "kid": "小孩只吃烤／蒸熟牡蠣，不吃生牡蠣。",
                                    "warning": "6 月不要把牡蠣小屋列第一順位。",
                                    "links": [
                                                {
                                                            "label": "活動資訊",
                                                            "url": "https://www.kyusanko.co.jp/miocaminoamakusa/infomation/3619/"
                                                }
                                    ]
                        },
                        {
                                    "name": "カキ小屋 アズール",
                                    "rank": "B",
                                    "type": "牡蠣小屋型備案",
                                    "bestDay": "Day7 有營業才考慮",
                                    "area": "上天草・大矢野",
                                    "mapQuery": "カキ小屋 アズール 上天草",
                                    "must": "烤牡蠣、貝類、海鮮 BBQ。",
                                    "why": "想體驗牡蠣小屋可查，但 6 月食材狀態不如冬季穩。",
                                    "strategy": "需電話或 Google 最新資訊確認；不取代福伸／天のや。",
                                    "kid": "避免生食；熟牡蠣少量分享即可。",
                                    "warning": "季節性與營業不確定。",
                                    "links": []
                        },
                        {
                                    "name": "道の駅 上天草さんぱーる",
                                    "rank": "A",
                                    "type": "補買海產／物產",
                                    "bestDay": "Day7 途中補給",
                                    "area": "上天草・大矢野",
                                    "mapQuery": "道の駅 上天草さんぱーる",
                                    "must": "車海老、真鯛、章魚、魚漿製品、柑橘、天草晩柑。",
                                    "why": "不一定取代正餐，但適合補買、看當地水產與伴手禮。",
                                    "strategy": "可排短停 15–25 分鐘；買車上點心或伴手禮。",
                                    "kid": "廁所、賣店、簡單補給友善。",
                                    "warning": "正餐仍以福伸或天のや為優先。",
                                    "links": []
                        },
                        {
                                    "name": "丸健水産",
                                    "rank": "B",
                                    "type": "生海膽／海鮮名店但較遠",
                                    "bestDay": "Day7 不建議硬繞",
                                    "area": "天草市五和方向",
                                    "mapQuery": "丸健水産 天草 生うに",
                                    "must": "生海膽、海鮮丼、イルカウォッチング相關。",
                                    "why": "天草生海膽名店方向較深入天草，對你 Day7 上天草往返太繞。",
                                    "strategy": "除非刪掉 Sea Donut 或改深入天草，否則只列願望清單。",
                                    "kid": "生海膽由成人少量嘗試；孩子吃熟食。",
                                    "warning": "6 月初已過 2026 生うに三昧活動期。",
                                    "links": [
                                                {
                                                            "label": "天草生うに活動",
                                                            "url": "https://www.t-island.jp/event/2326"
                                                }
                                    ]
                        },
                        {
                                    "name": "天草 HERO鮨 牛深丸 熊本站店",
                                    "rank": "A",
                                    "type": "熊本市區海鮮補救",
                                    "bestDay": "Day6・Day8 熊本站",
                                    "area": "熊本站",
                                    "mapQuery": "天草 HERO鮨 牛深丸 熊本站店",
                                    "must": "天草地魚握壽司、車海老握壽司、真鯛、章魚、海鮮丼。",
                                    "why": "Day7 若上天草海鮮沒吃好，熊本站內可補一餐天草系壽司。",
                                    "strategy": "返程或逛 AMU Plaza 時使用；不用專程從新市街繞過去。",
                                    "kid": "壽司、烏龍、炸物通常比純刺身好分流。",
                                    "warning": "熱門用餐時段可能等位。",
                                    "links": []
                        },
                        {
                                    "name": "活魚回転寿し 水天",
                                    "rank": "A",
                                    "type": "自駕壽司／家庭穩",
                                    "bestDay": "Day6・Day7 晚餐備案",
                                    "area": "熊本／菊陽／十禪寺",
                                    "mapQuery": "活魚回転寿し 水天 熊本",
                                    "must": "地魚壽司、海鮮丼、茶碗蒸、炸物。",
                                    "why": "自駕家庭需要停車、座位、孩子可吃品項時很穩。",
                                    "strategy": "想吃壽司但不想排市區名店時使用。",
                                    "kid": "烏龍、茶碗蒸、炸物能照顧孩子。",
                                    "warning": "不是高級海鮮主餐，但成功率高。",
                                    "links": []
                        },
                        {
                                    "name": "あか牛Dining yoka-yoka サクラマチ店",
                                    "rank": "S",
                                    "type": "熊本赤牛／市區最順",
                                    "bestDay": "Day6・Day7 晚餐",
                                    "area": "SAKURA MACHI",
                                    "mapQuery": "あか牛Dining yoka-yoka サクラマチ店",
                                    "must": "あか牛丼、あか牛ステーキ、あか牛ハンバーグ。",
                                    "why": "熊本市區吃赤牛的最佳動線；離新市街、下通、SAKURA MACHI 都順。",
                                    "strategy": "熊本只吃一餐赤牛就選這裡；不用自己烤肉，孩子累了也好處理。",
                                    "kid": "漢堡排、白飯套餐對小孩穩。",
                                    "warning": "尖峰用餐先確認等位；商場店休依 SAKURA MACHI。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://www.yokayoka-sakuramachi.com/"
                                                }
                                    ]
                        },
                        {
                                    "name": "和牛焼肉 LIEBE AMU Plaza 熊本店",
                                    "rank": "A",
                                    "type": "A4/A5 黑毛和牛燒肉",
                                    "bestDay": "Day6・Day8",
                                    "area": "熊本站 AMU Plaza",
                                    "mapQuery": "和牛焼肉 LIEBE AMU Plaza 熊本店",
                                    "must": "A4/A5 黒毛和牛盛合せ、焼きすき、焼きしゃぶ、牛タン。",
                                    "why": "想吃油花型高級和牛，這家比赤牛丼更對題；熊本站動線好。",
                                    "strategy": "返程前或逛 AMU 時排；若住新市街不去熊本站則不必專程繞。",
                                    "kid": "個室與附餐較友善，成人烤熟再分食。",
                                    "warning": "不是赤牛主軸，是黑毛和牛主軸。",
                                    "links": []
                        },
                        {
                                    "name": "焼肉すどう 熊本本店",
                                    "rank": "B",
                                    "type": "高級代烤燒肉",
                                    "bestDay": "Day6・Day7 大人向",
                                    "area": "熊本上通",
                                    "mapQuery": "焼肉すどう 熊本本店",
                                    "must": "當日和牛套餐、肉師代烤部位。",
                                    "why": "服務與肉質高階，適合大人犒賞；但親子 8 人執行難度高。",
                                    "strategy": "孩子狀態佳、能訂到合適座位再排；否則改 LIEBE 或 yoka-yoka。",
                                    "kid": "代烤減少燒烤風險，但餐期較正式。",
                                    "warning": "預算高，不適合趕時間或孩子疲累時。",
                                    "links": []
                        },
                        {
                                    "name": "あか牛の館",
                                    "rank": "B",
                                    "type": "南阿蘇赤牛燒肉",
                                    "bestDay": "Day1 備案",
                                    "area": "南阿蘇",
                                    "mapQuery": "あか牛の館 南阿蘇",
                                    "must": "赤牛燒肉套餐、赤身肉。",
                                    "why": "南阿蘇赤牛很對題，但 Day1 已有右駕與進別府長距離壓力。",
                                    "strategy": "只有刪掉部分景點、時間非常充裕時才排。",
                                    "kid": "燒肉需成人處理；孩子可吃白飯熟肉。",
                                    "warning": "不要為午餐拖慢第一天進別府。",
                                    "links": []
                        },
                        {
                                    "name": "いまきん食堂",
                                    "rank": "B",
                                    "type": "阿蘇赤牛丼名店",
                                    "bestDay": "Day5 午餐備案",
                                    "area": "阿蘇內牧",
                                    "mapQuery": "いまきん食堂 阿蘇",
                                    "must": "あか牛丼。",
                                    "why": "名氣很高，但排隊會拖垮 Day5 阿蘇橫斷＋進熊本。",
                                    "strategy": "10:30 前已接近內牧才考慮；否則放棄。",
                                    "kid": "赤牛丼肉片孩子可分食，但排隊不親子。",
                                    "warning": "不要為名店犧牲大觀峰、草千里與進熊本時間。",
                                    "links": []
                        },
                        {
                                    "name": "くまもと和ぎゅう まつおか",
                                    "rank": "B",
                                    "type": "赤牛丼／燒肉",
                                    "bestDay": "Day1 或阿蘇備案",
                                    "area": "熊本近郊／阿蘇動線",
                                    "mapQuery": "くまもと和ぎゅう まつおか",
                                    "must": "赤牛丼、赤牛漢堡排、晚間燒肉。",
                                    "why": "比いまきん排隊壓力可能低，但不完全貼合你 Day5 主線。",
                                    "strategy": "Day1 若想在南阿蘇前吃赤牛可查；Day5 不硬繞。",
                                    "kid": "漢堡排、熟肉較親子。",
                                    "warning": "位置與營業需當日確認。",
                                    "links": []
                        },
                        {
                                    "name": "黒亭 下通店",
                                    "rank": "S",
                                    "type": "熊本拉麵／市區宵夜",
                                    "bestDay": "Day6・Day7 晚餐或宵夜",
                                    "area": "熊本下通",
                                    "mapQuery": "黒亭 下通店 熊本ラーメン",
                                    "must": "熊本ラーメン、玉子入り、チャーシュー麺。",
                                    "why": "住新市街／下通時最順路；熊本拉麵代表，翻桌快。",
                                    "strategy": "熊本只吃一碗拉麵，優先黑亭下通。",
                                    "kid": "麵與白飯可分食；蒜味重時孩子少喝湯。",
                                    "warning": "官方營業與店休可能變動，出發前看最新公告。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://kokutei.co.jp/access/"
                                                }
                                    ]
                        },
                        {
                                    "name": "桂花ラーメン 本店",
                                    "rank": "A",
                                    "type": "熊本老牌／太肉麵",
                                    "bestDay": "Day6・Day7 晚餐",
                                    "area": "花畑町",
                                    "mapQuery": "桂花ラーメン 本店 熊本",
                                    "must": "太肉麺、桂花拉麵、餃子。",
                                    "why": "太肉是厚切角煮型配料，想吃熊本老牌拉麵可排。",
                                    "strategy": "黑亭太排或想吃太肉麵時使用；地點離新市街近。",
                                    "kid": "肉可分食，湯頭較濃，孩子可少湯。",
                                    "warning": "週日假日營業較早結束，確認時間。",
                                    "links": [
                                                {
                                                            "label": "官方",
                                                            "url": "https://keika-raumen.co.jp/shop_kmkt.html"
                                                }
                                    ]
                        },
                        {
                                    "name": "天外天 熊本站店",
                                    "rank": "A",
                                    "type": "熊本站拉麵／移動日",
                                    "bestDay": "Day8 或熊本站順路",
                                    "area": "熊本站",
                                    "mapQuery": "天外天 熊本站店",
                                    "must": "拉麵、海苔、叉燒飯。",
                                    "why": "座位少但便利度高；返程前或 AMU Plaza 行程順路時很好用。",
                                    "strategy": "不要特地從新市街繞來，只在熊本站動線使用。",
                                    "kid": "翻桌快，但 8 人可能分批坐。",
                                    "warning": "座位少，尖峰時段不適合久坐。",
                                    "links": []
                        },
                        {
                                    "name": "こむらさき 上通中央店",
                                    "rank": "A",
                                    "type": "溫和派熊本拉麵",
                                    "bestDay": "Day6・Day7 午晚餐",
                                    "area": "熊本上通",
                                    "mapQuery": "こむらさき 上通中央店 熊本",
                                    "must": "王樣拉麵、叉燒麵、餃子。",
                                    "why": "比文龍溫和，親子接受度高；上通散步後可吃。",
                                    "strategy": "怕黑亭／文龍太重口時選這家。",
                                    "kid": "溫和湯頭與餃子較友善。",
                                    "warning": "營業分午晚段，確認中休。",
                                    "links": []
                        },
                        {
                                    "name": "火の国文龍 総本店",
                                    "rank": "B",
                                    "type": "濃厚豚骨／大人重口味",
                                    "bestDay": "Day6 光之森順路",
                                    "area": "熊本東區",
                                    "mapQuery": "火の国文龍 総本店",
                                    "must": "文龍ラーメン黒、こってり豚骨、辛子高菜少量。",
                                    "why": "熊本濃厚派代表，但對小孩與疲勞晚餐較硬。",
                                    "strategy": "只有 Day6 熊本東區／光之森順路才排；不從新市街專程去。",
                                    "kid": "孩子可少湯、分食白飯；不建議太晚去。",
                                    "warning": "重油重蒜，非所有人都適合。",
                                    "links": []
                        },
                        {
                                    "name": "紅蘭亭 下通本店",
                                    "rank": "A",
                                    "type": "太平燕／熊本麵食",
                                    "bestDay": "Day6・Day7 午晚餐",
                                    "area": "熊本下通",
                                    "mapQuery": "紅蘭亭 下通本店 太平燕",
                                    "must": "太平燕、皿うどん、炒飯、中華小菜。",
                                    "why": "吃多了豚骨拉麵後的清爽選項；熊本代表麵食，親子穩。",
                                    "strategy": "晚餐不想吃燒肉／拉麵時排。",
                                    "kid": "春雨、蔬菜、湯品比濃拉麵更適合小孩。",
                                    "warning": "尖峰時段可能排隊；最後點餐需確認。",
                                    "links": []
                        },
                        {
                                    "name": "会楽園",
                                    "rank": "B",
                                    "type": "太平燕發祥系",
                                    "bestDay": "熊本白天備案",
                                    "area": "熊本新町／市區",
                                    "mapQuery": "会楽園 熊本 太平燕",
                                    "must": "太平燕、中華定食。",
                                    "why": "比紅蘭亭更像發祥系朝聖，但營業時段較白天向。",
                                    "strategy": "若市電沿線白天順路可排；晚餐便利性不如紅蘭亭。",
                                    "kid": "清爽湯麵型，親子可接受。",
                                    "warning": "休業與營業短，請查最新資訊。",
                                    "links": []
                        },
                        {
                                    "name": "勝烈亭 新市街本店",
                                    "rank": "A",
                                    "type": "炸豬排／市區安全牌",
                                    "bestDay": "Day6 午餐",
                                    "area": "熊本新市街",
                                    "mapQuery": "勝烈亭 新市街本店",
                                    "must": "炸豬排定食、兒童餐、白飯味噌湯。",
                                    "why": "你行程中熊本市區午餐候選之一；不是本次主題，但作為孩子安全牌很好。",
                                    "strategy": "當大人不想再吃海鮮／燒肉／拉麵時使用。",
                                    "kid": "炸豬排、白飯、高麗菜、味噌湯穩。",
                                    "warning": "熱門時段可能排隊。",
                                    "links": []
                        },
                        {
                                    "name": "櫻之馬場 城彩苑小吃",
                                    "rank": "B",
                                    "type": "熊本城小吃",
                                    "bestDay": "Day6 熊本城周邊",
                                    "area": "熊本城",
                                    "mapQuery": "桜の馬場 城彩苑 グルメ",
                                    "must": "赤牛串、馬肉可樂餅、海膽可樂餅、蜂樂饅頭等。",
                                    "why": "適合零碎補給，不適合取代正餐。",
                                    "strategy": "孩子餓了先用小吃穩住，再接熊本熊廣場。",
                                    "kid": "戶外休息區好處理，不怕孩子吵。",
                                    "warning": "小吃分散，先看當日店家營業。",
                                    "links": []
                        },
                        {
                                    "name": "蜂楽饅頭 熊本本店",
                                    "rank": "B",
                                    "type": "上通甜點小吃",
                                    "bestDay": "Day6・Day7 散步",
                                    "area": "熊本上通",
                                    "mapQuery": "蜂楽饅頭 熊本本店",
                                    "must": "黑餡／白餡蜂樂饅頭。",
                                    "why": "類似紅豆餅，便宜好吃，適合街上邊走邊吃。",
                                    "strategy": "排不上正餐時當補給。",
                                    "kid": "甜點型，孩子接受度高。",
                                    "warning": "熱餡小心燙口。",
                                    "links": []
                        }
            ]
};

        const dayFocusDB = {
            1: {
                mission: "安全完成右駕啟動，依現場節奏把南阿蘇想去點盡量串起來，天黑前穩穩進別府。",
                win: "完成取車與右駕適應，娜美/佛朗基至少順利拍到，傍晚能平穩抵達別府，就是成功。",
                hardCut: "Day1 排點維持；16:15 尚未抵達上色見時，建議改鳥居快閃或略過本殿；17:00 後優先往別府移動，不額外加遠點。",
                priority: ["必守：取車檢查、兩車通訊、抵達別府", "優先：娜美、佛朗基", "視情況調整：白川水源、上色見熊野座"],
                decision: "每一站下車前先問：廁所、點心、水、下一段車程。若某點縮短，優先把時間還給晚餐、停車與睡眠。",
                risk: "第一天最大的變數是右駕疲勞與山路節奏，不是景點不足。"
            },
            2: {
                mission: "把 Harmonyland 當成完整主菜日，不安排第二個大景點，讓孩子一次玩滿。",
                win: "看完主遊行、買到三麗鷗限定商品、傍晚還有力氣吃飯採買，就是滿分。",
                hardCut: "15:30 後以收束節奏為主；16:30 左右離園最順，可把晚餐、補給與回飯店節奏接穩。",
                priority: ["必守：主遊行/角色氛圍", "優先：早場迎賓秀、限定商品", "視情況調整：午後最後一輪表演或設施"],
                decision: "入園後先確認當日秀表，鎖定一場主遊行即可；其他都當加分，不把樂園日變成趕場行程。",
                risk: "戶外樂園怕曬、怕雨、怕排隊；防曬、雨具、推車/抱抱策略比多玩兩項設施重要。"
            },
            3: {
                mission: "上午用別府地獄短打，下午照官方時刻表安排海之卵核心展演。",
                win: "灶地獄或海地獄二選一成功，加上海豚、うみたまパフォーマンス、Asobeach/大水槽其中一項，就很扎實。",
                hardCut: "12:45 前後開始往海之卵移動較穩；13:30 前抵達可保留 14:00 海豚秀與後續展演餘裕。",
                priority: ["必守：14:00 海豚、15:00 うみたまパフォーマンス", "優先：14:30 Asobeach、15:40 大水槽", "視情況調整：地獄多點收集"],
                decision: "地獄區不用追求全收集，選互動性高的點；海之卵停車後先看秀場位置，再逛展區。",
                risk: "這天不是地獄巡禮日，是水族館展演日；地獄只服務於上午暖身。"
            },
            4: {
                mission: "早到 African Safari 現場排早班巴士；自駕 Safari 至少 1 圈是固定主菜，午後由布院以貓頭鷹與湯之坪為核心。",
                win: "完成自駕 Safari 至少 1 圈；若買到合適叢林巴士則加碼體驗，再依由布院目標決定 12:30–13:00 間離園。",
                hardCut: "由布院想完整走貓頭鷹＋湯之坪＋金鱗湖，Safari 建議 12:30 左右收束；若金鱗湖改短拍或略過，13:00 前後離園仍可接受。",
                priority: ["必守：自駕 Safari 至少 1 圈、早到現場排早班巴士", "優先：叢林巴士、小動物接觸區、貓頭鷹之森", "視情況調整：金鱗湖完整環湖、由布院深逛"],
                decision: "買到早班就先小動物區或先搭巴士；買到接近中午就先自駕；買不到就自駕＋接觸區，下午時間留給由布院。",
                risk: "這天的變數是等待巴士與由布院人潮。做法是保留時間窗，而不是把某個點過度壓縮到底。"
            },
            5: {
                mission: "別府轉熊本的移動日，用大觀峰、阿蘇站、草千里完成阿蘇精華，不賭火口。",
                win: "天氣好看到阿蘇外輪山，順手撿騙人布，傍晚安全入住熊本，就是成功。",
                hardCut: "14:00 後若仍在阿蘇站/阿蘇神社，草千里改短停；15:30 前後開始往熊本下山較穩。",
                priority: ["必守：大觀峰、阿蘇站補給、熊本入住", "優先：阿蘇神社、草千里", "備案：火山口只查開放，不預設會去"],
                decision: "阿蘇神社是彈性點：兩車都有精神才去；若孩子午睡，直接上草千里或下山。",
                risk: "阿蘇火口變數高，氣體、天候、道路管制都可能影響；避免讓臨時加點反客為主。"
            },
            6: {
                mission: "長途後修復日：上午恐龍與布魯克，下午熊本熊，晚上購物，節奏要鬆。",
                win: "小孩上午有主題、大人下午能回市區休息、晚上買到 Workman/童裝補給。",
                hardCut: "11:20 前後離開御船較穩；13:40 抵達熊本熊廣場可保留 14:00–14:30 活動餘裕，錯過時改商場或飯店休息。",
                priority: ["必守：御船恐龍＋布魯克", "優先：熊本熊部長活動", "視情況調整：鶴屋/上下通延伸逛街"],
                decision: "熊本熊場次以官方月曆為準；若剛好錯過，就把下午改成商場/飯店休息，不為追下一場讓孩子過累。",
                risk: "這天是修復日，不是補點日；不要把前幾天沒去成的點全部塞回來。"
            },
            7: {
                mission: "上天草輕遠征：上午看滿潮電線桿與甚平，中段保留 Sea Donut，下午條件允許再用 16:57 干潮把長部田海床路當主秀。",
                win: "完成天草五橋兜風、Sea Donut、午餐與一個海床路機會，晚上平安回熊本吃喝。若下午能二刷長部田，就是加分。",
                hardCut: "Sea Donut 仍盡量保留；14:50–15:10 視水族館停留、天氣與孩子狀態決定回程是否二刷長部田。",
                priority: ["必守：Sea Donut/上天草主線、上午甚平", "優先：16:57 干潮長部田主秀", "不排：崎津、大江、牛深、倉岳深追"],
                decision: "長部田採兩段判斷：上午拍滿潮景；下午孩子狀態 OK、天氣可、Sea Donut 沒拖太晚，才把 16:57 干潮當主秀。",
                risk: "天草不是距離問題，是回程疲勞問題；今天要避免深追天草南部，保留回熊本餘裕。"
            },
            8: {
                mission: "返台日以準時還車登機為主，銅像與動植物園都採可進可退節奏。",
                win: "拍到魯夫/喬巴其中一到兩座、吃完午餐、滿油還車、機場伴手禮完成。",
                hardCut: "回程 IT767 19:50 起飛；15:30 後進入返程優先模式，市區點不再加碼，優先加油、還車與機場。",
                priority: ["必守：退房、加油、還車、登機", "優先：魯夫、喬巴、動植物園", "視情況調整：市區購物與入園深度"],
                decision: "A 案戶外、B 案室內都可以；當天早上只看天氣與孩子精神，選一條最穩路線即可。",
                risk: "最後一天最怕『再去一下』；任何額外點都要能在短時間內撤退。"
            }
        };


        const dayGourmetDB = {
            "1": {
                        "headline": "抵達日不追正式餐廳；午餐以南阿蘇休息點、在地便當、赤牛備案為主，晚餐看抵達別府時間決定。",
                        "rules": [
                                    "第一天以取車與右駕安全為主",
                                    "午餐要快、好停車、有廁所",
                                    "抵達別府太晚就不升級大餐"
                        ],
                        "categories": [
                                    {
                                                "icon": "🍙",
                                                "title": "快吃補給／孩子防餓",
                                                "note": "最符合 Day1 節奏；不讓午餐拖垮南阿蘇與進別府。",
                                                "items": [
                                                            {
                                                                        "name": "俵山交流館 萌の里",
                                                                        "rank": "S",
                                                                        "meal": "抵達後第一補給",
                                                                        "area": "娜美像旁",
                                                                        "order": "在地便當、飯糰、牛奶、蔬果、點心",
                                                                        "note": "停車、廁所、娜美像在同一區，是第一天最穩的午餐補給點。",
                                                                        "fit": "買好分段吃，不要坐下慢慢耗時間。",
                                                                        "caution": "",
                                                                        "mapQuery": "俵山交流館 萌の里"
                                                            },
                                                            {
                                                                        "name": "ASO MILK FACTORY",
                                                                        "rank": "B",
                                                                        "meal": "冰淇淋／牛奶備案",
                                                                        "area": "阿蘇周邊",
                                                                        "order": "ASO MILK、霜淇淋、乳製品伴手禮",
                                                                        "note": "牛奶與冰淇淋接受度高，適合孩子補糖。",
                                                                        "fit": "更適合 Day5；Day1 除非很順才加。",
                                                                        "caution": "",
                                                                        "mapQuery": "ASO MILK FACTORY"
                                                            },
                                                            {
                                                                        "name": "林檎之樹",
                                                                        "rank": "B",
                                                                        "meal": "咖啡甜點備案",
                                                                        "area": "南阿蘇",
                                                                        "order": "蘋果派、咖啡、甜點",
                                                                        "note": "若孩子需要休息且時間充裕，可當下午茶。",
                                                                        "fit": "不在必要主線，時間不足直接跳過。",
                                                                        "caution": "",
                                                                        "mapQuery": "林檎之樹"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🥩",
                                                "title": "南阿蘇赤牛／鄉土主餐",
                                                "note": "取車順利且全員精神穩，才把午餐升級。",
                                                "items": [
                                                            {
                                                                        "name": "くまもと和ぎゅう まつおか",
                                                                        "rank": "A",
                                                                        "meal": "午餐備案",
                                                                        "area": "熊本機場往南阿蘇方向",
                                                                        "order": "赤牛丼、赤牛漢堡排、晚間燒肉",
                                                                        "note": "比排隊名店實用，能把熊本赤牛提前吃掉。",
                                                                        "fit": "只有取車很順時排；否則不要犧牲白川水源／高森。",
                                                                        "caution": "",
                                                                        "mapQuery": "くまもと和ぎゅう まつおか"
                                                            },
                                                            {
                                                                        "name": "白水乃藏",
                                                                        "rank": "A",
                                                                        "meal": "午餐備案",
                                                                        "area": "南阿蘇",
                                                                        "order": "赤牛漢堡排、赤牛料理、定食",
                                                                        "note": "景觀、停車、座位相對友善，比排隊赤牛丼更適合親子團。",
                                                                        "fit": "若想保留南阿蘇景點，這餐不要拖太久。",
                                                                        "caution": "",
                                                                        "mapQuery": "白水乃藏"
                                                            },
                                                            {
                                                                        "name": "高森田楽之里",
                                                                        "rank": "B",
                                                                        "meal": "文化體驗午餐",
                                                                        "area": "高森",
                                                                        "order": "田樂、炭火味噌烤、鄉土定食",
                                                                        "note": "茅草屋地爐體驗感強，適合想吃文化餐。",
                                                                        "fit": "用餐時間較長，不適合取車延誤的第一天。",
                                                                        "caution": "",
                                                                        "mapQuery": "高森田楽之里"
                                                            },
                                                            {
                                                                        "name": "あか牛の館",
                                                                        "rank": "B",
                                                                        "meal": "赤牛燒肉備案",
                                                                        "area": "南阿蘇／久木野",
                                                                        "order": "赤牛燒肉、赤牛定食",
                                                                        "note": "能明確吃到赤牛，但對第一天路線來說較吃時間。",
                                                                        "fit": "除非刪景點，否則不建議硬排。",
                                                                        "caution": "",
                                                                        "mapQuery": "あか牛の館"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🍜",
                                                "title": "抵達別府後輕晚餐",
                                                "note": "如果 19:30 後才到別府，選快速熱食。",
                                                "items": [
                                                            {
                                                                        "name": "豊後ラーメン 一刀竜 別府店",
                                                                        "rank": "B",
                                                                        "meal": "晚餐備案",
                                                                        "area": "別府",
                                                                        "order": "屋台風、白豚骨、赤豚骨、濃厚つけ麵",
                                                                        "note": "抵達晚、只想快速吃熱食時好用。",
                                                                        "fit": "地方性不如別府冷麵；今天以方便為主。",
                                                                        "caution": "",
                                                                        "mapQuery": "豊後ラーメン 一刀竜 別府店"
                                                            },
                                                            {
                                                                        "name": "麵堂 香 別府店",
                                                                        "rank": "B",
                                                                        "meal": "晚餐備案",
                                                                        "area": "別府",
                                                                        "order": "豚骨拉麵、半份拉麵、餃子",
                                                                        "note": "家庭型拉麵備案，孩子可分食。",
                                                                        "fit": "若太累，便利商店或飯店附近餐更合理。",
                                                                        "caution": "",
                                                                        "mapQuery": "麵堂 香 別府店"
                                                            },
                                                            {
                                                                        "name": "Joyfull 大分／別府路面店",
                                                                        "rank": "B",
                                                                        "meal": "保底家庭餐",
                                                                        "area": "別府／大分",
                                                                        "order": "兒童餐、漢堡排、炸物、飯類",
                                                                        "note": "第一天最不怕踩雷的家庭餐廳。",
                                                                        "fit": "不是必吃，只做救援。",
                                                                        "caution": "",
                                                                        "mapQuery": "Joyfull 大分／別府路面店"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🥩",
                                                "title": "抵達早才考慮的別府晚餐",
                                                "note": "19:00 前抵達且大家狀態好，才升級燒肉。",
                                                "items": [
                                                            {
                                                                        "name": "焼肉 元相 本店",
                                                                        "rank": "S",
                                                                        "meal": "晚餐升級",
                                                                        "area": "別府石垣東",
                                                                        "order": "上カルビ、上ロース、赤身拼盤、牛タン",
                                                                        "note": "別府燒肉第一順位，肉質與親子穩定度平衡。",
                                                                        "fit": "需要訂位；第一天延誤就不要硬排。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉 元相 本店"
                                                            },
                                                            {
                                                                        "name": "個室焼肉 亜李蘭別邸 別府店",
                                                                        "rank": "A",
                                                                        "meal": "晚餐升級",
                                                                        "area": "別府",
                                                                        "order": "黒毛和牛三種、和牛カルビ、ファミリーセット",
                                                                        "note": "包廂型燒肉，雙家庭最舒服。",
                                                                        "fit": "肉質不是最頂級，但執行成功率高。",
                                                                        "caution": "",
                                                                        "mapQuery": "個室焼肉 亜李蘭別邸 別府店"
                                                            },
                                                            {
                                                                        "name": "韓国苑 別府店",
                                                                        "rank": "A",
                                                                        "meal": "晚餐保險",
                                                                        "area": "別府",
                                                                        "order": "豐後牛標示品項、赤身、カルビ、冷麵",
                                                                        "note": "原行程內的安全牌，菜單多，小孩可吃品項多。",
                                                                        "fit": "若要肉質與地方性，元相優先。",
                                                                        "caution": "",
                                                                        "mapQuery": "韓国苑 別府店"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            },
            "2": {
                        "headline": "Harmonyland 日以孩子為主；午餐不要離園太遠，晚餐再從豐後牛、家庭燒肉、別府冷麵三選一。",
                        "rules": [
                                    "樂園日午餐要彈性",
                                    "晚餐可吃豐後牛／大分和牛",
                                    "孩子累就用商場或家庭餐"
                        ],
                        "categories": [
                                    {
                                                "icon": "🥩",
                                                "title": "豐後牛／大分和牛晚餐",
                                                "note": "回別府後最適合吃一餐肉。",
                                                "items": [
                                                            {
                                                                        "name": "豊後牛ステーキの店 そむり 別府本店",
                                                                        "rank": "S",
                                                                        "meal": "晚餐主菜",
                                                                        "area": "別府北浜",
                                                                        "order": "豊後牛サーロイン、豊後牛ヒレ、漢堡排",
                                                                        "note": "若只吃一餐高級豐後牛排，這家最有記憶點。",
                                                                        "fit": "兩家庭 8 人請先訂位；孩子太累改燒肉或家庭餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "豊後牛ステーキの店 そむり 別府本店"
                                                            },
                                                            {
                                                                        "name": "焼肉 元相 本店",
                                                                        "rank": "S",
                                                                        "meal": "晚餐主菜",
                                                                        "area": "別府石垣東",
                                                                        "order": "上カルビ、上ロース、赤身拼盤、牛タン、冷麵",
                                                                        "note": "親子團吃豐後牛／和牛的最佳平衡點。",
                                                                        "fit": "熱門時段建議訂位。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉 元相 本店"
                                                            },
                                                            {
                                                                        "name": "個室焼肉 亜李蘭別邸 別府店",
                                                                        "rank": "A",
                                                                        "meal": "包廂燒肉",
                                                                        "area": "別府",
                                                                        "order": "黒毛和牛三種、和牛カルビ、ファミリーセット",
                                                                        "note": "包廂與座位配置對雙家庭最穩。",
                                                                        "fit": "肉質不是最高級，但舒適度高。",
                                                                        "caution": "",
                                                                        "mapQuery": "個室焼肉 亜李蘭別邸 別府店"
                                                            },
                                                            {
                                                                        "name": "韓国苑 別府店",
                                                                        "rank": "A",
                                                                        "meal": "家庭燒肉保險",
                                                                        "area": "別府",
                                                                        "order": "豐後牛標示品項、カルビ、ハラミ、石鍋拌飯",
                                                                        "note": "菜單多、孩子可吃附餐多，適合樂園日收尾。",
                                                                        "fit": "若要地方性與肉質，元相優先。",
                                                                        "caution": "",
                                                                        "mapQuery": "韓国苑 別府店"
                                                            },
                                                            {
                                                                        "name": "焼肉 一力",
                                                                        "rank": "B",
                                                                        "meal": "在地老店燒肉",
                                                                        "area": "別府站東口附近",
                                                                        "order": "豐後牛、カルビ、ロース",
                                                                        "note": "大人想吃在地老派燒肉可考慮。",
                                                                        "fit": "親子舒適度不如元相與亜李蘭。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉 一力"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🍜",
                                                "title": "別府冷麵／拉麵",
                                                "note": "不想吃大餐時，別府冷麵比一般豚骨拉麵更有地方性。",
                                                "items": [
                                                            {
                                                                        "name": "六盛 松原本店",
                                                                        "rank": "S",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "別府松原",
                                                                        "order": "別府冷麵、溫麵、叉燒麵、飯糰",
                                                                        "note": "別府麵食第一順位，6 月天氣熱很適合。",
                                                                        "fit": "湯賣完可能提早結束；麵含蕎麥粉。",
                                                                        "caution": "",
                                                                        "mapQuery": "六盛 松原本店"
                                                            },
                                                            {
                                                                        "name": "胡月",
                                                                        "rank": "A",
                                                                        "meal": "白天麵食",
                                                                        "area": "別府",
                                                                        "order": "冷麵、溫麵、叉燒冷麵",
                                                                        "note": "別府冷麵老名店，六盛排隊時的好備案。",
                                                                        "fit": "晚餐時間不穩，白天吃較安全。",
                                                                        "caution": "",
                                                                        "mapQuery": "胡月"
                                                            },
                                                            {
                                                                        "name": "大砲拉麵 別府海岸線店",
                                                                        "rank": "B",
                                                                        "meal": "晚餐備案",
                                                                        "area": "別府海岸線",
                                                                        "order": "久留米豚骨、兒童拉麵、餃子",
                                                                        "note": "想吃濃厚豚骨時可用，親子座位較穩。",
                                                                        "fit": "不是大分在地第一特色。",
                                                                        "caution": "",
                                                                        "mapQuery": "大砲拉麵 別府海岸線店"
                                                            },
                                                            {
                                                                        "name": "麵堂 香 別府店",
                                                                        "rank": "B",
                                                                        "meal": "晚餐備案",
                                                                        "area": "別府",
                                                                        "order": "豚骨拉麵、半份拉麵、餃子",
                                                                        "note": "自駕家庭備案，翻桌快。",
                                                                        "fit": "若只能吃一種別府麵食，優先冷麵。",
                                                                        "caution": "",
                                                                        "mapQuery": "麵堂 香 別府店"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🍤",
                                                "title": "熟食／海鮮輕主餐",
                                                "note": "樂園日不一定吃海鮮，但可用這些取代重餐。",
                                                "items": [
                                                            {
                                                                        "name": "東洋軒",
                                                                        "rank": "A",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "別府",
                                                                        "order": "とり天、定食、飯類",
                                                                        "note": "大分雞天代表店，孩子接受度高。",
                                                                        "fit": "人氣店可能排隊。",
                                                                        "caution": "",
                                                                        "mapQuery": "東洋軒"
                                                            },
                                                            {
                                                                        "name": "とよ常",
                                                                        "rank": "A",
                                                                        "meal": "晚餐備案",
                                                                        "area": "別府站前／北浜",
                                                                        "order": "特上天丼、りゅうきゅう丼、刺身定食",
                                                                        "note": "大蝦天丼視覺強，りゅうきゅう丼有地方性。",
                                                                        "fit": "若要生魚片為主，Day3 海鮮いづつ更適合。",
                                                                        "caution": "",
                                                                        "mapQuery": "とよ常"
                                                            },
                                                            {
                                                                        "name": "海鮮居酒屋 水天",
                                                                        "rank": "B",
                                                                        "meal": "晚餐備案",
                                                                        "area": "別府／大分",
                                                                        "order": "壽司、海鮮丼、定食",
                                                                        "note": "環境比在地老店穩，適合親子海鮮備案。",
                                                                        "fit": "不是必吃名店，屬安全牌。",
                                                                        "caution": "",
                                                                        "mapQuery": "海鮮居酒屋 水天"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🧃",
                                                "title": "商場／家庭餐保底",
                                                "note": "孩子玩到累時，這類比名店更實際。",
                                                "items": [
                                                            {
                                                                        "name": "Youme Town 別府美食區／超市",
                                                                        "rank": "B",
                                                                        "meal": "晚餐／補給",
                                                                        "area": "別府灣旁",
                                                                        "order": "熟食、便當、甜點、飲料",
                                                                        "note": "停車、廁所、採買一次完成。",
                                                                        "fit": "美食記憶點低，但執行力高。",
                                                                        "caution": "",
                                                                        "mapQuery": "Youme Town 別府美食區／超市"
                                                            },
                                                            {
                                                                        "name": "甘味茶屋",
                                                                        "rank": "B",
                                                                        "meal": "日式定食備案",
                                                                        "area": "別府",
                                                                        "order": "團子汁、日式定食、甜點",
                                                                        "note": "榻榻米與庭園氣氛適合親子慢吃。",
                                                                        "fit": "動線不一定比商場順，需看當天位置。",
                                                                        "caution": "",
                                                                        "mapQuery": "甘味茶屋"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            },
            "3": {
                        "headline": "別府地獄＋海之卵是大分海鮮日；午餐可吃地獄蒸或冷麵，晚餐主攻壽司、刺身、りゅうきゅう丼。",
                        "rules": [
                                    "不要讓壽司排隊壓到海之卵展演",
                                    "関あじ有貨再點",
                                    "関さば 6 月不硬追"
                        ],
                        "categories": [
                                    {
                                                "icon": "🐟",
                                                "title": "海鮮／壽司／大分鄉土魚料理",
                                                "note": "這天是整個大分段最適合吃海鮮的一天。",
                                                "items": [
                                                            {
                                                                        "name": "地獄蒸工房 鐵輪",
                                                                        "rank": "S",
                                                                        "meal": "午餐體驗",
                                                                        "area": "別府鐵輪",
                                                                        "order": "蒸蝦、貝類、蟹爪、魚、蔬菜、玉米、蛋",
                                                                        "note": "親子體驗感最高，用溫泉蒸氣料理，孩子有記憶點。",
                                                                        "fit": "不是頂級海鮮；尖峰可能排隊。",
                                                                        "caution": "",
                                                                        "mapQuery": "地獄蒸工房 鐵輪"
                                                            },
                                                            {
                                                                        "name": "海鮮いづつ",
                                                                        "rank": "S",
                                                                        "meal": "晚餐海鮮",
                                                                        "area": "別府市區",
                                                                        "order": "海鮮丼、刺身定食、関あじ、関さば、河豚有貨再看",
                                                                        "note": "想吃生魚片與關鰺關鯖，這家比天丼店更貼近需求。",
                                                                        "fit": "関さば 6 月非主旬；當日魚況比菜單重要。",
                                                                        "caution": "",
                                                                        "mapQuery": "海鮮いづつ"
                                                            },
                                                            {
                                                                        "name": "亀正くるくる寿司",
                                                                        "rank": "A",
                                                                        "meal": "晚餐壽司",
                                                                        "area": "別府",
                                                                        "order": "當日地魚、白身魚、炙魚、貝類、厚切壽司",
                                                                        "note": "CP 值與人氣很高，適合大人想吃壽司。",
                                                                        "fit": "排隊不可控，不建議排在海之卵前。",
                                                                        "caution": "",
                                                                        "mapQuery": "亀正くるくる寿司"
                                                            },
                                                            {
                                                                        "name": "とよ常",
                                                                        "rank": "A",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "別府站前／北浜",
                                                                        "order": "特上天丼、りゅうきゅう丼、刺身定食",
                                                                        "note": "大蝦天丼視覺強，りゅうきゅう丼有大分地方性。",
                                                                        "fit": "若要生魚片為主，海鮮いづつ優先。",
                                                                        "caution": "",
                                                                        "mapQuery": "とよ常"
                                                            },
                                                            {
                                                                        "name": "りゅうきゅう丼",
                                                                        "rank": "A",
                                                                        "meal": "必吃料理",
                                                                        "area": "別府／大分各海鮮店",
                                                                        "order": "醬油芝麻醃漬旬魚丼，可做茶泡飯",
                                                                        "note": "大分代表鄉土海鮮，通常比高價刺身盤親民。",
                                                                        "fit": "魚種依店家當日供應。",
                                                                        "caution": "",
                                                                        "mapQuery": "りゅうきゅう丼"
                                                            },
                                                            {
                                                                        "name": "関あじ／関さば",
                                                                        "rank": "B",
                                                                        "meal": "當日加點",
                                                                        "area": "別府／大分海鮮店",
                                                                        "order": "関あじ刺身、関さば刺身",
                                                                        "note": "関あじ接近旬期可問；関さば 6 月不是最優先。",
                                                                        "fit": "價格高時不要硬點，改吃當日地魚。",
                                                                        "caution": "",
                                                                        "mapQuery": "関あじ／関さば"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🍜",
                                                "title": "別府冷麵／拉麵",
                                                "note": "地獄區或水族館前後想吃快一點，麵食最穩。",
                                                "items": [
                                                            {
                                                                        "name": "六盛 松原本店",
                                                                        "rank": "S",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "別府松原",
                                                                        "order": "別府冷麵、溫麵、叉燒麵、飯糰",
                                                                        "note": "別府在地麵食第一順位，清爽不膩。",
                                                                        "fit": "麵含蕎麥粉；晚餐湯賣完可能提早收。",
                                                                        "caution": "",
                                                                        "mapQuery": "六盛 松原本店"
                                                            },
                                                            {
                                                                        "name": "胡月",
                                                                        "rank": "A",
                                                                        "meal": "午餐",
                                                                        "area": "別府",
                                                                        "order": "冷麵、溫麵、叉燒冷麵",
                                                                        "note": "冷麵老名店，白天順路時可用。",
                                                                        "fit": "晚餐時段不穩，別當壓軸餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "胡月"
                                                            },
                                                            {
                                                                        "name": "豊後ラーメン 一刀竜 別府店",
                                                                        "rank": "B",
                                                                        "meal": "晚餐備案",
                                                                        "area": "別府",
                                                                        "order": "屋台風、白豚骨、赤豚骨、つけ麵",
                                                                        "note": "壽司、海鮮都排不到時，快速熱食救援。",
                                                                        "fit": "地方性不如冷麵。",
                                                                        "caution": "",
                                                                        "mapQuery": "豊後ラーメン 一刀竜 別府店"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🥩",
                                                "title": "海鮮日的牛肉備案",
                                                "note": "如果當晚不吃海鮮，改吃豐後牛也合理。",
                                                "items": [
                                                            {
                                                                        "name": "焼肉 元相 本店",
                                                                        "rank": "S",
                                                                        "meal": "晚餐主菜",
                                                                        "area": "別府石垣東",
                                                                        "order": "上カルビ、上ロース、赤身拼盤、牛タン",
                                                                        "note": "別府燒肉第一順位，適合海鮮改吃肉。",
                                                                        "fit": "請訂位。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉 元相 本店"
                                                            },
                                                            {
                                                                        "name": "豊後牛ステーキの店 そむり 別府本店",
                                                                        "rank": "S",
                                                                        "meal": "晚餐犒賞",
                                                                        "area": "別府北浜",
                                                                        "order": "豊後牛サーロイン、ヒレ",
                                                                        "note": "大人想吃高級牛排時最強。",
                                                                        "fit": "週三晚餐休；Day3 是週日可排，但仍需訂位。",
                                                                        "caution": "",
                                                                        "mapQuery": "豊後牛ステーキの店 そむり 別府本店"
                                                            },
                                                            {
                                                                        "name": "個室焼肉 亜李蘭別邸 別府店",
                                                                        "rank": "A",
                                                                        "meal": "包廂燒肉",
                                                                        "area": "別府",
                                                                        "order": "黒毛和牛三種、ファミリーセット",
                                                                        "note": "雙家庭孩子狀態不穩時的舒服選擇。",
                                                                        "fit": "肉質不是最頂，但穩。",
                                                                        "caution": "",
                                                                        "mapQuery": "個室焼肉 亜李蘭別邸 別府店"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🍮",
                                                "title": "地獄區小吃甜點",
                                                "note": "不當正餐，用來安撫孩子與補糖分。",
                                                "items": [
                                                            {
                                                                        "name": "岡本屋売店",
                                                                        "rank": "A",
                                                                        "meal": "點心／輕食",
                                                                        "area": "明礬溫泉",
                                                                        "order": "地獄蒸布丁、雞蛋三明治、溫泉烏龍麵",
                                                                        "note": "地獄區最適合的甜點與輕食點。",
                                                                        "fit": "停車尖峰可能滿；不要買太多影響晚餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "岡本屋売店"
                                                            },
                                                            {
                                                                        "name": "東洋軒",
                                                                        "rank": "A",
                                                                        "meal": "熟食定食",
                                                                        "area": "別府",
                                                                        "order": "とり天、定食",
                                                                        "note": "孩子不吃生食時，雞天很穩。",
                                                                        "fit": "熱門時段可能排隊。",
                                                                        "caution": "",
                                                                        "mapQuery": "東洋軒"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            },
            "4": {
                        "headline": "Safari＋由布院日，午餐以由布院散步小吃或豐後牛土鍋飯為主；晚餐回別府吃燒肉最順。",
                        "rules": [
                                    "由布院排隊過長就改小吃分食",
                                    "Day4 週一不要排そむり",
                                    "晚餐看孩子疲勞程度"
                        ],
                        "categories": [
                                    {
                                                "icon": "🍲",
                                                "title": "由布院主餐",
                                                "note": "如果想在由布院坐下來吃，優先這些；否則改邊走邊吃。",
                                                "items": [
                                                            {
                                                                        "name": "由布まぶし 心",
                                                                        "rank": "A",
                                                                        "meal": "午餐主菜",
                                                                        "area": "由布院",
                                                                        "order": "豐後牛まぶし、地雞まぶし、鰻まぶし",
                                                                        "note": "由布院段最有地方性的主餐，一鍋三吃很有記憶點。",
                                                                        "fit": "等待時間會壓縮湯之坪街道與金鱗湖。",
                                                                        "caution": "",
                                                                        "mapQuery": "由布まぶし 心"
                                                            },
                                                            {
                                                                        "name": "Yufuin Burger House",
                                                                        "rank": "B",
                                                                        "meal": "午餐備案",
                                                                        "area": "由布院",
                                                                        "order": "手工漢堡、薯條、飲料",
                                                                        "note": "吃膩日式料理時好用，孩子接受度高。",
                                                                        "fit": "不是地方美食第一順位。",
                                                                        "caution": "",
                                                                        "mapQuery": "Yufuin Burger House"
                                                            },
                                                            {
                                                                        "name": "Cafe La Ruche",
                                                                        "rank": "B",
                                                                        "meal": "景觀咖啡／輕食",
                                                                        "area": "金鱗湖畔",
                                                                        "order": "可頌、咖啡、甜點、輕食",
                                                                        "note": "金鱗湖氣氛好，適合休息。",
                                                                        "fit": "若等位久就放棄。",
                                                                        "caution": "",
                                                                        "mapQuery": "Cafe La Ruche"
                                                            },
                                                            {
                                                                        "name": "Snoopy Cha-ya 由布院",
                                                                        "rank": "B",
                                                                        "meal": "主題餐／甜點",
                                                                        "area": "湯之坪街道",
                                                                        "order": "造型餐、抹茶甜點、飲料",
                                                                        "note": "孩子友善、拍照好用。",
                                                                        "fit": "餐點記憶點不如主題感。",
                                                                        "caution": "",
                                                                        "mapQuery": "Snoopy Cha-ya 由布院"
                                                            },
                                                            {
                                                                        "name": "Miffy 森之廚房",
                                                                        "rank": "B",
                                                                        "meal": "主題麵包／點心",
                                                                        "area": "湯之坪街道",
                                                                        "order": "Miffy 造型麵包、烘焙點心",
                                                                        "note": "適合買車上防餓點心。",
                                                                        "fit": "不是正餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "Miffy 森之廚房"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🍡",
                                                "title": "由布院小吃甜點",
                                                "note": "這天最實用的吃法：分散小吃，不把時間壓在單一餐廳。",
                                                "items": [
                                                            {
                                                                        "name": "金賞コロッケ",
                                                                        "rank": "A",
                                                                        "meal": "邊走邊吃",
                                                                        "area": "湯之坪街道",
                                                                        "order": "牛肉可樂餅、起司可樂餅",
                                                                        "note": "現炸、快、孩子接受度高。",
                                                                        "fit": "小心燙口，不要買太多影響晚餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "金賞コロッケ"
                                                            },
                                                            {
                                                                        "name": "B-speak",
                                                                        "rank": "B",
                                                                        "meal": "甜點／伴手禮",
                                                                        "area": "由布院",
                                                                        "order": "Pロール、切片瑞士捲",
                                                                        "note": "由布院知名甜點，可當飯店宵夜。",
                                                                        "fit": "熱門口味售完快，不要為排隊拖行程。",
                                                                        "caution": "",
                                                                        "mapQuery": "B-speak"
                                                            },
                                                            {
                                                                        "name": "Milch",
                                                                        "rank": "B",
                                                                        "meal": "甜點",
                                                                        "area": "由布院",
                                                                        "order": "半熟起司蛋糕、布丁、冰淇淋",
                                                                        "note": "小份好分食，適合孩子。",
                                                                        "fit": "現場選冷／熱版本。",
                                                                        "caution": "",
                                                                        "mapQuery": "Milch"
                                                            },
                                                            {
                                                                        "name": "鞠智 cucuchi",
                                                                        "rank": "B",
                                                                        "meal": "和菓子／休息",
                                                                        "area": "由布院",
                                                                        "order": "銅鑼燒、和菓子、果醬、茶點",
                                                                        "note": "有質感，適合買伴手禮或短休。",
                                                                        "fit": "不必特地排隊。",
                                                                        "caution": "",
                                                                        "mapQuery": "鞠智 cucuchi"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🥩",
                                                "title": "回別府晚餐燒肉",
                                                "note": "Safari 日體力消耗大，晚餐用燒肉當收尾最合理。",
                                                "items": [
                                                            {
                                                                        "name": "焼肉 元相 本店",
                                                                        "rank": "S",
                                                                        "meal": "晚餐主菜",
                                                                        "area": "別府石垣東",
                                                                        "order": "上カルビ、上ロース、赤身拼盤、牛タン、冷麵",
                                                                        "note": "這天若只想吃一餐肉，元相是第一選擇。",
                                                                        "fit": "請訂位；孩子累時不要硬等。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉 元相 本店"
                                                            },
                                                            {
                                                                        "name": "個室焼肉 亜李蘭別邸 別府店",
                                                                        "rank": "A",
                                                                        "meal": "包廂燒肉",
                                                                        "area": "別府",
                                                                        "order": "黒毛和牛三種、和牛カルビ、ファミリーセット",
                                                                        "note": "孩子累、想坐舒服一點時比名店更好。",
                                                                        "fit": "肉質不是最高級，但親子穩。",
                                                                        "caution": "",
                                                                        "mapQuery": "個室焼肉 亜李蘭別邸 別府店"
                                                            },
                                                            {
                                                                        "name": "韓国苑 別府店",
                                                                        "rank": "A",
                                                                        "meal": "家庭燒肉保險",
                                                                        "area": "別府",
                                                                        "order": "豐後牛標示品項、赤身、カルビ、冷麵、石鍋拌飯",
                                                                        "note": "原行程已列的晚餐保險，菜單多。",
                                                                        "fit": "若想吃頂級感，元相或そむり在其他日更好。",
                                                                        "caution": "",
                                                                        "mapQuery": "韓国苑 別府店"
                                                            },
                                                            {
                                                                        "name": "焼肉 一力",
                                                                        "rank": "B",
                                                                        "meal": "老派燒肉備案",
                                                                        "area": "別府站東口",
                                                                        "order": "豐後牛、カルビ、ロース",
                                                                        "note": "大人向在地燒肉。",
                                                                        "fit": "親子舒適度較低。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉 一力"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "⚠️",
                                                "title": "今天不建議硬追",
                                                "note": "把時間留給 Safari 與由布院，不要把餐廳變壓力源。",
                                                "items": [
                                                            {
                                                                        "name": "豊後牛ステーキの店 そむり 別府本店",
                                                                        "rank": "C",
                                                                        "meal": "不排 Day4",
                                                                        "area": "別府北浜",
                                                                        "order": "改 Day2／Day3",
                                                                        "note": "Day4 是週一，先前規劃已判斷不適合排。",
                                                                        "fit": "想吃そむり請放 Day2 或 Day3。",
                                                                        "caution": "週一不排。",
                                                                        "mapQuery": "豊後牛ステーキの店 そむり 別府本店"
                                                            },
                                                            {
                                                                        "name": "龜正くるくる寿司",
                                                                        "rank": "C",
                                                                        "meal": "不排 Day4",
                                                                        "area": "別府",
                                                                        "order": "改 Day3 晚餐",
                                                                        "note": "排隊不可控，會把 Safari＋由布院日搞得太緊。",
                                                                        "fit": "想吃壽司放 Day3。",
                                                                        "caution": "",
                                                                        "mapQuery": "龜正くるくる寿司"
                                                            },
                                                            {
                                                                        "name": "遠征阿蘇／熊本餐廳",
                                                                        "rank": "C",
                                                                        "meal": "不排",
                                                                        "area": "不順路",
                                                                        "order": "無",
                                                                        "note": "今天是別府↔由布院，不要額外跨區找餐廳。",
                                                                        "fit": "避免夜間長距離移動。",
                                                                        "caution": "",
                                                                        "mapQuery": "由布院 遠征 餐廳"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            },
            "5": {
                        "headline": "移動日從別府橫斷阿蘇進熊本；午餐用阿蘇赤牛／道之驛，晚餐進熊本後再補拉麵或太平燕。",
                        "rules": [
                                    "不要為いまきん排隊拖垮草千里",
                                    "午餐吃得到赤牛就好",
                                    "晚餐在熊本新市街周邊收尾"
                        ],
                        "categories": [
                                    {
                                                "icon": "🥩",
                                                "title": "阿蘇赤牛午餐候選",
                                                "note": "這天最值得吃的是赤牛，但移動時間放第一。",
                                                "items": [
                                                            {
                                                                        "name": "道の駅 阿蘇",
                                                                        "rank": "S",
                                                                        "meal": "移動日保底午餐",
                                                                        "area": "阿蘇站旁",
                                                                        "order": "赤牛便當、高菜飯、牛奶、優格、在地便當",
                                                                        "note": "停車、廁所、採買、午餐一次解決，是移動日最穩。",
                                                                        "fit": "不是名店，但成功率最高。",
                                                                        "caution": "",
                                                                        "mapQuery": "道の駅 阿蘇"
                                                            },
                                                            {
                                                                        "name": "いまきん食堂",
                                                                        "rank": "A",
                                                                        "meal": "午餐名店備案",
                                                                        "area": "阿蘇內牧",
                                                                        "order": "あか牛丼、半熟蛋、味噌汁",
                                                                        "note": "赤牛丼名店，品質與名氣都高。",
                                                                        "fit": "平日也可能排隊；10:30 前接近內牧才考慮。",
                                                                        "caution": "",
                                                                        "mapQuery": "いまきん食堂"
                                                            },
                                                            {
                                                                        "name": "あか牛の館",
                                                                        "rank": "B",
                                                                        "meal": "赤牛燒肉午餐",
                                                                        "area": "南阿蘇／久木野",
                                                                        "order": "赤牛燒肉、赤牛定食",
                                                                        "note": "能明確吃到赤牛，但可能偏離 Day5 主線。",
                                                                        "fit": "只有行程改走南阿蘇時排。",
                                                                        "caution": "",
                                                                        "mapQuery": "あか牛の館"
                                                            },
                                                            {
                                                                        "name": "くまもと和ぎゅう まつおか",
                                                                        "rank": "B",
                                                                        "meal": "赤牛午餐備案",
                                                                        "area": "阿蘇／南阿蘇方向",
                                                                        "order": "赤牛丼、赤牛漢堡排、燒肉",
                                                                        "note": "一頭買赤牛，午餐選擇較有彈性。",
                                                                        "fit": "確認當天動線是否順路。",
                                                                        "caution": "",
                                                                        "mapQuery": "くまもと和ぎゅう まつおか"
                                                            },
                                                            {
                                                                        "name": "阿蘇神社門前町小吃",
                                                                        "rank": "A",
                                                                        "meal": "午餐／點心",
                                                                        "area": "阿蘇神社周邊",
                                                                        "order": "赤牛串、馬肉可樂餅、高菜飯、甜點",
                                                                        "note": "若加入阿蘇神社，門前町可用小吃解決午餐。",
                                                                        "fit": "不要邊排小吃邊拖到草千里。",
                                                                        "caution": "",
                                                                        "mapQuery": "阿蘇神社門前町小吃"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🍦",
                                                "title": "阿蘇點心／咖啡補給",
                                                "note": "用來銜接草千里、長途開車與孩子疲勞。",
                                                "items": [
                                                            {
                                                                        "name": "ASO MILK FACTORY",
                                                                        "rank": "A",
                                                                        "meal": "冰淇淋／補給",
                                                                        "area": "阿蘇",
                                                                        "order": "ASO MILK、玫瑰霜淇淋、乳製品伴手禮",
                                                                        "note": "孩子接受度高，停車與空間較舒服。",
                                                                        "fit": "若草千里時間緊，直接跳過。",
                                                                        "caution": "",
                                                                        "mapQuery": "ASO MILK FACTORY"
                                                            },
                                                            {
                                                                        "name": "草千里 Douce Nuage",
                                                                        "rank": "B",
                                                                        "meal": "下午茶",
                                                                        "area": "草千里旁",
                                                                        "order": "咖啡、蛋糕、甜點",
                                                                        "note": "草原景觀配咖啡，適合短休。",
                                                                        "fit": "先看天氣與停車；不是必吃。",
                                                                        "caution": "",
                                                                        "mapQuery": "草千里 Douce Nuage"
                                                            },
                                                            {
                                                                        "name": "林檎之樹",
                                                                        "rank": "B",
                                                                        "meal": "咖啡甜點",
                                                                        "area": "南阿蘇",
                                                                        "order": "蘋果派、咖啡、甜點",
                                                                        "note": "如果改走南阿蘇，當下午茶很合適。",
                                                                        "fit": "Day5 主線不一定順。",
                                                                        "caution": "",
                                                                        "mapQuery": "林檎之樹"
                                                            },
                                                            {
                                                                        "name": "岡本豆腐店",
                                                                        "rank": "B",
                                                                        "meal": "小國繞路定食",
                                                                        "area": "小國町",
                                                                        "order": "豆腐定食、炸豆皮",
                                                                        "note": "清淡、長輩小孩都能吃。",
                                                                        "fit": "偏離主線，除非行程改走小國。",
                                                                        "caution": "",
                                                                        "mapQuery": "岡本豆腐店"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🍜",
                                                "title": "熊本進城晚餐：拉麵／太平燕",
                                                "note": "抵達熊本後不要再遠開；下通、新市街、熊本站周邊解決。",
                                                "items": [
                                                            {
                                                                        "name": "黑亭 下通店",
                                                                        "rank": "S",
                                                                        "meal": "熊本晚餐",
                                                                        "area": "下通／新市街周邊",
                                                                        "order": "熊本拉麵、玉子入り、叉燒麵",
                                                                        "note": "住熊本新市街最順的熊本拉麵第一順位。",
                                                                        "fit": "蒜油香明顯；孩子可分食白飯與麵。",
                                                                        "caution": "",
                                                                        "mapQuery": "黑亭 下通店"
                                                            },
                                                            {
                                                                        "name": "桂花拉麵 本店",
                                                                        "rank": "A",
                                                                        "meal": "熊本晚餐／宵夜",
                                                                        "area": "花畑町",
                                                                        "order": "太肉麵、桂花拉麵、餃子",
                                                                        "note": "熊本老牌拉麵，太肉是厚切角煮型配料。",
                                                                        "fit": "比黑亭更老派，看大家口味選。",
                                                                        "caution": "",
                                                                        "mapQuery": "桂花拉麵 本店"
                                                            },
                                                            {
                                                                        "name": "紅蘭亭 下通本店",
                                                                        "rank": "A",
                                                                        "meal": "晚餐換口味",
                                                                        "area": "下通",
                                                                        "order": "太平燕、皿うどん、炒飯、中華小菜",
                                                                        "note": "太平燕是熊本代表麵食，清爽，孩子較容易接受。",
                                                                        "fit": "最後點餐較早，先查營業。",
                                                                        "caution": "",
                                                                        "mapQuery": "紅蘭亭 下通本店"
                                                            },
                                                            {
                                                                        "name": "こむらさき 上通中央店",
                                                                        "rank": "B",
                                                                        "meal": "熊本拉麵備案",
                                                                        "area": "上通",
                                                                        "order": "熊本拉麵、叉燒麵、餃子",
                                                                        "note": "口味相對溫和，親子較穩。",
                                                                        "fit": "若住新市街，黑亭與桂花更近。",
                                                                        "caution": "",
                                                                        "mapQuery": "こむらさき 上通中央店"
                                                            },
                                                            {
                                                                        "name": "天外天 熊本站店",
                                                                        "rank": "B",
                                                                        "meal": "熊本站備案",
                                                                        "area": "熊本站",
                                                                        "order": "拉麵、海苔、叉燒飯",
                                                                        "note": "若當晚剛好去熊本站／AMU，最方便。",
                                                                        "fit": "座位少，不適合 8 人久坐。",
                                                                        "caution": "",
                                                                        "mapQuery": "天外天 熊本站店"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🐟",
                                                "title": "熊本市區海鮮補救",
                                                "note": "午餐沒吃好，晚餐也能改成壽司，但這天不必強求。",
                                                "items": [
                                                            {
                                                                        "name": "天草 HERO鮨 牛深丸 熊本站店",
                                                                        "rank": "B",
                                                                        "meal": "晚餐／補救",
                                                                        "area": "熊本站",
                                                                        "order": "天草地魚握壽司、車海老、真鯛、海鮮丼",
                                                                        "note": "沒吃到海鮮時可在熊本站補。",
                                                                        "fit": "若不去熊本站，不必特地繞。",
                                                                        "caution": "",
                                                                        "mapQuery": "天草 HERO鮨 牛深丸 熊本站店"
                                                            },
                                                            {
                                                                        "name": "活魚回転寿し 水天 熊本周邊店",
                                                                        "rank": "B",
                                                                        "meal": "自駕壽司備案",
                                                                        "area": "熊本市／菊陽",
                                                                        "order": "壽司、海鮮丼、定食、茶碗蒸",
                                                                        "note": "需要停車、座位、孩子附餐時比市中心名店穩。",
                                                                        "fit": "不是 Day5 主線必吃。",
                                                                        "caution": "",
                                                                        "mapQuery": "活魚回転寿し 水天 熊本周邊店"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            },
            "6": {
                        "headline": "熊本修復日，午餐可用熊本東區／光之森沿線，晚餐回新市街吃赤牛、燒肉、拉麵或太平燕。",
                        "rules": [
                                    "修復日餐廳可稍微升級",
                                    "避開不可帶小孩的店",
                                    "晚餐以飯店步行／短程移動為優先"
                        ],
                        "categories": [
                                    {
                                                "icon": "🥩",
                                                "title": "赤牛／和牛／燒肉",
                                                "note": "熊本市區肉類最適合放 Day6 或 Day7 晚餐。",
                                                "items": [
                                                            {
                                                                        "name": "あか牛Dining yoka-yoka サクラマチ店",
                                                                        "rank": "S",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "SAKURA MACHI",
                                                                        "order": "あか牛丼、赤牛牛排、赤牛漢堡排",
                                                                        "note": "地點最順、不用自己烤，最適合熊本市區親子赤牛餐。",
                                                                        "fit": "想吃油花型和牛則改 LIEBE。",
                                                                        "caution": "",
                                                                        "mapQuery": "あか牛Dining yoka-yoka サクラマチ店"
                                                            },
                                                            {
                                                                        "name": "和牛焼肉 LIEBE AMU Plaza 熊本店",
                                                                        "rank": "A",
                                                                        "meal": "晚餐燒肉",
                                                                        "area": "熊本站／AMU Plaza",
                                                                        "order": "A4/A5 黒毛和牛盛合、焼きすき、牛タン",
                                                                        "note": "想吃霜降黑毛和牛，這家比赤牛丼更符合。",
                                                                        "fit": "若不去熊本站，從新市街過去要多一段移動。",
                                                                        "caution": "",
                                                                        "mapQuery": "和牛焼肉 LIEBE AMU Plaza 熊本店"
                                                            },
                                                            {
                                                                        "name": "焼肉すどう 熊本本店",
                                                                        "rank": "B",
                                                                        "meal": "高級燒肉",
                                                                        "area": "上通／通町筋",
                                                                        "order": "店員代烤精緻燒肉、套餐",
                                                                        "note": "大人想犒賞自己時可選，服務與肉質高一階。",
                                                                        "fit": "預算高、節奏慢；孩子累時不建議。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉すどう 熊本本店"
                                                            },
                                                            {
                                                                        "name": "焼肉 孫三郎",
                                                                        "rank": "B",
                                                                        "meal": "九州和牛燒肉",
                                                                        "area": "熊本市區",
                                                                        "order": "黑毛和牛、燒肉套餐",
                                                                        "note": "九州和牛燒肉備案，適合大人想吃肉。",
                                                                        "fit": "店型與分店需查；有孩子先確認座位。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉 孫三郎"
                                                            },
                                                            {
                                                                        "name": "彩炉 燒肉",
                                                                        "rank": "B",
                                                                        "meal": "家庭燒肉",
                                                                        "area": "熊本市周邊",
                                                                        "order": "九州產和牛、家庭套餐、兒童附餐",
                                                                        "note": "在地連鎖、家庭友善、停車較穩。",
                                                                        "fit": "不是最高級，但穩。",
                                                                        "caution": "",
                                                                        "mapQuery": "彩炉 燒肉"
                                                            },
                                                            {
                                                                        "name": "焼肉きんぐ",
                                                                        "rank": "B",
                                                                        "meal": "吃到飽救援",
                                                                        "area": "熊本周邊",
                                                                        "order": "燒肉吃到飽、甜點、炸物",
                                                                        "note": "小學生半價、幼兒友善，孩子崩潰時很實際。",
                                                                        "fit": "不是地方性美食，純救援。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉きんぐ"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🍜",
                                                "title": "熊本拉麵／太平燕",
                                                "note": "晚上從新市街、下通、上通挑一間即可。",
                                                "items": [
                                                            {
                                                                        "name": "黑亭 下通店",
                                                                        "rank": "S",
                                                                        "meal": "晚餐／宵夜",
                                                                        "area": "下通",
                                                                        "order": "熊本拉麵、玉子入り、叉燒麵",
                                                                        "note": "熊本拉麵第一順位，離住宿區很順。",
                                                                        "fit": "焦蒜油香明顯。",
                                                                        "caution": "",
                                                                        "mapQuery": "黑亭 下通店"
                                                            },
                                                            {
                                                                        "name": "桂花拉麵 本店",
                                                                        "rank": "A",
                                                                        "meal": "晚餐／宵夜",
                                                                        "area": "花畑町",
                                                                        "order": "太肉麵、桂花拉麵、餃子",
                                                                        "note": "老牌熊本拉麵，太肉配料有代表性。",
                                                                        "fit": "口味較重，孩子可分食。",
                                                                        "caution": "",
                                                                        "mapQuery": "桂花拉麵 本店"
                                                            },
                                                            {
                                                                        "name": "こむらさき 上通中央店",
                                                                        "rank": "A",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "上通",
                                                                        "order": "熊本拉麵、叉燒麵、餃子",
                                                                        "note": "相對溫和，親子穩。",
                                                                        "fit": "營業分午晚段，先查。",
                                                                        "caution": "",
                                                                        "mapQuery": "こむらさき 上通中央店"
                                                            },
                                                            {
                                                                        "name": "火之國文龍 總本店",
                                                                        "rank": "A",
                                                                        "meal": "東區順路午餐／晚餐",
                                                                        "area": "熊本東區",
                                                                        "order": "こってり豚骨、文龍ラーメン黒、辛子高菜",
                                                                        "note": "濃厚派必吃；若去光之森或東區順路可排。",
                                                                        "fit": "重口味、大人向；不建議晚上從新市街專程開去。",
                                                                        "caution": "",
                                                                        "mapQuery": "火之國文龍 總本店"
                                                            },
                                                            {
                                                                        "name": "紅蘭亭 下通本店",
                                                                        "rank": "A",
                                                                        "meal": "晚餐換口味",
                                                                        "area": "下通",
                                                                        "order": "太平燕、皿うどん、炒飯",
                                                                        "note": "連吃豚骨太膩時最好的熊本麵食替代。",
                                                                        "fit": "最後點餐較早。",
                                                                        "caution": "",
                                                                        "mapQuery": "紅蘭亭 下通本店"
                                                            },
                                                            {
                                                                        "name": "会楽園",
                                                                        "rank": "B",
                                                                        "meal": "午餐太平燕",
                                                                        "area": "熊本市新町周邊",
                                                                        "order": "太平燕、中華定食",
                                                                        "note": "太平燕發祥系名店之一，白天順路可吃。",
                                                                        "fit": "晚餐不如紅蘭亭方便。",
                                                                        "caution": "",
                                                                        "mapQuery": "会楽園"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🐟",
                                                "title": "海鮮／壽司備案",
                                                "note": "真正海鮮主戰場在 Day7，上天草前一天只做市區備案。",
                                                "items": [
                                                            {
                                                                        "name": "天草 HERO鮨 牛深丸 熊本站店",
                                                                        "rank": "A",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "熊本站",
                                                                        "order": "天草地魚握壽司、車海老、真鯛、海鮮丼",
                                                                        "note": "若 Day7 天氣不穩或怕吃不到海鮮，可先在市區補。",
                                                                        "fit": "若不去熊本站，不必特地繞。",
                                                                        "caution": "",
                                                                        "mapQuery": "天草 HERO鮨 牛深丸 熊本站店"
                                                            },
                                                            {
                                                                        "name": "活魚回転寿し 水天",
                                                                        "rank": "B",
                                                                        "meal": "自駕壽司",
                                                                        "area": "熊本市／菊陽",
                                                                        "order": "壽司、海鮮丼、定食、茶碗蒸",
                                                                        "note": "停車與座位相對穩，孩子可吃熟食。",
                                                                        "fit": "不是必吃，作為備案。",
                                                                        "caution": "",
                                                                        "mapQuery": "活魚回転寿し 水天"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🍛",
                                                "title": "熊本市區小吃／熟食",
                                                "note": "不想吃麵或牛時，用這些更穩。",
                                                "items": [
                                                            {
                                                                        "name": "勝烈亭 新市街本店",
                                                                        "rank": "A",
                                                                        "meal": "午餐／晚餐",
                                                                        "area": "新市街",
                                                                        "order": "炸豬排、里肌、腰內、兒童餐",
                                                                        "note": "離住宿近，孩子接受度高，白飯與高麗菜好分食。",
                                                                        "fit": "非熊本特色第一名，但非常穩。",
                                                                        "caution": "",
                                                                        "mapQuery": "勝烈亭 新市街本店"
                                                            },
                                                            {
                                                                        "name": "櫻之馬場 城彩苑小吃",
                                                                        "rank": "A",
                                                                        "meal": "午餐／點心",
                                                                        "area": "熊本城旁",
                                                                        "order": "赤牛串、可樂餅、甜點、飲料",
                                                                        "note": "若在熊本城周邊活動，戶外座位適合孩子。",
                                                                        "fit": "不當正式晚餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "櫻之馬場 城彩苑小吃"
                                                            },
                                                            {
                                                                        "name": "蜂樂饅頭 熊本本店",
                                                                        "rank": "B",
                                                                        "meal": "點心",
                                                                        "area": "上通",
                                                                        "order": "黑餡／白餡蜂樂饅頭",
                                                                        "note": "類似紅豆餅，逛街時小孩補糖分很好用。",
                                                                        "fit": "排隊長就跳過。",
                                                                        "caution": "",
                                                                        "mapQuery": "蜂樂饅頭 熊本本店"
                                                            },
                                                            {
                                                                        "name": "熊本長崎次郎喫茶室",
                                                                        "rank": "B",
                                                                        "meal": "咖啡休息",
                                                                        "area": "市電沿線",
                                                                        "order": "咖啡、甜點、復古喫茶餐",
                                                                        "note": "可看路面電車，適合鐵道迷孩子。",
                                                                        "fit": "不適合趕行程。",
                                                                        "caution": "",
                                                                        "mapQuery": "熊本長崎次郎喫茶室"
                                                            },
                                                            {
                                                                        "name": "菅乃屋",
                                                                        "rank": "B",
                                                                        "meal": "馬肉料理",
                                                                        "area": "熊本市區",
                                                                        "order": "馬肉熟食、定食、包廂菜",
                                                                        "note": "想試熊本名物馬肉可選熟食版本。",
                                                                        "fit": "孩子避免生食馬刺；大人少量嚐鮮即可。",
                                                                        "caution": "",
                                                                        "mapQuery": "菅乃屋"
                                                            },
                                                            {
                                                                        "name": "Center River 漢堡排",
                                                                        "rank": "B",
                                                                        "meal": "家庭熟食",
                                                                        "area": "熊本市周邊",
                                                                        "order": "鐵板漢堡排、飯類、兒童可吃品項",
                                                                        "note": "孩子接受度高，適合不想吃日式或拉麵時。",
                                                                        "fit": "不是必吃，只做換口味。",
                                                                        "caution": "",
                                                                        "mapQuery": "Center River 漢堡排"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            },
            "7": {
                        "headline": "上天草是全程海鮮主戰場；午餐主攻車海老、生魚片、海鮮丼、鮑魚，牡蠣與海膽有貨再加。",
                        "rules": [
                                    "6 月初不把牡蠣小屋當主軸",
                                    "海膽已過主要活動期，有貨再點",
                                    "不要深追天草南部餐廳"
                        ],
                        "categories": [
                                    {
                                                "icon": "🐟",
                                                "title": "上天草海鮮主餐",
                                                "note": "這類是 Day7 第一優先，其他食物都只是備案。",
                                                "items": [
                                                            {
                                                                        "name": "海鮮家 福伸 上天草松島本店",
                                                                        "rank": "S",
                                                                        "meal": "午餐第一順位",
                                                                        "area": "上天草・松島",
                                                                        "order": "車海老御膳、特上海鮮丼、刺身御膳、鮑魚、岩牡蠣有貨再加",
                                                                        "note": "這趟珍貴海鮮命中率最高；比牡蠣小屋更適合 6 月。",
                                                                        "fit": "若排隊太久，立刻切天のや。",
                                                                        "caution": "",
                                                                        "mapQuery": "海鮮家 福伸 上天草松島本店"
                                                            },
                                                            {
                                                                        "name": "天草パールガーデン どんぶり亭 天のや",
                                                                        "rank": "S",
                                                                        "meal": "午餐第二順位",
                                                                        "area": "Sea Donut 旁",
                                                                        "order": "バラ散らし海鮮丼、車海老、アワビ、マグロ、天丼",
                                                                        "note": "停車、廁所、座位、Sea Donut 動線最穩。",
                                                                        "fit": "伊勢海老丼多為季節或數量限定，6 月不要硬追。",
                                                                        "caution": "",
                                                                        "mapQuery": "天草パールガーデン どんぶり亭 天のや"
                                                            },
                                                            {
                                                                        "name": "L’isola Terrace Amakusa／Plate Cafe L’isola",
                                                                        "rank": "A",
                                                                        "meal": "下午茶／休息",
                                                                        "area": "五號橋周邊",
                                                                        "order": "天草鹽麵包、真鯛料理、咖啡甜點、伴手禮",
                                                                        "note": "景觀與休息價值高，鹽麵包可當車上點心。",
                                                                        "fit": "不要把它當生魚片／海膽主戰場。",
                                                                        "caution": "",
                                                                        "mapQuery": "L’isola Terrace Amakusa／Plate Cafe L’isola"
                                                            },
                                                            {
                                                                        "name": "道の駅 上天草さんぱーる",
                                                                        "rank": "A",
                                                                        "meal": "補買／休息",
                                                                        "area": "上天草大矢野",
                                                                        "order": "車海老、真鯛、章魚、魚漿製品、柑橘",
                                                                        "note": "適合順路看水產、買伴手禮與補給。",
                                                                        "fit": "不建議取代福伸或天のや主餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "道の駅 上天草さんぱーる"
                                                            },
                                                            {
                                                                        "name": "天草四郎ちくわ／藍のあまくさ村",
                                                                        "rank": "A",
                                                                        "meal": "點心／伴手禮",
                                                                        "area": "大矢野",
                                                                        "order": "現烤竹輪、魚漿天婦羅、伴手禮",
                                                                        "note": "車上點心與伴手禮很適合，孩子也容易吃。",
                                                                        "fit": "別買太多影響午餐海鮮。",
                                                                        "caution": "",
                                                                        "mapQuery": "天草四郎ちくわ／藍のあまくさ村"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🦪",
                                                "title": "牡蠣／海膽／季節高價海產",
                                                "note": "可以問、可以加點，但不要讓它們主導行程。",
                                                "items": [
                                                            {
                                                                        "name": "岩牡蠣／天領岩牡蠣",
                                                                        "rank": "A",
                                                                        "meal": "當日加點",
                                                                        "area": "天草／上天草有貨店",
                                                                        "order": "烤牡蠣、蒸牡蠣、生岩牡蠣少量成人嚐鮮",
                                                                        "note": "6 月有機會遇到春夏岩牡蠣，比冬季真牡蠣更符合季節。",
                                                                        "fit": "小孩不要吃生牡蠣；當天還要開回熊本，不建議大量生食。",
                                                                        "caution": "",
                                                                        "mapQuery": "岩牡蠣／天領岩牡蠣"
                                                            },
                                                            {
                                                                        "name": "カキ小屋 アズール",
                                                                        "rank": "B",
                                                                        "meal": "牡蠣小屋備案",
                                                                        "area": "上天草大矢野",
                                                                        "order": "烤牡蠣、海鮮 BBQ",
                                                                        "note": "若剛好營業且有 6 月食材，可短吃。",
                                                                        "fit": "6 月需電話／當日確認，不建議取代福伸。",
                                                                        "caution": "",
                                                                        "mapQuery": "カキ小屋 アズール"
                                                            },
                                                            {
                                                                        "name": "mio camino AMAKUSA 牡蠣活動",
                                                                        "rank": "C",
                                                                        "meal": "本趟不主排",
                                                                        "area": "Sea Donut 周邊",
                                                                        "order": "冬季牡蠣、ヒオウギ貝、車海老 BBQ",
                                                                        "note": "活動型牡蠣玩法冬春較適合。",
                                                                        "fit": "你們 6/4 已過主要牡蠣活動期。",
                                                                        "caution": "",
                                                                        "mapQuery": "mio camino AMAKUSA 牡蠣活動"
                                                            },
                                                            {
                                                                        "name": "丸健水産／天草生うに",
                                                                        "rank": "C",
                                                                        "meal": "不建議 Day7 深追",
                                                                        "area": "天草五和方向",
                                                                        "order": "生海膽丼、海膽料理",
                                                                        "note": "生海膽名店方向較深，對上天草一日往返太繞。",
                                                                        "fit": "6 月初已過春季生海膽活動主期，有貨再點即可。",
                                                                        "caution": "",
                                                                        "mapQuery": "丸健水産／天草生うに"
                                                            },
                                                            {
                                                                        "name": "帝王蟹／タラバガニ",
                                                                        "rank": "C",
                                                                        "meal": "不追",
                                                                        "area": "非九州在地",
                                                                        "order": "無",
                                                                        "note": "不是熊本、天草、大分的在地強項，在九州吃多為冷凍或外地貨。",
                                                                        "fit": "不要為帝王蟹犧牲車海老、刺身、鮑魚。",
                                                                        "caution": "タラバガニ 九州",
                                                                        "mapQuery": "帝王蟹／タラバガニ"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🍜",
                                                "title": "天草麵食備案",
                                                "note": "孩子想吃熱湯麵，或海鮮店客滿，才用這類。",
                                                "items": [
                                                            {
                                                                        "name": "天草ちゃんぽん 千蘭 本店",
                                                                        "rank": "A",
                                                                        "meal": "午餐備案",
                                                                        "area": "三角町／往上天草途中",
                                                                        "order": "天草ちゃんぽん、海鮮強棒麵",
                                                                        "note": "熱湯麵、蔬菜、海鮮一次滿足，孩子比生魚片更容易接受。",
                                                                        "fit": "座位與停車有限；福伸／天のや可吃時仍優先海鮮。",
                                                                        "caution": "",
                                                                        "mapQuery": "天草ちゃんぽん 千蘭 本店"
                                                            },
                                                            {
                                                                        "name": "黑亭 下通店",
                                                                        "rank": "B",
                                                                        "meal": "回熊本晚餐",
                                                                        "area": "熊本下通",
                                                                        "order": "熊本拉麵、玉子入り",
                                                                        "note": "午餐已吃海鮮，晚餐用拉麵收尾很順。",
                                                                        "fit": "返回熊本後若太累，外帶或便利商店也可。",
                                                                        "caution": "",
                                                                        "mapQuery": "黑亭 下通店"
                                                            },
                                                            {
                                                                        "name": "桂花拉麵 本店",
                                                                        "rank": "B",
                                                                        "meal": "回熊本晚餐",
                                                                        "area": "花畑町",
                                                                        "order": "太肉麵、桂花拉麵",
                                                                        "note": "熊本老牌拉麵，適合晚餐補一碗。",
                                                                        "fit": "重口味，孩子分食即可。",
                                                                        "caution": "",
                                                                        "mapQuery": "桂花拉麵 本店"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🥩",
                                                "title": "回熊本後的肉類晚餐",
                                                "note": "午餐若沒吃飽或大家想換口味，可用熊本市區肉類收尾。",
                                                "items": [
                                                            {
                                                                        "name": "あか牛Dining yoka-yoka サクラマチ店",
                                                                        "rank": "A",
                                                                        "meal": "晚餐",
                                                                        "area": "SAKURA MACHI",
                                                                        "order": "あか牛丼、赤牛牛排、赤牛漢堡排",
                                                                        "note": "不必自己烤，從新市街步行／短程移動可到。",
                                                                        "fit": "午餐海鮮很飽就不要硬吃大餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "あか牛Dining yoka-yoka サクラマチ店"
                                                            },
                                                            {
                                                                        "name": "和牛焼肉 LIEBE AMU Plaza 熊本店",
                                                                        "rank": "B",
                                                                        "meal": "晚餐燒肉",
                                                                        "area": "熊本站／AMU",
                                                                        "order": "A4/A5 黒毛和牛、焼きすき、牛タン",
                                                                        "note": "想吃油花型和牛，可當 Day7 晚餐。",
                                                                        "fit": "若不順路熊本站，不必特地去。",
                                                                        "caution": "",
                                                                        "mapQuery": "和牛焼肉 LIEBE AMU Plaza 熊本店"
                                                            },
                                                            {
                                                                        "name": "焼肉すどう 熊本本店",
                                                                        "rank": "B",
                                                                        "meal": "高級大人向",
                                                                        "area": "上通",
                                                                        "order": "代烤燒肉套餐",
                                                                        "note": "大人想升級可選。",
                                                                        "fit": "孩子累時不建議。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉すどう 熊本本店"
                                                            },
                                                            {
                                                                        "name": "焼肉ブラザーズ",
                                                                        "rank": "C",
                                                                        "meal": "親子團不建議",
                                                                        "area": "熊本市區",
                                                                        "order": "赤牛、旭志牛、熊本黑毛和牛",
                                                                        "note": "肉類選擇有魅力。",
                                                                        "fit": "公開訂位頁標示未滿 20 歲不可入店，親子團直接刪。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉ブラザーズ"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            },
            "8": {
                        "headline": "返台日以還車登機為優先；午餐只挑熊本市區、熊本站或機場沿線，不再新增遠點。",
                        "rules": [
                                    "15:30 後進入返程優先模式",
                                    "最後一餐要停車與撤退容易",
                                    "不要為名店排隊錯過還車時間"
                        ],
                        "categories": [
                                    {
                                                "icon": "🍜",
                                                "title": "最後一碗熊本麵食",
                                                "note": "適合退房後市區午餐或熊本站前後。",
                                                "items": [
                                                            {
                                                                        "name": "黑亭 下通店",
                                                                        "rank": "S",
                                                                        "meal": "午餐",
                                                                        "area": "下通／新市街",
                                                                        "order": "熊本拉麵、玉子入り、叉燒麵",
                                                                        "note": "若前幾天沒吃熊本拉麵，最後一天最值得補。",
                                                                        "fit": "排隊長就改天外天或紅蘭亭。",
                                                                        "caution": "",
                                                                        "mapQuery": "黑亭 下通店"
                                                            },
                                                            {
                                                                        "name": "桂花拉麵 本店",
                                                                        "rank": "A",
                                                                        "meal": "午餐",
                                                                        "area": "花畑町",
                                                                        "order": "太肉麵、桂花拉麵、餃子",
                                                                        "note": "熊本老牌，地點順。",
                                                                        "fit": "週日假日營業時間較短，請查。",
                                                                        "caution": "",
                                                                        "mapQuery": "桂花拉麵 本店"
                                                            },
                                                            {
                                                                        "name": "天外天 熊本站店",
                                                                        "rank": "A",
                                                                        "meal": "熊本站備案",
                                                                        "area": "熊本站",
                                                                        "order": "拉麵、海苔、叉燒飯",
                                                                        "note": "返程前若到熊本站／AMU，時間效率最高。",
                                                                        "fit": "座位少，8 人可能要分開吃。",
                                                                        "caution": "",
                                                                        "mapQuery": "天外天 熊本站店"
                                                            },
                                                            {
                                                                        "name": "紅蘭亭 下通本店",
                                                                        "rank": "A",
                                                                        "meal": "午餐",
                                                                        "area": "下通",
                                                                        "order": "太平燕、皿うどん、炒飯",
                                                                        "note": "不想再吃豚骨時，太平燕比較清爽。",
                                                                        "fit": "確認最後點餐。",
                                                                        "caution": "",
                                                                        "mapQuery": "紅蘭亭 下通本店"
                                                            },
                                                            {
                                                                        "name": "こむらさき 上通中央店",
                                                                        "rank": "B",
                                                                        "meal": "午餐",
                                                                        "area": "上通",
                                                                        "order": "熊本拉麵、叉燒麵",
                                                                        "note": "較溫和的熊本拉麵備案。",
                                                                        "fit": "需看是否順路。",
                                                                        "caution": "",
                                                                        "mapQuery": "こむらさき 上通中央店"
                                                            }
                                                ],
                                                "open": true
                                    },
                                    {
                                                "icon": "🥩",
                                                "title": "最後一餐肉類／定食",
                                                "note": "想吃飽再去機場，選撤退容易的市區店。",
                                                "items": [
                                                            {
                                                                        "name": "勝烈亭 新市街本店",
                                                                        "rank": "A",
                                                                        "meal": "午餐",
                                                                        "area": "新市街",
                                                                        "order": "炸豬排、兒童餐、白飯味噌湯續加",
                                                                        "note": "離飯店近、孩子接受度高，最後一天成功率高。",
                                                                        "fit": "尖峰可能排隊；時間緊就放棄。",
                                                                        "caution": "",
                                                                        "mapQuery": "勝烈亭 新市街本店"
                                                            },
                                                            {
                                                                        "name": "あか牛Dining yoka-yoka サクラマチ店",
                                                                        "rank": "A",
                                                                        "meal": "午餐",
                                                                        "area": "SAKURA MACHI",
                                                                        "order": "あか牛丼、赤牛牛排、漢堡排",
                                                                        "note": "最後補熊本赤牛最方便，不必開去阿蘇。",
                                                                        "fit": "吃完要抓停車與市區交通時間。",
                                                                        "caution": "",
                                                                        "mapQuery": "あか牛Dining yoka-yoka サクラマチ店"
                                                            },
                                                            {
                                                                        "name": "和牛焼肉 LIEBE AMU Plaza 熊本店",
                                                                        "rank": "B",
                                                                        "meal": "午餐／早晚餐",
                                                                        "area": "熊本站／AMU",
                                                                        "order": "A4/A5 黒毛和牛燒肉、牛タン",
                                                                        "note": "若最後會去熊本站，吃和牛燒肉也可。",
                                                                        "fit": "燒肉時間較長，返程日要控時。",
                                                                        "caution": "",
                                                                        "mapQuery": "和牛焼肉 LIEBE AMU Plaza 熊本店"
                                                            },
                                                            {
                                                                        "name": "焼肉きんぐ／彩炉",
                                                                        "rank": "B",
                                                                        "meal": "家庭保底",
                                                                        "area": "熊本周邊",
                                                                        "order": "燒肉、兒童附餐、甜點",
                                                                        "note": "如果最後想讓孩子吃飽，連鎖家庭燒肉可用。",
                                                                        "fit": "不要排太晚。",
                                                                        "caution": "",
                                                                        "mapQuery": "焼肉きんぐ／彩炉"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🐟",
                                                "title": "海鮮／壽司補救",
                                                "note": "Day7 若上天草海鮮失敗，最後一天在熊本補。",
                                                "items": [
                                                            {
                                                                        "name": "天草 HERO鮨 牛深丸 熊本站店",
                                                                        "rank": "A",
                                                                        "meal": "午餐／返程前",
                                                                        "area": "熊本站",
                                                                        "order": "天草地魚握壽司、車海老、真鯛、海鮮丼",
                                                                        "note": "最適合做『沒吃到天草海鮮』的補救。",
                                                                        "fit": "若不去熊本站，不要為它繞路。",
                                                                        "caution": "",
                                                                        "mapQuery": "天草 HERO鮨 牛深丸 熊本站店"
                                                            },
                                                            {
                                                                        "name": "活魚回転寿し 水天",
                                                                        "rank": "B",
                                                                        "meal": "自駕壽司",
                                                                        "area": "熊本市／菊陽",
                                                                        "order": "壽司、海鮮丼、定食、茶碗蒸",
                                                                        "note": "停車與兒童附餐較穩。",
                                                                        "fit": "不是最後一天必吃，只是備案。",
                                                                        "caution": "",
                                                                        "mapQuery": "活魚回転寿し 水天"
                                                            },
                                                            {
                                                                        "name": "AEON MALL 熊本／商場壽司或熟食",
                                                                        "rank": "B",
                                                                        "meal": "返程保底",
                                                                        "area": "熊本近郊",
                                                                        "order": "壽司、便當、熟食、甜點",
                                                                        "note": "停車、購物、吃飯一次解決，商場最穩。",
                                                                        "fit": "美食記憶點低，但不容易出錯。",
                                                                        "caution": "",
                                                                        "mapQuery": "AEON MALL 熊本／商場壽司或熟食"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "🍡",
                                                "title": "熊本點心／機場收尾",
                                                "note": "適合買上車或機場前最後補糖。",
                                                "items": [
                                                            {
                                                                        "name": "蜂樂饅頭 熊本本店",
                                                                        "rank": "B",
                                                                        "meal": "點心",
                                                                        "area": "上通",
                                                                        "order": "黑餡／白餡蜂樂饅頭",
                                                                        "note": "最後逛街時好買好分食。",
                                                                        "fit": "排隊長就跳過。",
                                                                        "caution": "",
                                                                        "mapQuery": "蜂樂饅頭 熊本本店"
                                                            },
                                                            {
                                                                        "name": "櫻之馬場 城彩苑小吃",
                                                                        "rank": "B",
                                                                        "meal": "午餐／點心",
                                                                        "area": "熊本城旁",
                                                                        "order": "赤牛串、可樂餅、甜點、飲料",
                                                                        "note": "若最後走魯夫／熊本城周邊，吃小吃比坐餐廳更彈性。",
                                                                        "fit": "不適合離還車時間太近。",
                                                                        "caution": "",
                                                                        "mapQuery": "櫻之馬場 城彩苑小吃"
                                                            },
                                                            {
                                                                        "name": "阿蘇熊本機場餐飲／伴手禮",
                                                                        "rank": "A",
                                                                        "meal": "最後保底",
                                                                        "area": "熊本機場",
                                                                        "order": "陣太鼓、熊本限定伴手禮、便當、飲料",
                                                                        "note": "一切餐廳失敗時，機場才是最安全收尾。",
                                                                        "fit": "先還車、過安檢，再買伴手禮。",
                                                                        "caution": "",
                                                                        "mapQuery": "阿蘇熊本機場餐飲／伴手禮"
                                                            },
                                                            {
                                                                        "name": "熊本長崎次郎喫茶室",
                                                                        "rank": "B",
                                                                        "meal": "咖啡休息",
                                                                        "area": "市電沿線",
                                                                        "order": "咖啡、甜點、復古喫茶餐",
                                                                        "note": "若孩子想看路面電車且時間充裕，可短休。",
                                                                        "fit": "返程日不建議久坐。",
                                                                        "caution": "",
                                                                        "mapQuery": "熊本長崎次郎喫茶室"
                                                            }
                                                ],
                                                "open": false
                                    },
                                    {
                                                "icon": "⚠️",
                                                "title": "返程日不排",
                                                "note": "最後一天避免一切不可控與遠距離餐廳。",
                                                "items": [
                                                            {
                                                                        "name": "いまきん食堂／阿蘇赤牛名店",
                                                                        "rank": "C",
                                                                        "meal": "不排",
                                                                        "area": "阿蘇",
                                                                        "order": "改 Day5",
                                                                        "note": "會拉長車程與排隊風險。",
                                                                        "fit": "返程日不要回阿蘇。",
                                                                        "caution": "",
                                                                        "mapQuery": "いまきん食堂／阿蘇赤牛名店"
                                                            },
                                                            {
                                                                        "name": "上天草福伸／天のや",
                                                                        "rank": "C",
                                                                        "meal": "不排",
                                                                        "area": "上天草",
                                                                        "order": "改 Day7",
                                                                        "note": "海鮮很好，但返程日風險太高。",
                                                                        "fit": "避免錯過還車與登機。",
                                                                        "caution": "",
                                                                        "mapQuery": "上天草福伸／天のや"
                                                            },
                                                            {
                                                                        "name": "高級燒肉長套餐",
                                                                        "rank": "C",
                                                                        "meal": "不排",
                                                                        "area": "熊本市區",
                                                                        "order": "改 Day6／Day7",
                                                                        "note": "用餐時間長且撤退慢。",
                                                                        "fit": "返程日以可快速離席為原則。",
                                                                        "caution": "",
                                                                        "mapQuery": "高級燒肉長套餐"
                                                            }
                                                ],
                                                "open": false
                                    }
                        ]
            }
};
