// Accommodation data for the confirmed primary lodging plan.
// The surrounding-life notes are intentionally practical: what to buy, when to use it, and what not to do on site.

const accommodationData = [
  {
    key: 'beppu-new-tsuruta',
    icon: '♨️',
    area: '大分 / 別府基地',
    stay: '5/29 (五) - 6/2 (二)｜4晚',
    status: '首選・採用',
    name: '別府溫泉 新鶴田飯店',
    englishName: 'Hotel New Tsuruta Beppu Onsen',
    room: '標準日式房｜海景｜禁菸｜2大2小｜約55㎡',
    price: '單一家庭 4晚 TWD 12,262｜平均約 TWD 3,066 / 晚｜訂單幣別 ¥61,220',
    address: '〒874-0920 大分県別府市北浜1-14-15',
    phone: '+81-977-22-1110',
    check: 'Check-in 15:00 起；Check-out 10:00 前。',
    access: 'JR 別府站步行約 8 分；大分空港巴士到「別府北浜」後約步行 2 分。北濱海邊區適合別府 4 晚連泊。',
    parking: '指定第一/第二停車場；住宿者優待入庫後 21 小時最大 ¥700；先到先停，滿車即改周邊付費停車場，不在飯店前久停。',
    features: [
      '日式房空間較大，適合 2大2小同房、鋪被與攤行李。',
      '北濱生活圈很強：百貨、超市、商場、便利商店、晚間 Don Quijote 與海邊散步都可處理。',
      '頂樓展望溫泉可作為每天回飯店後的固定回血儀式。',
      '竹瓦溫泉非常近；但有小孩時只當飯後短走或大人輪流體驗，不排成每日任務。',
      '中學生以上可能另收溫泉入浴稅；入住時現場核對。'
    ],
    nav: [
      { label: '飯店導航', query: 'Hotel New Tsuruta Beppu' },
      { label: '指定停車場', query: 'ザ・パーク 別府北浜 ホテルニューツルタ 駐車場' },
      { label: 'Youme Town 別府', query: 'ゆめタウン別府' },
      { label: 'Tokiwa 別府店', query: 'トキハ別府店' },
      { label: 'Don Quijote 別府', query: 'ドン・キホーテ 別府店' },
      { label: 'MEGA Trial 別府', query: 'スーパーセンタートライアル 別府店' }
    ],
    life: [
      {
        name: '便利商店圈：Lawson / FamilyMart / 7-Eleven',
        role: '最近補水 / 早餐 / ATM',
        distance: '飯店周邊約步行 2-6 分鐘圈',
        time: '多數 24 小時；實際以現場店鋪為準',
        use: '第一晚抵達很晚、孩子突然餓、缺水、牛奶、冰品、早餐飯糰、濕紙巾、小額 ATM 時先用這層，不開車。',
        printUse: '晚到先買水、牛奶、早餐飯糰、濕紙巾；先步行，不再開車。',
        warning: '不要為了找大型超市重新開車；Day1 晚上便利商店就足夠。',
        search: 'ローソン 別府北浜 ファミリーマート 別府流川 セブンイレブン 別府タワー'
      },
      {
        name: 'Tokiwa 別府店 / 別府 Food Kitchen',
        role: '最近百貨型食品補給',
        distance: '飯店旁北濱生活圈，步行約 2-4 分鐘',
        time: '10:00-19:00',
        use: 'B1 食品超市可買蔬果、肉魚、現做熟食、成城石井類進口食品；適合 Day1/Day4 早回飯店時補晚餐、早餐、伴手禮。',
        printUse: '最近食品超市；買熟食、蔬果、早餐與精緻伴手禮。',
        warning: '19:00 關門偏早；超過時間直接改 Youme Town、Donki 或 Trial。',
        search: 'トキハ別府店 フードキッチン'
      },
      {
        name: 'Youme Town 別府',
        role: '主力商場 / 親子補給基地',
        distance: '飯店南側步行可達；開車也容易停',
        time: '食品/直營 9:30-21:00；專門店 10:00-21:00；餐廳多為 11:00-21:00',
        use: '最適合 Day2 Harmonyland 後：食品超市、餐廳街、DAISO、KALDI、服飾、甜點、休息空間、廁所、嬰幼兒設備、ATM 一次完成。',
        printUse: 'Day2 主力；吃飯、超市、DAISO、KALDI、童裝、廁所、ATM 一次處理。',
        warning: '不要把它當觀光點逛太久；目標是吃飯、補水、隔日早餐、孩子用品。',
        search: 'ゆめタウン別府'
      },
      {
        name: 'Don Quijote 別府店',
        role: '晚間藥妝 / 雜貨 / 免稅',
        distance: '北濱到南的ヶ浜町方向，短程步行或開車',
        time: '9:00-翌 2:00；無定休',
        use: '適合 Youme Town / Tokiwa 關門後補藥妝、日用品、零食、雨具、行動配件、伴手禮；有 ATM、醫藥品、酒類、免稅與停車。',
        printUse: '晚間救場；藥妝、零食、雨具、行動配件、伴手禮。',
        warning: '商品密度高、容易失控購物；設定 30 分鐘上限。',
        search: 'ドン・キホーテ 別府店'
      },
      {
        name: 'MEGA Trial 別府店',
        role: '24 小時大型採買保底',
        distance: '需開車；適合回飯店前順路處理',
        time: '24 小時；服務櫃台 9-18；家電 9-24；藥妝 9-22；免稅 24 小時',
        use: '孩子睡了但大人還需要水、早餐、熟食、尿布濕巾、車上點心、大量飲料時使用；比市區小店更適合大量採買。',
        printUse: '24 小時大型採買；水、熟食、早餐、尿布濕巾、車上點心。',
        warning: '不是步行圈；只在已經開車或其他店已關時使用。',
        search: 'スーパーセンタートライアル 別府店'
      },
      {
        name: '竹瓦溫泉 / 北濱海邊',
        role: '不開車的別府感',
        distance: '竹瓦溫泉官方/周邊資料顯示距飯店很近；飯後短走即可',
        time: '飯後 15-30 分鐘短走；營業以官方/現場公告為準',
        use: '大人想補一點別府溫泉街氛圍、孩子需要散步消耗體力時使用；不是主線景點。',
        printUse: '飯後短走，補別府感；孩子累就直接回房。',
        warning: '不要為了砂湯或外湯壓縮孩子睡眠。',
        search: '竹瓦温泉 別府 北浜'
      },
      {
        name: '北濱 / 別府站步行餐飲圈',
        role: '停車後晚餐圈',
        distance: '飯店、北濱、站前通、別府站東口皆屬步行可處理範圍',
        time: '晚餐時段依各店公告；熱門店可提早或改保底',
        use: '晚餐不想再開車時，以六盛、海鮮、冷麵、拉麵、家庭餐與便利店組合處理。',
        printUse: '停好車後用步行晚餐圈；不再重新開車找餐廳。',
        warning: '排隊超過 30 分鐘，直接降級到商場/便利商店/飯店回血。',
        search: '別府 北浜 夕食 子連れ'
      }
    ],
    rules: [
      '抵達後先停車、Check-in、確認鋪床/入浴稅，再決定是否外出。',
      '19:00 前：Tokiwa / Youme Town；21:00 後：Don Quijote / Trial；孩子累：便利商店。',
      '停車滿位不要繞太久；先找周邊付費停車場，再處理晚餐。',
      'Day1、Day4 晚上優先飯店回血，不為補購物延後孩子睡眠。'
    ]
  },
  {
    key: 'kumamoto-candeo',
    icon: '🐻',
    area: '熊本市區基地',
    stay: '6/2 (二) - 6/5 (五)｜3晚',
    status: '首選・採用',
    name: 'Candeo Hotels 熊本新市街',
    englishName: 'CANDEO HOTELS KUMAMOTO SHINSHIGAI',
    room: '好萊塢雙床房｜Room Only｜兩間房已備註 close together',
    price: '單一家庭 3晚約 ¥44,514｜約 TWD 9,348｜平均約 TWD 3,116 / 晚',
    address: '〒860-0803 熊本県熊本市中央区新市街8-7 TERRACE87（フロント12F）',
    phone: '+81-96-327-8480',
    check: 'Check-in 15:00 起；Check-out 11:00 前。',
    access: '熊本站搭市電至辛島町後步行約 3 分；熊本城約步行 12 分、熊本城 Hall 約步行 7 分。',
    parking: '飯店無專用停車場；優先導航 TERRACE87 或官方列示提攜停車場。飯店緊鄰拱廊且單行道多，官方提醒不要在飯店前上下客或臨停。',
    features: [
      '頂樓 SkySpa / 露天風呂 / 自動ロウリュ桑拿 / 水風呂適合 Day5-7 回城後恢復。',
      '新市街 + 下通 + SAKURA MACHI 全步行圈；晚餐、藥妝、便利商店、百貨與交通都不用再開車。',
      '辛島町與 SAKURA MACHI 交通便利，Day6 熊本熊、百貨、市區修復日都容易操作。',
      '退房日先裝車、核對停車費與油量，再進入雕像收集與返程模式。',
      'Room Only 不綁早餐；早餐可依體力與出發時間現場加買或改便利商店/商場。'
    ],
    nav: [
      { label: '飯店導航', query: 'CANDEO HOTELS 熊本新市街' },
      { label: 'TERRACE87', query: 'TERRACE87 駐車場 熊本市中央区新市街8-7' },
      { label: 'SAKURA MACHI', query: 'SAKURA MACHI Kumamoto' },
      { label: '下通商店街', query: '熊本 下通商店街' },
      { label: '鶴屋百貨', query: '鶴屋百貨店 熊本' },
      { label: '辛島公園地下', query: '辛島公園地下駐車場' }
    ],
    life: [
      {
        name: 'TERRACE87 / 提攜停車場',
        role: '入住停車第一順位',
        distance: 'TERRACE87 為飯店敷地內立體停車場；46 台、不可預約',
        time: '住宿優惠 15:00-翌 11:00；1泊 ¥1,300；翌 11:00 後每小時 ¥300',
        use: '導航目的地直接設停車場，不設飯店門口。連泊若不出庫，時間外費用較可控；每日出入庫要另外估費。',
        printUse: '直接導航停車場；飯店前不臨停。TERRACE87 46 台、不可預約、1泊 ¥1,300。',
        warning: '滿車時立刻改辛島公園地下/其他提攜，不在單行道繞圈。',
        search: 'TERRACE87 駐車場 熊本市中央区新市街8-7'
      },
      {
        name: '便利商店圈：7-Eleven / Lawson / FamilyMart',
        role: '最近補水 / 早餐 / ATM',
        distance: '辛島町 / 新市街周邊 40-250m 級距內多店',
        time: '多數 24 小時；Sakura Machi 店等可能非 24 小時',
        use: '早餐飯糰、牛奶、水、冰、退房日車上點心、ATM、小孩臨時宵夜都用這層。',
        printUse: '新市街步行圈內多間便利商店；早餐、牛奶、水、ATM、車上點心。',
        warning: '退房日不要再大採買；只買車上必要品。',
        search: 'セブンイレブン 熊本新市街 ローソン 熊本新市街 ファミリーマート 熊本新市街'
      },
      {
        name: 'SAKURA MACHI Kumamoto',
        role: '室內基地 / 交通 / 親子補給',
        distance: '飯店步行圈；辛島町站、巴士總站與市中心商場相連',
        time: '商店約 10:00-20:00/21:00；餐飲約 11:00-21:00/22:00；屋上/露台多為 9:00-23:00',
        use: '雨天、太熱、孩子需要廁所/休息、Montbell、餐飲、食品、伴手禮、巴士資訊都優先用這裡。3F 有授乳室與尿布更換；B1 有冷藏 locker 與 SAGAWA 手荷物/宅配服務。',
        printUse: '室內基地；餐飲、Montbell、巴士、親子廁所、授乳室、冷藏 locker、宅配。',
        warning: '不要把商場逛成半日行程；Day6 以熊本熊時間為主。',
        search: 'SAKURA MACHI Kumamoto'
      },
      {
        name: '下通 / 新市街 / 銀座通步行餐飲圈',
        role: '晚餐與宵夜主戰場',
        distance: '飯店出門即新市街；下通拱廊步行可達',
        time: '餐廳、拉麵、居酒屋、藥妝依店別；晚間選擇多',
        use: '黑亭、桂花、勝烈亭、紅蘭亭、藥妝、甜點、宵夜都在步行圈。Day5 到熊本後停好車就用這圈，不再開車。',
        printUse: '停車後的晚餐圈；黑亭、桂花、勝烈亭、紅蘭亭、藥妝與宵夜。',
        warning: '拱廊與巷道晚上人多，兩家約定集合點，避免分散太遠。',
        search: '熊本 下通 新市街 グルメ 子連れ'
      },
      {
        name: '鶴屋百貨 / 熊本熊廣場周邊',
        role: 'Day6 冷氣修復案',
        distance: '熊本熊廣場與鶴屋東館/本館步行串聯',
        time: '鶴屋營業以官方公告為準；百貨時段多為白天至傍晚',
        use: 'Day6 看熊本熊前後，用鶴屋處理冷氣、廁所、餐飲、伴手禮、兒童用品、外國顧客服務與退稅。官方樓層資料列多處設有嬰兒床廁所/授乳空間。',
        printUse: 'Day6 熊本熊前後的冷氣/餐飲/廁所/兒童用品/伴手禮/退稅基地。',
        warning: '不要為百貨採買壓縮熊本熊卡位；錯過場次不追下一場。',
        search: '鶴屋百貨 熊本 熊本熊廣場'
      },
      {
        name: 'Candeo SkySpa / 飯店內回血',
        role: '夜間恢復體力',
        distance: '飯店內頂樓',
        time: '住客使用時段以現場公告為準',
        use: '長途移動、天草日或孩子睡後，大人輪流泡湯/桑拿；展望露天、サウナ、水風呂、外気浴可作為熊本段固定回血。',
        printUse: '飯店內頂樓回血；長途日後泡湯/桑拿，不再外出加點。',
        warning: '有刺青/小孩入浴規則以飯店現場公告為準。',
        search: 'カンデオホテルズ熊本新市街 スカイスパ'
      },
      {
        name: '熊本城 / 熊本城 Hall 步行圈',
        role: '早到或傍晚短走',
        distance: '官方標示熊本城約步行 12 分；熊本城 Hall 約步行 7 分',
        time: '只做外觀短走；入場與活動以官方公告為準',
        use: 'Day6 體力好、天氣好可做城彩苑/城外觀短打；不是恢復日必跑景點。',
        printUse: '早到/傍晚短走用；熊本城約 12 分、熊本城 Hall 約 7 分。',
        warning: '孩子累或下雨就改 SAKURA MACHI / 鶴屋。',
        search: '熊本城 城彩苑 熊本城ホール'
      }
    ],
    rules: [
      'Day5 到熊本後不再開車找晚餐，停好車後以步行圈處理。',
      '停車導航設 TERRACE87 / 辛島公園地下，不設飯店門口；滿車直接換場。',
      'Day6 是市區恢復日，住宿區生活機能比多跑景點重要。',
      'Day8 退房後不做大型採買；15:30 後只處理加油、還車、機場。'
    ]
  }
];
