export const icons = { play: '🎡', food: '🍽️', sight: '📸', drive: '🚗', action: '✅', rain: '☔' };

export const bgColors = { play: 'bg-pink-50 border-pink-200', food: 'bg-yellow-50 border-yellow-200', sight: 'bg-blue-50 border-blue-200', drive: 'bg-slate-50 border-slate-300', action: 'bg-purple-50 border-purple-200', rain: 'bg-cyan-50 border-cyan-200' };

export const BACKUP_CARD_BASE_CLASS = "bg-white p-4 md:p-5 rounded-xl border shadow-sm hover:shadow-md transition-all flex items-start gap-3";

export const itineraryData = [
    {
        day: 1,
        date: "5/29 (五)",
        title: "🌋 Day 1｜南阿蘇大突進與完美落地 (廢人適應日)",
        weather: "🌤️ 預報 24-28°C",
        mapLink: "https://www.google.com/maps/dir/阿蘇熊本機場/俵山交流館萌の里/高森駅/龜之井酒店別府",
        route: "熊本機場 🚗 → 萌之里 → 南阿蘇 → 別府",
        hotel: "龜之井酒店 别府 (連住 4 晚)",
        checklist: ["確認租車公司的 ETC 卡是否已準備好", "推車與尿布包放置於車內好拿處", "準備好車上安撫音樂與防呆導航設定"],
        sections: [
            { type: "action", time: "11:50 - 13:00", mapQuery: "阿蘇熊本機場", title: "機場取車與設定", content: "降落<a href='https://www.google.com/maps/search/?api=1&query=阿蘇熊本機場' target='_blank' rel='noopener noreferrer' class='text-cyan-700 hover:text-cyan-500 font-bold underline decoration-cyan-300 underline-offset-2 transition-colors'>熊本機場</a>，出關領取預約好的 7-8 人座休旅車（直接使用 ETC 卡實支實付）。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>ETC 與 KEP 避坑指南：</strong>本次已確認放棄購買 KEP，直接使用預約好的 ETC 卡實支實付，單家狂省近萬日圓！</li></ul>" },
            { type: "sight", time: "13:20 - 14:15", mapQuery: "俵山交流館 萌之里", title: "第一站放電 (娜美彩蛋)", content: "👉 <strong>【海賊王彩蛋：🍊 娜美】</strong>。離開機場約 15 分鐘，抵達「<a href='https://www.google.com/maps/search/?api=1&query=俵山交流館+萌の里' target='_blank' rel='noopener noreferrer' class='text-cyan-700 hover:text-cyan-500 font-bold underline decoration-cyan-300 underline-offset-2 transition-colors'>俵山交流館 萌之里</a>」。這是一個超棒的農產直賣所，有廣闊草地可以讓小孩狂奔，大人可買些在地小零食墊肚子。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>完美銜接：</strong>剛下飛機讓小孩伸展筋骨，順便在直賣所買便宜的在地便當或牛奶當輕食。</li></ul>" },
            { type: "sight", time: "14:30 - 15:30", mapQuery: "高森駅", title: "南阿蘇微探險 (佛朗基彩蛋)", content: "視體力與時間，前往「<a href='https://www.google.com/maps/search/?api=1&query=白川水源' target='_blank' rel='noopener noreferrer' class='text-cyan-700 hover:text-cyan-500 font-bold underline decoration-cyan-300 underline-offset-2 transition-colors'>白川水源</a>」踏踏水，或是去<a href='https://www.google.com/maps/search/?api=1&query=高森駅' target='_blank' rel='noopener noreferrer' class='text-cyan-700 hover:text-cyan-500 font-bold underline decoration-cyan-300 underline-offset-2 transition-colors'>高森車站</a>找 👉 <strong>【海賊王彩蛋：🤖 佛朗基】</strong> 拍照。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>彈性備註：</strong>若小孩已顯疲態，此站可直接跳過，提早拉車前往別府。</li></ul>" },
            { type: "drive", time: "16:00 - 18:30", mapQuery: "龜之井酒店 別府", title: "長途拉車與抵達", content: "小孩上車睡傍晚覺，經由國道 57 號或 442 號直奔大分縣。抵達<a href='https://www.google.com/maps/search/?api=1&query=龜之井酒店+別府' target='_blank' rel='noopener noreferrer' class='text-cyan-700 hover:text-cyan-500 font-bold underline decoration-cyan-300 underline-offset-2 transition-colors'>龜之井酒店</a> Check-in。晚餐就近在飯店周邊或前往附近的 <a href='https://www.google.com/maps/search/?api=1&query=Mega+Trial+別府' target='_blank' rel='noopener noreferrer' class='text-cyan-700 hover:text-cyan-500 font-bold underline decoration-cyan-300 underline-offset-2 transition-colors'>Mega Trial 巨型超市</a> 解決，並順便搬妥這幾天的鮮奶與果汁。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>超市救援：</strong>晚上 8 點後日本超市熟食與便當會打半折，買回飯店當宵夜或隔天的野餐糧食，CP 值突破天際。</li></ul>" }
        ],
        tips: "今日重點是輕鬆適應右駕與享受南阿蘇風景。第一天不貪多，成功抵達別府飯店就是勝利。"
    },
    {
        day: 2,
        date: "5/30 (六)",
        title: "🎀 Day 2｜樂園激戰與一站式補給 (早起日 ①)",
        weather: "🌤️ 預報 23-27°C",
        mapLink: "https://www.google.com/maps/dir/龜之井酒店別府/Harmonyland/Youme+Town+別府/龜之井酒店別府",
        route: "別府 🚗 → Harmonyland → Youme Town → 別府",
        hotel: "龜之井酒店 别府",
        checklist: ["出發前確認已買好 QR Code 電子門票", "自備大塑膠袋與野餐墊", "水壺裝滿水"],
        sections: [
            { type: "play", time: "08:30 - 16:30", mapQuery: "Harmonyland", title: "大重點：Harmonyland (週六場)", content: "全行程最耗體力的一天！使用電子票免排隊直接入園。<br>死守三大時刻：<strong>10:30 迎賓秀</strong> ➔ <strong>12:30 核心帕拉列爾大遊行</strong> ➔ <strong>15:30 春季花卉秀</strong>。<br><button onclick=\"showModal('harmonylandModal')\" class=\"mt-3 mb-2 bg-pink-500 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition flex items-center gap-2\"><span>🎀</span> 查看 35 週年必看展演時刻表</button>午餐：強制超商野餐！不吃園區餐廳，省錢還能避免排隊崩潰。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>展演時刻提醒：</strong>提早 20 分鐘佔位準沒錯。園區下方的「三麗鷗角色遊船」有室內冷氣，是避暑的好去處。</li></ul>" },
            { type: "food", time: "17:00 - 20:00", mapQuery: "Youme Town 別府", title: "傍晚：Youme Town 終極收尾", content: "離開樂園後直奔【<a href='https://www.google.com/maps/search/?api=1&query=Youme+Town+別府' target='_blank' rel='noopener noreferrer' class='text-cyan-700 hover:text-cyan-500 font-bold underline decoration-cyan-300 underline-offset-2 transition-colors'>Youme Town 別府</a>】！這裡有一站式神級機能：<br>🛍️ 掃貨：UNIQLO, GU, DAISO, KALDI, 扭蛋店 gashacoco。<br>🍜 美食街：味噌乃家, 花丸烏龍麵, 31冰淇淋... 兩家各自點餐免排隊！吃飽後直接去樓下超市把明天的水族館野餐零食買齊！", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>體力防雷：</strong>樂園後大家體力見底，能「一站式」解決停車、晚餐與採買是保護父母理智線的最高指導原則。</li></ul>" }
        ],
        tips: "連住飯店的優勢！早上不用收行李，吃完早餐直接出發，心情無比輕鬆。"
    },
    {
        day: 3,
        date: "5/31 (日)",
        title: "♨️ Day 3｜地獄微踩點 ＋ 🦭 海之卵水族館",
        weather: "🌤️ 預報 22-26°C",
        mapLink: "https://www.google.com/maps/dir/龜之井酒店別府/かまど地獄/大分海洋宮殿水族館+海之卵/龜之井酒店別府",
        route: "別府 🚗 → 地獄溫泉 → 海之卵水族館",
        hotel: "龜之井酒店 别府",
        checklist: ["隨身攜帶大毛巾與一套幼童備用衣物 (水族館踏浪用)", "設定 12:50 離開地獄區的鬧鐘"],
        sections: [
            { type: "sight", time: "10:00 - 12:50", mapQuery: "かまど地獄", title: "視起床時間決策：地獄溫泉", content: "👉 <strong>【主推：精實微早起】</strong>若 10:00 出門，推車遊覽最壯觀的「<a href='https://www.google.com/maps/search/?api=1&query=海地獄' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>海地獄</a>」與互動性最高的「<a href='https://www.google.com/maps/search/?api=1&query=かまど地獄' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>灶地獄</a>」，中午於周邊吃地獄蒸或天丼名店。<br>👉 <strong>【備案：極致廢人模式】</strong>若 11:00 才出發，果斷放棄海地獄與正餐！只去灶地獄走走，中午直接買溫泉蛋、布丁、肉包等散步小吃墊肚子，<strong>12:50 必須上車拔營</strong>。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>時間黑洞警告：</strong>為了保住下午 14:00 的水族館海豚秀，中午 12:50 是必須離開別府市區的死線！</li></ul>" },
            { type: "play", time: "13:30 - 16:30", mapQuery: "大分海洋宮殿水族館 海之卵", title: "海之卵大連擊 (死線 13:30)", content: "抵達九州頂級無距離<a href='https://www.google.com/maps/search/?api=1&query=大分海洋宮殿水族館+海之卵' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>水族館 海之卵</a>。精準卡位看 <strong>14:00 海豚秀</strong> ➔ <strong>15:00 海象互動秀</strong>（前排必噴水） ➔ <strong>15:30 鵜鶘散步</strong>。<br><button onclick=\"showModal('umitamagoModal')\" class=\"mt-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition flex items-center gap-2\"><span>🦭</span> 展演時刻大補帖</button>", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>Asobeach 戰術：</strong>看完所有秀後，再去戶外的 Asobeach 白沙灘踏浪玩沙，館內二樓設有完善的盥洗換衣空間。</li></ul>" }
        ],
        tips: "這天重點是嚴守 13:30 抵達水族館的死線，把下午的時間完整留給水族館的戶外互動區。"
    },
    {
        day: 4,
        date: "6/1 (一)",
        title: "🦁 Day 4｜非洲動物園 ＋ 🌸 由布院精華遊 (早起日 ②)",
        weather: "🌤️ 預報 24-28°C",
        mapLink: "https://www.google.com/maps/dir/龜之井酒店別府/九州自然動物園/由布院/龜之井酒店別府",
        route: "別府 🚗 → Safari → 由布院 → 別府",
        hotel: "龜之井酒店 别府",
        checklist: ["長途車程，準備好車上零食點心", "離開市區上山前，務必先在超商買好午餐野餐熟食與飲料", "設定 12:30 強制離開動物園的鬧鐘"],
        sections: [
            { type: "play", time: "09:00 - 12:30", mapQuery: "九州自然動物園", title: "殺入動物園 (12:30 強制拔營)", content: "抵達<a href='https://www.google.com/maps/search/?api=1&query=九州自然動物園' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>九州自然動物園</a>。兩台車直接開到入口排隊購買「叢林巴士」票親手餵獅子。午餐請拿預先買好的熟食直接在園區/車上野餐。<br><strong class='text-red-500'>⚠️ 極度重要：12:30 必須全員上車離開，否則下午行程會連環爆！</strong>", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>叢林巴士現實：</strong>若買到的班次較晚，等待期間請直接推車去「小動物接觸區」餵迷你馬、袋鼠，幼童一樣會超級開心。</li></ul>" },
            { type: "sight", time: "13:30 - 16:00", mapQuery: "由布院 湯之坪街道", title: "由布院精準踩點 (2小時快閃)", content: "開車抵達<a href='https://www.google.com/maps/search/?api=1&query=由布院' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>由布院</a>。星期一的下午人潮已銳減，捨棄全區慢遊，直接設定 <strong>2 小時精華快閃</strong>：推車漫步湯之坪街道，買金賞可樂餅、B-Speak 瑞士捲，逛逛 Floral Village 童話村。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>撤退死線：</strong>由布院店家 16:30-17:00 會大規模拉下鐵門。16:00 走到金鱗湖拍張照後，就順理成章上車撤退回別府休息。</li><li><strong>行李預整理：</strong>回到飯店後，今晚請把明天的跨區行李做 80% 的打包。</li></ul>" }
        ],
        tips: "極度嚴格的時間控管日，絕不貪心！把由布院排在下午快閃，完美避開了早上的擁擠人潮。"
    },
    {
        day: 5,
        date: "6/2 (二)",
        title: "🌋 Day 5｜絕景北阿蘇與火口核心 (早起日 ③・跨區移動)",
        weather: "🌤️ 預報 23-28°C",
        mapLink: "https://www.google.com/maps/dir/龜之井酒店別府/大觀峰/阿蘇車站/草千里之濱/大津中央公園/熊本新市街",
        route: "別府退房 🚗 → 大觀峰 → 阿蘇車站 → 草千里 → 熊本",
        hotel: "Candeo Kumamoto Shinshigai (暫定首選)",
        checklist: ["確認所有行李與隨身物品已上車", "阿蘇山區氣候多變，早餐時務必確認天氣與火口預報", "草千里嚴禁推車下草地，請備妥嬰兒揹巾"],
        sections: [
            { type: "sight", time: "10:00 - 12:30", mapQuery: "大觀峰", title: "揮別大分與大觀峰", content: "早上從別府退房，駛入最美公路「九州橫斷道路」。11:30 抵達北阿蘇制高點「<a href='https://www.google.com/maps/search/?api=1&query=大觀峰' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>大觀峰</a>」，俯瞰阿蘇五岳與破火山口絕景。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>順路動線：</strong>這是一條完全不走回頭路的「北阿蘇 ➔ 中阿蘇 ➔ 熊本」完美路線。</li></ul>" },
            { type: "food", time: "13:00 - 14:30", mapQuery: "阿蘇車站", title: "阿蘇車站彈性午餐 (騙人布彩蛋)", content: "下山抵達<a href='https://www.google.com/maps/search/?api=1&query=阿蘇車站' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>阿蘇車站廣場</a>打卡 👉 <strong>【海賊王彩蛋：🤥 騙人布】</strong>。午餐不卡死，可在旁邊的 ASO MILK FACTORY 吃義大利麵，或在道之驛買便當解決。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>神級補給：</strong>旁邊的「道之驛 阿蘇」是全日本滿意度極高的休息站，裡面的「阿蘇限定優酪乳」是雙家庭必搶神物。</li></ul>" },
            { type: "sight", time: "15:00 - 16:00", mapQuery: "草千里之濱", title: "草千里放電", content: "直上核心「<a href='https://www.google.com/maps/search/?api=1&query=草千里之濱' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>草千里之濱</a>」，讓小孩看馬、盡情奔跑放電。火口區視為 Bonus，有開放且無瓦斯警報才順遊。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>天氣備案：</strong>若山上起大霧毫無能見度，絕不上山！直接提早前往熊本市區商場。</li></ul>" },
            { type: "action", time: "16:30 - 18:30", mapQuery: "大津中央公園", title: "下山順遊與抵達熊本 (索隆彩蛋)", content: "往熊本市區的路上，途經「<a href='https://www.google.com/maps/search/?api=1&query=大津中央公園' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>大津中央公園</a>」放風，解鎖 👉 <strong>【海賊王彩蛋：⚔️ 索隆】</strong>，順便玩巨型溜滑梯。<br>18:00 抵達熊本飯店 Check-in。大人步行至旁邊吃米其林推薦的「<a href='https://www.google.com/maps/search/?api=1&query=勝烈亭+新市街本店' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>勝烈亭豬排</a>」犒賞自己，晚上去飯店頂樓泡 SkySpa。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>停車優勢：</strong>新市街光芒飯店周邊有多個大型特約停車場，非常適合休旅車停放。</li></ul>" }
        ],
        tips: "全行程最美也是拉車最長的一天，動線已安排為極度順向，讓駕駛負荷降到最低。"
    },
    {
        day: 6,
        date: "6/3 (三)",
        title: "🐻 Day 6｜熊本市區無車日 (廢人模式)",
        weather: "🌤️ 預報 22-26°C",
        mapLink: "https://www.google.com/maps/dir/熊本新市街/櫻之馬場+城彩苑/熊本城/鶴屋百貨店/SAKURA+MACHI+Kumamoto",
        route: "飯店周邊步行 / 市電",
        hotel: "Candeo Kumamoto Shinshigai",
        checklist: ["確認熊本熊部長今日是否如期在室 (14:30 唱跳秀)", "準備好現金搭乘熊本市電"],
        sections: [
            { type: "food", time: "11:00 - 12:30", mapQuery: "櫻之馬場 城彩苑", title: "櫻之馬場 城彩苑", content: "讓連續開了 5 天車的爸爸們徹底放假！11:00 睡飽散步出門。至熊本城下的「<a href='https://www.google.com/maps/search/?api=1&query=櫻之馬場+城彩苑' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>櫻之馬場 城彩苑</a>」吃海膽可樂餅、特色小吃當早午餐。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>無車日優勢：</strong>全程步行或搭乘路面電車，完全不碰方向盤。</li></ul>" },
            { type: "play", time: "13:00 - 15:00", mapQuery: "鶴屋百貨店", title: "熊本城外觀與部長卡位", content: "推車走平緩的見學通路，參觀<a href='https://www.google.com/maps/search/?api=1&query=熊本城' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>熊本城</a>天守閣外觀（帶幼童不硬爬內部）。隨後散步前往<a href='https://www.google.com/maps/search/?api=1&query=鶴屋百貨店' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>鶴屋百貨</a>一樓的部長辦公室，死守 <strong>14:30 的平日唱跳秀</strong>，讓小孩跟著部長瘋狂放電！", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>避開人潮：</strong>平日下午的部長秀人潮相對友善，但仍建議提早 20 分鐘抵達現場卡位。</li></ul>" },
            { type: "shop", time: "16:00 - 19:30", mapQuery: "SAKURA MACHI Kumamoto", title: "櫻町商場放電與晚餐", content: "回到飯店旁邊的巨型綠建築「<a href='https://www.google.com/maps/search/?api=1&query=SAKURA+MACHI+Kumamoto' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>櫻町商場</a>」。大人逛街吃晚餐，小孩丟進 Asobi Park PLUS 室內光影遊樂園繼續放電。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>極致機能：</strong>商場就在飯店旁，買完東西隨時可以拿上樓放，晚餐選擇極多。</li></ul>" }
        ],
        tips: "真正的度假節奏！讓駕駛回血，並靠熊本熊與市區商場完美收服大小朋友。"
    },
    {
        day: 7,
        date: "6/4 (四)",
        title: "🦕 Day 7｜恐龍與巨型商場抗候神備案 (廢人模式)",
        weather: "🌤️ 預報 21-25°C",
        mapLink: "https://www.google.com/maps/dir/熊本新市街/御船町恐龍博物館/AEON+MALL+熊本/熊本新市街",
        route: "熊本市區 🚗 ↔ 御船町 ↔ AEON 熊本",
        hotel: "Candeo Kumamoto Shinshigai",
        checklist: ["確認恐龍博物館今日無休館", "備妥小孩室內遊樂區要穿的止滑襪"],
        sections: [
            { type: "sight", time: "12:00 - 14:00", mapQuery: "御船町恐龍博物館", title: "御船恐龍 (布魯克彩蛋)", content: "11:00 吃完早午餐後開車出發（車程僅30分）。抵達「<a href='https://www.google.com/maps/search/?api=1&query=御船町恐龍博物館' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>御船町恐龍博物館</a>」，先在旁邊的交流廣場解鎖 👉 <strong>【海賊王彩蛋：💀 布魯克】</strong>！館內巨大恐龍骨架群極具視覺震撼。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>神級備案：</strong>門票極度親民（大人 ¥500，幼童免費），且對幼童來說規模剛剛好，不會逛到睡著。</li></ul>" },
            { type: "shop", time: "14:30 - 17:30", mapQuery: "AEON MALL 熊本", title: "AEON Mall 巨型商場", content: "從博物館開車 10 分鐘即達全九州面積名列前茅的「<a href='https://www.google.com/maps/search/?api=1&query=AEON+MALL+熊本' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>AEON Mall 熊本</a>」。媽媽直攻阿卡將本舖與童裝做最後補給；爸爸帶小孩至室內遊樂區放電。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>晚餐防呆：</strong>傍晚直接在 AEON 美食街或餐廳解決晚餐，避開回市區塞車找餐廳的麻煩。</li></ul>" }
        ],
        tips: "家庭成功率 100% 的室內無腦放電日，全室內抗大雨/高溫，車程極短。"
    },
    {
        day: 8,
        date: "6/5 (五)",
        title: "✈️ Day 8｜市區回血與海賊王終極補考 (順向撤退日)",
        weather: "🌤️ 預報 24-28°C",
        mapLink: "https://www.google.com/maps/dir/熊本新市街/熊本市動植物園/熊本縣廳/阿蘇熊本機場",
        route: "市區 🚗 → 動植物園 → 縣廳 → 機場",
        hotel: "溫暖的家",
        checklist: ["最後的行李封箱確認", "確認護照與重要證件在隨身包", "記得機場周邊加油站『滿油還車』"],
        sections: [
            { type: "shop", time: "09:30 - 12:30", mapQuery: "下通商店街", title: "最後廝殺與退房", content: "發揮飯店地點優勢。媽媽們趁最後 1.5 小時在「<a href='https://www.google.com/maps/search/?api=1&query=下通商店街' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>上下通商店街</a>」做免稅品大掃貨；爸爸們在房間陪小孩、封箱打包行李。11:00 準時退房，市區午餐後驅車離開。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>完美走位：</strong>今天的動線是「市區 ➔ 動物園 ➔ 縣廳 ➔ 機場」完美的向東直線，把零碎時間壓榨到極致且不走回頭路！</li></ul>" },
            { type: "play", time: "13:00 - 14:30", mapQuery: "熊本市動植物園", title: "市動植物園 (喬巴彩蛋)", content: "車程約 20 分鐘（往機場順路）。抵達「<a href='https://www.google.com/maps/search/?api=1&query=熊本市動植物園' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>熊本市動植物園</a>」正門口，立刻解鎖 👉 <strong>【海賊王彩蛋：🦌 喬巴】</strong>！進園看看大象、長頸鹿，抓 1.5 小時讓小孩在戶外消耗最後體力。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>彈性備註：</strong>若時間緊迫，可只在門口與喬巴合照，不買票入園。</li></ul>" },
            { type: "action", time: "14:45 - 17:00", mapQuery: "熊本縣廳", title: "縣廳 (魯夫彩蛋) 與滿油還車", content: "從動物園往東開 10 分鐘，抵達「<a href='https://www.google.com/maps/search/?api=1&query=熊本縣廳' target='_blank' rel='noopener noreferrer' class='text-cyan-700 font-bold underline'>熊本縣廳</a>」。將車停在訪客停車場，步行至銀杏大道尋找 👉 <strong>【海賊王彩蛋：👒 魯夫】</strong>！<br>15:30 前往機場，16:30 於周邊加滿油，<strong>17:00 準時將車輛點交給租車公司</strong>。", deepTip: "<ul class='list-disc pl-4 space-y-1'><li><strong>機場結界前晚餐 (極度重要)：</strong>國際線過安檢後沒有熱食餐廳！務必在國內線 3 樓全新的「Sora-Yoka Area」美食街吃飽喝足、買完機場限定伴手禮（如福砂屋），再去國際線安檢報到。</li></ul>" }
        ],
        tips: "晚班機的極致運用！別人都在趕飛機，您們用海賊王尋寶與大象完美收尾。"
    }
];

export const backupDB = {
    oita: {
        sight: ["⭐ 九州自然動物園 African Safari|自駕必排第一名！可開自家車進野生區，或排隊買叢林巴士親手餵獅子。", "⭐ 大分海之卵水族館 Umitamago|九州頂級親子水族館。戶外Asobeach白沙灘可與海豚零距離，海象互動秀極為精彩。", "⭐ 別府 Global Tower (B-Con Plaza)|推車直達100公尺高空！360度全玻璃觀景台，輕鬆俯瞰別府溫泉鄉四處冒白煙的奇景。", "⭐ 海地獄|別府腹地最大、造景最美。鈷藍色高溫池水壯觀，步道平坦好推車。", "⭐ 灶地獄|互動性最強。導覽員用香菸吹煙霧，還有蒸氣足湯，像看魔術表演。", "⭐ 別府空中纜車|西日本最大型，10分鐘抵達鶴見岳山頂，俯瞰別府灣遼闊景色。", "⭐ 湯布院童話村 Floral Village|英國科茨沃爾德風。有貓頭鷹、山羊和兔子，宛如愛麗絲夢遊仙境。", "⭐ 金鱗湖|由布院指標，半清水半溫泉。環湖步道完善，四歲小孩散步無負擔。", "⭐ 狹霧台展望所|自駕必經觀景台，免爬山就能將由布院盆地絕景盡收眼底。", "⭐ 和諧粉彩樂園 (Harmonyland)|三麗鷗迷的聖地。戶外設施適合幼童，花車大遊行水準極高，建議平日前往避開人潮。", "大分縣立美術館 (OPAM)|大分市必訪！遇大雨的完美救贖，一樓大廳有免費的藝術互動遊具，建築絕美。", "高崎山自然動物園|水族館對面，看滿山野生日本獼猴。設有單軌小電車免去推車爬坡。", "城島高原樂園|木製雲霄飛車聞名，但有專為幼童設計的兒童駕訓班與室內玩具區。", "大分農業文化公園|超大戶外公園。有大型攀爬溜滑梯與湖畔腳踏車，五月初夏放電極佳。", "別府公園|市區綠色寶地，大草地與松樹林，自駕中途讓孩子跑跳喘口氣極佳。", "別府海濱砂湯|浴衣埋入溫熱黑砂中。小孩可在旁邊玩砂看父母被活埋，非常有趣。", "志高湖|海拔600公尺湖泊，有天鵝與鯉魚。湖畔平坦，適合輕鬆野餐。", "別府市竹細工傳統產業會館|精緻竹編工藝，有簡單竹編手作體驗，培養孩子手眼協調與耐心。", "別府樂天地|昭和懷舊山頂遊樂園。搭可愛貓狗纜車上山，名物小鴨競速超逗趣。", "由布院彩色玻璃美術館|古典彩色玻璃與歐式教堂。光影變化迷人，需留意小孩勿觸展品。", "九重自然觀動物園|阿蘇與由布院之間。主打零距離接觸，牽大型犬散步、餵食迷你馬。", "久住花公園|西日本最大花園之一。五月粉蝶花盛開，背倚九重連山拍照極佳。"],
        food: ["⭐ 豐後牛牛排館 Somuri (そむり)|【排餐/單點】別府頂級豐後牛排老店。午間套餐約¥3,000起，晚餐約¥8,000起。肉汁鮮甜軟嫩，提供兒童餐具，小孩可共食，絕對是犒賞大人的極致美味。", "⭐ 燒肉 韓國苑 (別府店)|【單點/吃到飽】主打大分頂級「豐後牛」。吃到飽大人約¥4,000-6,000，小學生半價，學齡前幼童免費！最大亮點是附設超大型室內兒童遊戲區。", "⭐ 由布まぶし 心|【特色蓋飯套餐】必點「豐後牛」土鍋飯！單份套餐約¥3,000，份量大建議大人點餐小孩共食。一鍋三吃法非常有趣，豐後牛炭烤香氣逼人。", "⭐ 大砲拉麵 (別府海岸線店)|【單點】久留米濃厚豚骨拉麵大分人氣分店！大人均消約¥800-1,000。設有榻榻米座位與兒童拉麵套餐(約¥500)，自駕好停車，重口味老饕必吃。", "⭐ 麵堂 香 (別府店)|【單點】大分在地極具人氣的豚骨拉麵。大人均消約¥800-1,000。湯頭濃郁滑順，提供兒童椅與半份拉麵(約¥400)，深受當地家庭喜愛。", "⭐ 別府 胡月 冷麵|【單點】別府冷麵創始名店。大人均消約¥900-1,100。麵條極具嚼勁，湯頭清爽解膩，若小孩怕冷麵嚼勁也有溫熱湯麵選項，大熱天極度推薦。", "地獄蒸工房 鐵輪|必玩體驗！用高溫溫泉蒸氣自己蒸熟海鮮蔬菜，像新奇的料理實驗。", "東洋軒 Toyoken|「雞肉天婦羅」發源地！外皮酥脆肉質軟嫩，對親子客非常友善。", "甘味茶屋 Amamichaya|日式庭園享用「團子汁」。備有寬敞榻榻米座位，對親子客極度友善。", "Joyfull 大分本店|大分發跡的國民餐廳。大停車場、無敵兒童餐，自駕不敗神隊友。", "迴轉壽司 藏壽司/壽司郎|空間大好停車。扭蛋互動與炸薯條能完美安撫挑食的孩子。", "岡本屋賣店|微苦焦糖「地獄蒸布丁」。雞蛋三明治與溫泉烏龍麵適合輕食午餐。", "龜正迴轉壽司 (別府)|別府超神人氣名店！海鮮切片厚到不講武德，CP值極高，但需提早去抽號碼牌排隊。", "とよ常 Toyotsune (別府)|別府站前超人氣天丼！特上天丼的兩隻巨無霸炸蝦視覺震撼，獨門醬汁淋在飯上超開胃。", "海鮮居酒屋 水天|現代裝潢環境乾淨，讓父母好好享用大分在地新鮮漁獲的壽司海鮮。", "六盛 冷麵|湯頭清爽不膩的冷麵名店，適合五月漸暖天氣，店面相對整潔寬敞。", "Snoopy Cha-ya 史努比茶屋|滿滿史努比！可愛造型蛋包飯與抹茶甜點，絕對收服小朋友的心。", "Miffy 森之廚房|米飛兔主題烘焙坊。買兔兔造型麵包帶車上，自駕防餓最佳點心。", "Milch 起司塔|金賞半熟起司蛋糕。有分冷熱，小小一個適合拿手上吃，口感濃郁。", "B-Speak 瑞士捲|由布院排隊甜點。蛋糕體極度膨鬆柔軟，非常適合給小小孩當下午茶。", "金賞可樂餅|湯之坪必吃小吃。牛肉馬鈴薯香氣四溢，現炸熱騰騰，最佳解饞零食。", "Cafe La Ruche|金鱗湖畔景觀咖啡廳。戶外露台座位吃可頌看湖面發呆，氣氛極佳。", "Yufuin Burger House|在地食材手工漢堡。肉排多汁，適合吃膩日式料理時換換口味。", "鞠智 cucuchi|販售高級和菓子與現烤銅鑼燒。店鋪有質感，提供舒適座位區休息。", "九重野草鄉村餐廳|使用大量新鮮野菜的自助餐或定食，健康美味，自駕途經九重必吃。"],
        shop: ["Tokiwa Wasada Town|親子自駕購物霸主！有超大阿卡將與玩具反斗城，買完直接推車上車。", "Park Place 大分|南加州風戶外商場。有AEON大創，中庭有讓小孩玩水噴泉與遊樂設施。", "Youme Town 別府|別府灣旁大型賣場。採買小孩換洗衣物、日常零食與超市水果最佳去處。", "AMU Plaza 大分|大分車站共構。頂樓有鐵道神社與迷你觀光小火車，完美結合購物與溜小孩。", "西松屋 別府店|路面獨立店好停車。臨時缺衣服、幼童牙刷或消耗品，掃貨便宜又齊全。", "Mega Trial 巨型超市|24小時營業超平價。自駕回飯店前來這裡搬鮮奶、果汁與宵夜最划算。", "唐吉訶德 別府店|獨立大店面。爸媽半夜補齊藥妝、免稅品或買奇特玩具的不二選擇。", "Tokiwa 別府店|別府老牌百貨，地下一樓超市是採買大分高級特產(柚子胡椒/香菇)好地方。", "湯之坪街道|由布院散步商店街。開滿手工藝、木製品與甜點店，推推車慢慢逛非常愜意。", "橡子共和國 どんぐりの森|吉卜力專賣店。巨大龍貓車站超好拍，滿滿龍貓周邊大小朋友都失心瘋。", "Snoopy Chocolat|史努比主題巧克力專賣店。包裝極度精美，非常適合買回台灣送禮。", "由布院 Kotokotoya|無添加手工果醬專賣。口味多元(草莓牛奶/無花果)，是很棒的天然伴手禮。", "由布院之森 紀念品店|由布院車站周邊。不搭車也能買到精緻九州鐵道相關木製玩具或紀念品。", "由布院 鞠智|包裝果醬與手工餅乾非常有質感，是送給長輩或主管的高級選擇。", "道之驛 由布院|交流道旁公路休息站。能買在地新鮮蔬果、便宜鮮奶與特色木作。", "別府交通中心|集合千種大分縣伴手禮。不想提大包小包逛街，可安排在此一次買齊。", "海地獄 紀念品店|名產「湯之花(溫泉粉)」，重現別府溫泉滑潤感，還有地獄溫泉入浴劑。", "大分香氛博物館 商店|獨特香水與擴香。時間允許還能讓孩子體驗調製自己的專屬香水。", "和諧樂園 紀念品店|外面買不到的九州限定版三麗鷗商品，滿足六歲半女孩公主夢的最終站。", "道之驛 中津|大分北部休息站。能買到日本第一「中津唐揚炸雞」，極佳車內點心。"]
    },
    kumamoto: {
        sight: ["⭐ 熊本城|日本三大名城。天守閣已全面修復，內部有電梯，推嬰兒車也能輕鬆登頂。", "⭐ 櫻之馬場 城彩苑|熊本城下江戶街景。湧湧座能讓孩子體驗穿傳統服飾與歷史遊戲。", "⭐ 熊本熊廣場 (部長辦公室)|來熊本必朝聖。提前查好時刻表，看熊本熊本尊現場唱跳秀，氣氛超嗨，小孩會跟著跳。", "⭐ 水前寺成趣園|腹地廣大且平坦的日式庭園。非常適合推車散步，池塘有很多錦鯉可餵。", "⭐ 大觀峰展望所|阿蘇北外輪山制高點。火口關閉時的最佳替代絕景，停車場大、推車可達。", "⭐ 阿蘇神社 ＆ 門前町商店街|地震修復完畢。周邊門前町極好逛，水基巡禮喝湧泉，必吃馬肉可樂餅與赤牛烤肉串。", "⭐ 上色見熊野座神社|絕美森林探險，需爬 260 階石階，小孩可當體能放電。⚠️ 雨天青苔濕滑強制取消！", "⭐ 白川水源|日本名水百選。水質清澈步道平緩，帶空瓶讓孩子體驗裝取天然湧泉。", "⭐ 阿蘇農場樂園 (元氣之森)|自駕強推！超大戶外體能挑戰區，還能住宿在可愛的圓頂饅頭屋裡。", "⭐ 草千里之濱 (草千里展望所)|阿蘇山下廣闊大草原。孩子可盡情奔跑、體驗騎馬，風景絕美停車方便。", "⭐ 高千穗峽|宮崎縣絕景！雖然車程稍遠，但峽谷划船與飛瀑景觀極度震撼（划船需預約）。", "⭐ 長部田海床路|退潮才會浮現的「海中道路」。宛如《神隱少女》場景，黃昏拍照極夢幻。", "⭐ 海中水族館海洋甜甜圈|漂浮在海上的環狀水族館。可看海豚、餵食海龜，規模小但極具特色。", "⭐ 天草賞野生海豚|搭船出海看野生海豚，遭遇率高達90%以上，是非常棒的生命教育。", "黑川溫泉|九州最美溫泉街。⚠️ 休旅車嚴禁駛入巷弄，需停外圍大型停車場徒步進入。距熊本市區較遠請留意車程。", "阿蘇卡德利動物樂園|可買飼料餵熊，還有企鵝水豚。甚至提供直升機搭乘看火山口付費體驗。", "阿蘇火山博物館|草千里旁。在安全的室內了解火山知識，很好的自然科學教育景點。", "熊本市動植物園|門票極便宜！園區廣大有大象長頸鹿，附設復古遊樂園，在地家庭首選。", "阿蘇牛奶牧場|可以體驗擠牛奶、餵食小羊與賽豬。動物互動溫和，非常適合當作阿蘇下山時的收心站。", "Asobi Park PLUS (櫻町商場)|位在 KOKO 飯店樓下商場的室內樂園！有光影互動沙灘與氣墊，市區遇雨躲避的絕佳去處。", "鍋瀑布 (小國町)|罕見可「走到瀑布背面」的水濂洞瀑布，夏天消暑，像探險一樣有趣。", "通潤橋 (山都町)|日本最大石造拱橋。特定時間會在橋中央豪邁放水，水花四濺非常震撼。", "熊本熊港八代|為迎接郵輪建的超大公園。數十座大小不一的熊本熊雕像，拍照拍到手軟。", "御輿來海岸|退潮時出現美麗沙紋。被選為日本百大海岸，適合喜歡自然生態的家庭。", "格林主題樂園 Greenland|九州最大遊樂園。日本最多遊樂設施，從幼童溫和到刺激雲霄飛車通通有。"],
        food: ["⭐ 燒肉 孫三郎|【單點/精緻套餐】嚴選九州頂級黑毛和牛。大人均消約¥5,000-7,000。座位寬敞、排煙系統極佳，提供高品質的雙家庭無煙燒肉環境。", "⭐ 彩爐 (Sairo) 燒肉|【單點/家庭套餐】熊本在地連鎖和牛燒肉。大人均消約¥3,000-4,000。提供豐富的九州產特選和牛，設有包廂、平板點餐及兒童專屬小禮物，極度友善。", "⭐ ASO MILK FACTORY|超濃郁阿蘇牛奶、玫瑰霜淇淋。附設義式餐廳，廣大停車場與庭園非常讚。", "⭐ 黑亭拉麵 (本店/下通店)|【單點】熊本拉麵霸主！大人均消約¥900-1,200。特色是濃郁豚骨加上「焦黑蒜油」。備有兒童拉麵套餐(約¥600)，翻桌快，朝聖必吃。", "⭐ 味千拉麵 (本店/各分店)|【單點】風靡全球的熊本拉麵代表！大人均消約¥800-1,000。提供豐富兒童餐(約¥500)與玩具，自駕路面店極多且好停車，小孩極愛。", "⭐ 桂花拉麵 (本店)|【單點】創立於昭和30年的老字號！大人均消約¥900-1,100。濃郁豚骨雞骨白湯加上特製太肉(控肉)極度軟嫩，大人吃肉滿意，小孩喝湯滿足。", "勝烈亭 新市街本店|熊本超強米其林推薦炸豬排！提供兒童餐，高麗菜絲與味噌湯可續加。", "いまきん食堂 (赤牛丼)|【單點蓋飯】阿蘇必吃赤牛名店。半熟赤牛丼約¥2,000，肉質軟嫩小孩好咬。周邊有老街可散步等待。", "燒肉きんぐ (燒肉King)|【吃到飽】家庭客神店！大人約¥3,500，小學生半價，學齡前幼童直接免費！平板點餐送餐快，附餐與甜點極豐富。", "紅蘭亭 下通本店|熊本特有「太平燕」(大骨湯底蔬菜冬粉)。清爽不油膩，非常適合幼童。", "菅乃屋 (馬肉料理)|熊本名產。備有熟食、兒童餐與包廂，家庭用餐無壓力嚐鮮在地特色。", "Center River 漢堡排|現烤多汁漢堡排，上桌時在鐵板上滋滋作響，绝对是小朋友的最爱。", "蜂樂饅頭 熊本本店|上通商店街內，類似台灣紅豆餅。內餡飽滿，自駕逛街隨手買解饞點心。", "迴轉壽司 壽司市場|自駕途中最棒救星。平價好停車，有烏龍麵炸薯條，解決小孩挑食。", "櫻之馬場 城彩苑小吃|海膽可樂餅、即食赤牛串。買了直接在戶外休息區吃，不怕吵別人。", "熊本長崎次郎喫茶室|二樓復古咖啡廳。窗邊可俯瞰熊本路面電車經過，鐵道迷小孩必訪。", "高森田樂之里|200年歷史茅草屋。一家人圍著傳統「地爐」烤田樂，極具文化體驗感。", "白水乃藏 (南阿蘇)|南阿蘇景觀餐廳。美味赤牛漢堡排，室內有榻榻米，窗外就是阿蘇山景。", "草千里 Douce Nuage|草千里旁的優雅景觀咖啡廳。看著草原喝下午茶吃蛋糕非常愜意。", "林檎之樹 (南阿蘇)|果園中的超人氣咖啡廳。必吃自製蘋果派，戶外空間充滿鄉村童話風。", "岡本豆腐店 (小國町)|深山百年老店。提供純粹豆腐定食、炸豆皮，口味清淡適合長輩幼童。", "天草 海鮮家 福伸|天草最強海鮮餐廳。新鮮生魚片，設大停車場與海景榻榻米包廂，極友善。", "天草 L’isola Terrace|南洋度假風海景餐廳。除了海鮮西餐，必買極品車上點心「天草鹽麵包」。", "天草 奴壽司|日本百大名店級別的握壽司。若父母想犒賞自己，職人手藝值得開車前往。"],
        shop: ["AMU PLAZA 熊本|熊本車站直通大型商場。有BicCamera、航海王專賣店與戶外庭園瀑布。", "SAKURA MACHI 櫻町熊本|結合結合巴士總站大型綠建築。頂樓有巨型熊本熊，地下街有超市，頂樓花園。", "AEON MALL 熊本|自駕必去！免費超大停車場，有童裝、室內遊樂區，甚至附設天然溫泉。", "Youme Town 光之森|熊本極具規模美式購物中心，品牌齊全，當地人週末採買重鎮(有阿卡將)。", "Youme Town 濱線|超大型連鎖商場，停車方便。內有豐富的母嬰用品與生活雜貨。", "上通商店街|有遮雨棚的步行街。路面平坦適合推推車，有許多老字號文具店與咖啡廳。", "下通商店街|熊本最熱鬧商店街。藥妝店密集度最高，買免稅品來這裡就對了。", "鶴屋百貨店|熊本最高級老字號百貨。一樓是熊本熊辦公室，地下美食街買在地高級伴手禮。", "HAB@ 熊本|全新商場。有大創質感升級品牌「Standard Products」，非常好買。", "唐吉訶德 熊本中央店|獨棟唐吉訶德附設停車場。自駕隨時可以來搬尿布、零食、免稅品。", "熊本縣物產館|市區內集結熊本各鄉鎮特產。沒時間跑郊區的話來這裡買伴手禮最省事。", "城彩苑 櫻之小路|江戶風情商店街。買熊本特色茶葉、當地限定版的熊本熊周邊小物。", "阿卡將本舖 (Youme光之森)|日本必逛母嬰用品天堂。衣服、副食品、推車配件一次買齊。", "西松屋 (路面店)|自駕容易抵達。主打超級平價的童裝與嬰兒消耗品，搜Google Map即有。", "Mega Trial 菊陽店|24小時巨型超市，自駕族補給神庫！半夜買超級便宜飲料、生鮮與日用品。", "道之驛 阿蘇|滿意度極高公路休息站。必買阿蘇限定鮮奶、優酪乳及當地手工赤牛便當。", "道之驛 大津|往阿蘇必經之路。以「地瓜」為主題，買各種好吃的地瓜甜點與烤地瓜。", "Aso Milk Factory 伴手禮|除了吃冰，起司、年輪蛋糕及國際三星獎「ASO MILK」都是頂級伴手禮。", "L'isola Terrace 天草|主打天草海鹽相關製品、珍珠以及海洋風的雜貨，包裝精美。", "阿蘇熊本機場 國內線商店|回國前最後衝刺！全新改裝伴手禮陣容極強，知名土產陣太鼓皆有。"]
    }
};
