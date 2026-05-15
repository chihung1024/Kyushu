// Accommodation data for the confirmed primary lodging plan.

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
    access: 'JR 別府站步行約 8-10 分；北濱海邊區，適合別府 4 晚連泊基地。',
    parking: '指定第一/第二停車場；住宿者優待入庫後 21 小時最大 ¥700；先到先停，滿車即改周邊停車場。',
    features: [
      '日式房空間較大，適合 2大2小同房、鋪被與攤行李。',
      '頂樓展望溫泉可作為每天回飯店後的固定回血儀式。',
      '北濱位置步行可處理晚餐、超市、百貨、竹瓦溫泉與海邊散步。',
      '中學生以上可能另收溫泉入浴稅；入住時現場核對。'
    ],
    nav: [
      { label: '飯店導航', query: 'Hotel New Tsuruta Beppu' },
      { label: '指定停車場', query: 'ザ・パーク 別府北浜 ホテルニューツルタ 駐車場' },
      { label: 'Youme Town 別府', query: 'ゆめタウン別府' },
      { label: 'Tokiwa 別府店', query: 'トキハ別府店' }
    ],
    life: [
      { name: 'Youme Town 別府', role: '主力補給', time: '食品 9:30-21:00 / 餐廳多為 11:00-21:00', use: '水、早餐、宵夜、DAISO、KALDI、童裝、雨天吃逛。', search: 'ゆめタウン別府' },
      { name: 'Tokiwa 別府店', role: '百貨 / 伴手禮', time: '10:00-19:00', use: '大分伴手禮、地下食品、臨時衣物與較精緻採買。', search: 'トキハ別府店' },
      { name: 'MEGA Trial 別府店', role: '晚間保底', time: '晚間採買保底', use: '若 Youme Town 已收或孩子累，改買熟食、飲料、隔日早餐。', search: 'MEGAセンタートライアル 別府店' },
      { name: '竹瓦溫泉 / 北濱海邊', role: '近距離散步', time: '飯後短走', use: '不開車也可補一點別府感；孩子累就直接回房。', search: '竹瓦温泉 別府' }
    ],
    rules: [
      '抵達後先停車、Check-in、確認鋪床/入浴稅，再決定是否外出。',
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
    address: '〒860-0803 熊本県熊本市中央区新市街8-7',
    phone: '+81-96-327-8480',
    check: 'Check-in 15:00 起；Check-out 11:00 前。',
    access: '辛島町路面電車站步行約 3 分；下通、新市街與 SAKURA MACHI 都可步行處理。',
    parking: '飯店無專用停車場；優先導航 TERRACE87 / 辛島公園地下駐車場等周邊停車場，避免在飯店前臨停。',
    features: [
      '頂樓 SkySpa / 露天風呂 / 桑拿適合 Day5-7 回城後恢復。',
      '位於新市街核心，晚餐、藥妝、商店街與百貨都可步行完成。',
      '退房日先裝車、核對停車費與油量，再進入雕像收集與返程模式。',
      '早餐可視體力加買；Room Only 不把早餐綁死。'
    ],
    nav: [
      { label: '飯店導航', query: 'CANDEO HOTELS 熊本新市街' },
      { label: 'TERRACE87', query: 'TERRACE87 駐車場 熊本市中央区新市街8-7' },
      { label: 'SAKURA MACHI', query: 'SAKURA MACHI Kumamoto' },
      { label: '下通商店街', query: '熊本 下通商店街' }
    ],
    life: [
      { name: 'SAKURA MACHI Kumamoto', role: '主力吃逛 / 交通', time: '商店多為 10:00-20:00/21:00；餐飲多為 11:00-21:00/22:00', use: '美食街、Montbell、Kumamon 店、巴士總站、雨天室內基地。', search: 'SAKURA MACHI Kumamoto' },
      { name: '下通 / 新市街', role: '晚餐與藥妝', time: '晚餐後步行圈', use: '黑亭、桂花、勝烈亭、便利商店、藥妝與宵夜；停好車後不再開。', search: '熊本 下通商店街' },
      { name: '鶴屋百貨', role: 'Day6 舒適案', time: '百貨時段', use: '熊本熊廣場前後的冷氣、餐飲、伴手禮與長輩休息點。', search: '鶴屋百貨 熊本' },
      { name: '辛島公園地下 / TERRACE87', role: '停車保底', time: '入住、退房、臨時回飯店', use: '先停車再走路；熊本市區單行道多，不在飯店口硬臨停。', search: '辛島公園地下駐車場' }
    ],
    rules: [
      'Day5 到熊本後不再開車找晚餐，停好車後以步行圈處理。',
      'Day6 是市區恢復日，住宿區生活機能比多跑景點重要。',
      'Day8 退房後不做大型採買；15:30 後只處理加油、還車、機場。'
    ]
  }
];
