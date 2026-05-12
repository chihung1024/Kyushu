// Daily itinerary source data.

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
