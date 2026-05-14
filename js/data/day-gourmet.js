// Per-day gourmet decision source data.

const dayGourmetDB = {
  "1": {
    "headline": "抵達日不追名店；先讓兩台車、孩子與駕駛穩住，午餐以南阿蘇快速補給為主，晚餐抵達別府後再決定是否升級。",
    "rules": [
      "取車與右駕安全優先於美食",
      "午餐要好停車、有廁所、可外帶",
      "抵達別府太晚就用超市/美食街收尾"
    ],
    "categories": [
      {
        "icon": "🍙",
        "title": "今日最穩",
        "note": "防餓、停車、廁所、快速撤退優先。",
        "items": [
          {
            "name": "俵山交流館 萌の里",
            "rank": "S",
            "meal": "午餐補給",
            "area": "娜美像旁 / 南阿蘇入口",
            "order": "在地便當、飯糰、牛奶、蔬果、點心",
            "note": "第一天最符合右駕適應節奏；停車、廁所、娜美像在同一區。",
            "fit": "先買能上車吃的食物，不排正式午餐。",
            "caution": "",
            "mapQuery": "俵山交流館 萌の里",
            "purpose": "主線補給",
            "timing": "抵達後第一站",
            "queueRisk": "低",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "便利商店 / 車上點心",
            "rank": "B",
            "meal": "防餓救場",
            "area": "南阿蘇沿線",
            "order": "飯糰、三明治、水、果汁、果凍飲",
            "note": "若取車拖延，這比追餐廳更安全。",
            "fit": "先處理孩子血糖，再決定景點。",
            "caution": "",
            "mapQuery": "南阿蘇 コンビニ",
            "purpose": "救場",
            "timing": "取車超時",
            "queueRisk": "低",
            "kidFit": "高",
            "takeout": "可"
          }
        ],
        "open": true
      },
      {
        "icon": "🥩",
        "title": "高優先但不硬追",
        "note": "取車順、孩子狀態好才升級。",
        "items": [
          {
            "name": "くまもと和ぎゅう まつおか",
            "rank": "A",
            "meal": "赤牛午餐備案",
            "area": "熊本機場往南阿蘇方向",
            "order": "赤牛丼、赤牛漢堡排、燒肉定食",
            "note": "能把熊本赤牛提前吃掉，但不能壓縮南阿蘇與進別府。",
            "fit": "取車超過 13:30 直接降級，不補償。",
            "caution": "",
            "mapQuery": "くまもと和ぎゅう まつおか",
            "purpose": "地方代表",
            "timing": "取車順利",
            "queueRisk": "中",
            "kidFit": "中高",
            "takeout": "否"
          },
          {
            "name": "白水乃藏",
            "rank": "A",
            "meal": "南阿蘇赤牛備案",
            "area": "南阿蘇",
            "order": "赤牛漢堡排、赤牛料理、定食",
            "note": "比排隊赤牛丼更適合親子團。",
            "fit": "若孩子上車睡著，直接略過。",
            "caution": "",
            "mapQuery": "白水乃蔵 南阿蘇",
            "purpose": "地方代表",
            "timing": "白川水源前後",
            "queueRisk": "中",
            "kidFit": "中高",
            "takeout": "否"
          }
        ],
        "open": false
      },
      {
        "icon": "🛟",
        "title": "晚餐保底",
        "note": "抵達別府後先入住、停車，再決定。",
        "items": [
          {
            "name": "Youme Town 別府 / Tokiwa / MEGA Trial",
            "rank": "B",
            "meal": "抵達後補給",
            "area": "別府市區",
            "order": "熟食、便當、麵包、飲料、隔天早餐",
            "note": "Day1 最需要的是成功抵達與早睡。",
            "fit": "入住後全員累就不要再找餐廳。",
            "caution": "",
            "mapQuery": "ゆめタウン別府",
            "purpose": "保底補給",
            "timing": "抵達別府後",
            "queueRisk": "低",
            "kidFit": "高",
            "takeout": "可"
          }
        ],
        "open": false
      }
    ]
  },
  "2": {
    "headline": "Harmonyland 是主菜；午餐服從樂園節奏，晚餐只在孩子還有體力時升級，否則商場保底。",
    "rules": [
      "樂園日不為餐廳離線太遠",
      "晚餐先看孩子電量",
      "補水、點心比排名店重要"
    ],
    "categories": [
      {
        "icon": "🛒",
        "title": "今日最穩",
        "note": "離園後一次完成晚餐、採買、隔天補給。",
        "items": [
          {
            "name": "Youme Town 別府美食區 / 超市",
            "rank": "S",
            "meal": "晚餐 + 補給",
            "area": "別府海邊商場",
            "order": "美食街、超市熟食、壽司、麵包、飲料、隔天點心",
            "note": "樂園日最穩：停車、廁所、餐飲、補給都集中。",
            "fit": "16:30 離園後優先使用，不再開車追名店。",
            "caution": "",
            "mapQuery": "ゆめタウン別府",
            "purpose": "主線補給",
            "timing": "離園後",
            "queueRisk": "低",
            "kidFit": "高",
            "takeout": "可"
          }
        ],
        "open": true
      },
      {
        "icon": "🥩",
        "title": "有體力才升級",
        "note": "大人想吃肉，但不要把樂園日變成第二場硬仗。",
        "items": [
          {
            "name": "焼肉 元相 本店",
            "rank": "A",
            "meal": "豐後牛 / 和牛晚餐",
            "area": "別府石垣東",
            "order": "上カルビ、上ロース、赤身拼盤、牛タン、冷麵",
            "note": "比牛排館更適合雙家庭分食。",
            "fit": "能訂位、孩子不崩潰才去；否則回商場。",
            "caution": "",
            "mapQuery": "焼肉 元相 本店 別府",
            "purpose": "高優先主餐",
            "timing": "樂園後仍有體力",
            "queueRisk": "中",
            "kidFit": "中高",
            "takeout": "否"
          },
          {
            "name": "個室焼肉 亜李蘭別邸 別府店",
            "rank": "A",
            "meal": "包廂燒肉",
            "area": "別府",
            "order": "黒毛和牛三種、和牛カルビ、ファミリーセット",
            "note": "包廂與座位穩定度高，親子壓力較低。",
            "fit": "想要舒服座位勝過名氣時用。",
            "caution": "",
            "mapQuery": "個室焼肉 亜李蘭別邸 別府店",
            "purpose": "親子穩定",
            "timing": "晚餐",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "否"
          }
        ],
        "open": false
      },
      {
        "icon": "🚫",
        "title": "不建議硬追",
        "note": "樂園日不追排隊餐。",
        "items": [
          {
            "name": "亀正くるくる寿司",
            "rank": "X",
            "meal": "不排",
            "area": "別府",
            "order": "改 Day3 晚餐才考慮",
            "note": "排隊不可控，會拖垮樂園日收尾。",
            "fit": "Day2 不為它排隊。",
            "caution": "",
            "mapQuery": "亀正くるくる寿司 別府",
            "purpose": "不建議",
            "timing": "Day2",
            "queueRisk": "高",
            "kidFit": "中",
            "takeout": "否"
          }
        ],
        "open": false
      }
    ]
  },
  "3": {
    "headline": "別府在地味主日：上午地獄短打，午餐用地獄蒸或冷麵；下午海之卵時程優先，所有餐廳都不能壓掉 13:30 到館。",
    "rules": [
      "12:45 前後往海之卵移動",
      "體驗餐與表演時程衝突時，表演優先",
      "生魚片只給大人保守嘗鮮"
    ],
    "categories": [
      {
        "icon": "♨️",
        "title": "今日最穩",
        "note": "二選一，不要地獄蒸 + 冷麵都硬塞。",
        "items": [
          {
            "name": "地獄蒸し工房 鉄輪",
            "rank": "S",
            "meal": "體驗午餐",
            "area": "別府鐵輪",
            "order": "蒸蝦、貝類、魚、玉米、地瓜、蛋",
            "note": "別府最有記憶點的親子料理體驗。",
            "fit": "現場號碼制；若等待過長，立刻改六盛或便利商店，不壓海之卵。",
            "caution": "",
            "mapQuery": "地獄蒸し工房 鉄輪",
            "purpose": "地方體驗",
            "timing": "地獄後午餐",
            "queueRisk": "中高",
            "kidFit": "高",
            "takeout": "否"
          },
          {
            "name": "六盛 松原本店",
            "rank": "S",
            "meal": "別府冷麵",
            "area": "別府松原",
            "order": "別府冷麵、溫麵、叉燒麵、飯糰",
            "note": "6 月天氣熱很適合，且地方性明確。",
            "fit": "湯賣完可能提早結束；有蕎麥粉過敏就避開。",
            "caution": "",
            "mapQuery": "六盛 松原本店",
            "purpose": "地方代表",
            "timing": "午餐/晚餐",
            "queueRisk": "中",
            "kidFit": "中高",
            "takeout": "否"
          }
        ],
        "open": true
      },
      {
        "icon": "🍮",
        "title": "甜點零食",
        "note": "地獄區補糖，不替代主餐。",
        "items": [
          {
            "name": "岡本屋売店 地獄蒸布丁",
            "rank": "A",
            "meal": "甜點補糖",
            "area": "明礬溫泉",
            "order": "地獄蒸布丁、蒸蛋、輕食",
            "note": "地獄區最強甜點記憶點，適合短停外帶。",
            "fit": "只買布丁可快速撤退；不要為內用排太久。",
            "caution": "",
            "mapQuery": "岡本屋売店 地獄蒸プリン",
            "purpose": "甜點",
            "timing": "地獄區前後",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "可"
          }
        ],
        "open": false
      },
      {
        "icon": "🐟",
        "title": "晚餐攻擊",
        "note": "只放晚餐，不放海之卵前。",
        "items": [
          {
            "name": "とよ常 別府駅前店 / 本店",
            "rank": "A",
            "meal": "天丼 / 琉球丼",
            "area": "別府站周邊",
            "order": "特上天丼、りゅうきゅう丼、刺身定食",
            "note": "炸物、海鮮、白飯兼顧，親子成功率較高。",
            "fit": "排隊比壽司名店可控時使用。",
            "caution": "",
            "mapQuery": "とよ常 別府",
            "purpose": "高優先晚餐",
            "timing": "海之卵後",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "否"
          },
          {
            "name": "亀正くるくる寿司",
            "rank": "B",
            "meal": "壽司願望清單",
            "area": "別府",
            "order": "地魚、白身魚、炙り魚、貝類",
            "note": "好吃但排隊不可控。",
            "fit": "只在不趕時間、候位可接受時攻；排太長立刻撤。",
            "caution": "",
            "mapQuery": "亀正くるくる寿司 別府",
            "purpose": "願望餐",
            "timing": "晚餐",
            "queueRisk": "高",
            "kidFit": "中",
            "takeout": "否"
          }
        ],
        "open": false
      }
    ]
  },
  "4": {
    "headline": "Safari + 由布院不做美食馬拉松；白天用由布院小吃短打，晚上回別府坐下吃一餐穩的。",
    "rules": [
      "B-speak 不預約就不執著",
      "由布院小吃服務行程，不反客為主",
      "晚上優先可坐、可停車、可快速點餐"
    ],
    "categories": [
      {
        "icon": "🥩",
        "title": "今日最穩",
        "note": "回別府後補能量。",
        "items": [
          {
            "name": "焼肉 元相 本店",
            "rank": "S",
            "meal": "回別府晚餐",
            "area": "別府石垣東",
            "order": "上カルビ、上ロース、赤身拼盤、牛タン、冷麵",
            "note": "Safari + 由布院後最適合的犒賞型晚餐。",
            "fit": "能訂位就用；孩子累到無法坐餐廳就改超市。",
            "caution": "",
            "mapQuery": "焼肉 元相 本店 別府",
            "purpose": "主線晚餐",
            "timing": "回別府後",
            "queueRisk": "中",
            "kidFit": "中高",
            "takeout": "否"
          },
          {
            "name": "焼肉 韓国苑 別府店",
            "rank": "A",
            "meal": "家庭燒肉保底",
            "area": "別府",
            "order": "カルビ、ハラミ、石鍋拌飯、兒童可吃附餐",
            "note": "菜單廣、座位與撤退比名店穩。",
            "fit": "元相訂不到或孩子需要更寬鬆時用。",
            "caution": "",
            "mapQuery": "焼肉 韓国苑 別府店",
            "purpose": "保底主餐",
            "timing": "晚餐",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "否"
          }
        ],
        "open": true
      },
      {
        "icon": "🍰",
        "title": "由布院甜點零食",
        "note": "只做短打，不為甜點犧牲回程。",
        "items": [
          {
            "name": "B-speak P-roll",
            "rank": "A",
            "meal": "由布院代表甜點",
            "area": "由布院",
            "order": "P-roll 瑞士捲",
            "note": "記憶點高，但購買不穩定。",
            "fit": "有預留或剛好買得到才買；沒買到不補償。",
            "caution": "",
            "mapQuery": "B-speak 湯布院",
            "purpose": "甜點/伴手",
            "timing": "湯之坪街道",
            "queueRisk": "中高",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "金賞コロッケ",
            "rank": "A",
            "meal": "邊走邊吃",
            "area": "湯之坪街道",
            "order": "牛肉可樂餅、起司可樂餅",
            "note": "鹹點比甜點更能補體力，停留短。",
            "fit": "排隊短就買，排長就跳過。",
            "caution": "",
            "mapQuery": "金賞コロッケ 湯布院",
            "purpose": "零食補能",
            "timing": "由布院短走",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "Milch",
            "rank": "B",
            "meal": "甜點補糖",
            "area": "由布院",
            "order": "布丁、起司蛋糕、霜淇淋",
            "note": "比 B-speak 彈性，適合邊走邊吃。",
            "fit": "只作順手補糖，不特地排隊。",
            "caution": "",
            "mapQuery": "Milch 湯布院",
            "purpose": "甜點",
            "timing": "路過",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "可"
          }
        ],
        "open": false
      }
    ]
  },
  "5": {
    "headline": "阿蘇移動日不追排隊赤牛名店；大觀峰、阿蘇站、草千里與安全進熊本比午餐名氣重要。",
    "rules": [
      "午餐要能停車與補給",
      "いまきん食堂降級收藏",
      "晚餐以熊本市區步行為主"
    ],
    "categories": [
      {
        "icon": "🚉",
        "title": "今日最穩",
        "note": "停車、廁所、午餐、伴手禮一次解決。",
        "items": [
          {
            "name": "道の駅 阿蘇",
            "rank": "S",
            "meal": "移動日午餐",
            "area": "阿蘇站旁",
            "order": "赤牛便當、高菜飯、牛奶、優格、在地便當",
            "note": "Day5 最符合移動日邏輯。",
            "fit": "先廁所、補水、買車上點心，再拍騙人布。",
            "caution": "",
            "mapQuery": "道の駅 阿蘇",
            "purpose": "主線午餐",
            "timing": "阿蘇站段",
            "queueRisk": "低",
            "kidFit": "高",
            "takeout": "可"
          }
        ],
        "open": true
      },
      {
        "icon": "🍦",
        "title": "高優先補糖",
        "note": "天氣、時間、孩子狀態允許才加。",
        "items": [
          {
            "name": "ASO MILK FACTORY",
            "rank": "A",
            "meal": "點心 / 乳製品",
            "area": "阿蘇",
            "order": "ASO MILK、霜淇淋、乳製品伴手禮",
            "note": "孩子接受度高，停車空間較舒服。",
            "fit": "若已超過 14:00 且還沒上草千里，跳過。",
            "caution": "",
            "mapQuery": "ASO MILK FACTORY",
            "purpose": "甜點補給",
            "timing": "午餐後",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "阿蘇神社門前町小吃",
            "rank": "A",
            "meal": "文化散步小吃",
            "area": "阿蘇神社周邊",
            "order": "赤牛串、馬肉可樂餅、高菜飯、甜點",
            "note": "若加入阿蘇神社，可用小吃取代正式餐。",
            "fit": "孩子午睡就不進門前町。",
            "caution": "",
            "mapQuery": "阿蘇神社 門前町 小吃",
            "purpose": "順路小吃",
            "timing": "阿蘇神社段",
            "queueRisk": "中",
            "kidFit": "中高",
            "takeout": "可"
          }
        ],
        "open": false
      },
      {
        "icon": "🚫",
        "title": "不建議硬追",
        "note": "名店慾望不該改變移動日。",
        "items": [
          {
            "name": "いまきん食堂",
            "rank": "C",
            "meal": "收藏",
            "area": "阿蘇內牧",
            "order": "あか牛丼",
            "note": "赤牛名店，但排隊與等待不可控。",
            "fit": "本趟不主動排；剛好無等待才考慮。",
            "caution": "",
            "mapQuery": "いまきん食堂",
            "purpose": "收藏",
            "timing": "不主動排",
            "queueRisk": "高",
            "kidFit": "中",
            "takeout": "否"
          }
        ],
        "open": false
      }
    ]
  },
  "6": {
    "headline": "熊本市區修復日：餐廳要服務熊本熊廣場、百貨、市區休息；不跑遠、不排不可控長隊。",
    "rules": [
      "14:00 熊本熊優先",
      "午餐和甜點都用市區步行解決",
      "晚餐不離開新市街/下通太遠"
    ],
    "categories": [
      {
        "icon": "🐂",
        "title": "今日最穩",
        "note": "熊本地方代表與親子穩定的交集。",
        "items": [
          {
            "name": "あか牛Dining yoka-yoka サクラマチ店",
            "rank": "S",
            "meal": "赤牛市區主餐",
            "area": "SAKURA MACHI 3F",
            "order": "あか牛丼、赤牛牛排、赤牛漢堡排",
            "note": "不用追阿蘇排隊名店，也能吃到赤牛主題。",
            "fit": "適合午餐或早晚餐；配合 SAKURA MACHI 休息。",
            "caution": "",
            "mapQuery": "あか牛Dining yoka-yoka サクラマチ店",
            "purpose": "主線地方餐",
            "timing": "午餐/晚餐",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "否"
          },
          {
            "name": "紅蘭亭 下通本店",
            "rank": "S",
            "meal": "熊本太平燕",
            "area": "下通",
            "order": "太平燕、春捲、中華單點",
            "note": "太平燕地方性明確，口味比重拉麵更適合孩子。",
            "fit": "熊本熊前後都可安排，尖峰排隊過長就撤。",
            "caution": "",
            "mapQuery": "紅蘭亭 下通本店",
            "purpose": "主線地方餐",
            "timing": "午餐/晚餐",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "否"
          }
        ],
        "open": true
      },
      {
        "icon": "🍜",
        "title": "高優先保底",
        "note": "熊本市區晚餐 / 宵夜。",
        "items": [
          {
            "name": "黒亭 下通店",
            "rank": "A",
            "meal": "熊本拉麵",
            "area": "下通",
            "order": "熊本拉麵、玉子入り、叉燒麵",
            "note": "住宿區動線佳，是熊本拉麵第一備案。",
            "fit": "孩子累時要確認座位與排隊；不為拉麵等太久。",
            "caution": "",
            "mapQuery": "黒亭 下通店",
            "purpose": "地方代表",
            "timing": "晚餐/宵夜",
            "queueRisk": "中",
            "kidFit": "中",
            "takeout": "否"
          },
          {
            "name": "勝烈亭 新市街本店",
            "rank": "A",
            "meal": "親子保底",
            "area": "新市街",
            "order": "炸豬排定食、白飯、味噌湯",
            "note": "地方性不如赤牛/太平燕，但親子成功率極高。",
            "fit": "想穩穩吃飽、不要踩雷時使用。",
            "caution": "",
            "mapQuery": "勝烈亭 新市街本店",
            "purpose": "親子保底",
            "timing": "午餐/晚餐",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "否"
          }
        ],
        "open": false
      },
      {
        "icon": "🍡",
        "title": "甜點零食 / 伴手禮",
        "note": "上通下通散步補糖。",
        "items": [
          {
            "name": "蜂樂饅頭",
            "rank": "B",
            "meal": "散步甜點",
            "area": "上通 / 熊本市區",
            "order": "白餡、黑餡回轉燒",
            "note": "便宜、快速、適合小孩補糖。",
            "fit": "看到順手買，不特地繞。",
            "caution": "",
            "mapQuery": "蜂楽饅頭 熊本",
            "purpose": "甜點",
            "timing": "市區散步",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "いきなり団子",
            "rank": "A",
            "meal": "熊本代表零食",
            "area": "熊本市區 / 機場",
            "order": "番薯 + 紅豆餡蒸菓子",
            "note": "熊本代表郷土菓子，適合現吃或伴手。",
            "fit": "不需要追單店；百貨、商場、機場看到就買。",
            "caution": "",
            "mapQuery": "熊本 いきなり団子",
            "purpose": "伴手/零食",
            "timing": "Day6/Day8",
            "queueRisk": "低",
            "kidFit": "高",
            "takeout": "可"
          }
        ],
        "open": false
      }
    ]
  },
  "7": {
    "headline": "天草日主攻海鮮與順路零食；不把野生海豚船、遠方海膽、Sea Donut 全塞進同一天。",
    "rules": [
      "午餐要服從長部田潮汐與 Sea Donut",
      "海鮮選順路店，不遠征",
      "鹽パン與こっぱ餅是車上點心/伴手核心"
    ],
    "categories": [
      {
        "icon": "🦐",
        "title": "今日最穩",
        "note": "福伸與天のや二選一。",
        "items": [
          {
            "name": "海鮮家 福伸",
            "rank": "S",
            "meal": "上天草海鮮主餐",
            "area": "松島 / 上天草",
            "order": "車海老、海鮮丼、刺身定食、天草魚料理",
            "note": "Day7 最有地方性，也符合天草海鮮主題。",
            "fit": "若排隊或動線不順，立刻改天のや，不遠征。",
            "caution": "",
            "mapQuery": "海鮮家 福伸",
            "purpose": "主線海鮮",
            "timing": "午餐/晚餐",
            "queueRisk": "中",
            "kidFit": "中高",
            "takeout": "否"
          },
          {
            "name": "天のや AMAKUSA",
            "rank": "S-",
            "meal": "Sea Donut 旁海鮮",
            "area": "L'isola Terrace / Sea Donut 旁",
            "order": "海鮮丼、天丼、定食",
            "note": "地點最順，適合把 Sea Donut 與午餐合併。",
            "fit": "如果長部田與甚平節奏拖延，優先選這家降低移動。",
            "caution": "",
            "mapQuery": "天のや AMAKUSA",
            "purpose": "順路主餐",
            "timing": "Sea Donut 前後",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "否"
          }
        ],
        "open": true
      },
      {
        "icon": "🥐",
        "title": "甜點零食 / 伴手禮",
        "note": "Day7 應新增的重點。",
        "items": [
          {
            "name": "天草塩パンラボ",
            "rank": "A",
            "meal": "車上點心 / 伴手",
            "area": "L'isola Terrace",
            "order": "原味鹽パン、巧克力、明太子、いきなり団子風",
            "note": "非常適合上天草日，現吃與帶回車上都合理。",
            "fit": "Sea Donut 旁順路才買；不要為麵包改線。",
            "caution": "",
            "mapQuery": "天草塩パンラボ",
            "purpose": "零食/伴手",
            "timing": "Sea Donut 前後",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "こっぱ餅",
            "rank": "A",
            "meal": "天草代表伴手",
            "area": "上天草 / 機場伴手區",
            "order": "番薯與糯米製成的傳統點心",
            "note": "天草代表性高，常溫伴手價值比生鮮海膽穩。",
            "fit": "道之驛或機場看到就買。",
            "caution": "",
            "mapQuery": "天草 こっぱ餅",
            "purpose": "伴手",
            "timing": "Day7/Day8",
            "queueRisk": "低",
            "kidFit": "中高",
            "takeout": "可"
          }
        ],
        "open": false
      },
      {
        "icon": "🚫",
        "title": "不建議硬塞",
        "note": "除非整天重排。",
        "items": [
          {
            "name": "丸健水産 / 生うに遠征",
            "rank": "C",
            "meal": "收藏",
            "area": "天草下島方向",
            "order": "生うに、海膽丼",
            "note": "距離與時間成本高，不符合本趟上天草短遠征。",
            "fit": "不要為海膽改變 Day7 主線。",
            "caution": "",
            "mapQuery": "丸健水産 天草",
            "purpose": "收藏",
            "timing": "不主動排",
            "queueRisk": "高",
            "kidFit": "低中",
            "takeout": "否"
          },
          {
            "name": "天草賞野生海豚 + 遠方海鮮",
            "rank": "X",
            "meal": "不排",
            "area": "天草下島 / 船班區",
            "order": "賞海豚船、海鮮",
            "note": "內容很好，但需另排半日。",
            "fit": "若要搭船，Day7 必須整天重排，不能當加點。",
            "caution": "",
            "mapQuery": "天草 イルカウォッチング",
            "purpose": "不建議",
            "timing": "本趟不排",
            "queueRisk": "高",
            "kidFit": "中",
            "takeout": "否"
          }
        ],
        "open": false
      }
    ]
  },
  "8": {
    "headline": "返程日只吃可控餐：快速、市區、機場、可外帶；15:30 後不接受排隊名店或重餐。",
    "rules": [
      "15:30 後機場模式",
      "午餐可快吃，晚餐看機場",
      "伴手禮優先於重餐廳"
    ],
    "categories": [
      {
        "icon": "✈️",
        "title": "今日最穩",
        "note": "機場與快速餐比名店重要。",
        "items": [
          {
            "name": "阿蘇熊本機場餐飲 / 伴手禮區",
            "rank": "S",
            "meal": "返程保底",
            "area": "熊本機場",
            "order": "便當、拉麵、甜點、伴手禮、飲料",
            "note": "返程日最重要是準時還車與托運，機場餐飲最可控。",
            "fit": "15:30 後不再加點，全部轉機場流程。",
            "caution": "",
            "mapQuery": "阿蘇くまもと空港 レストラン お土産",
            "purpose": "返程保底",
            "timing": "還車後/候機",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "SAKURA MACHI 快速午餐",
            "rank": "A",
            "meal": "市區快速餐",
            "area": "熊本市區",
            "order": "美食街、赤牛簡餐、拉麵、甜點",
            "note": "若上午雕像順利，可在市區快速吃。",
            "fit": "不能排長隊；吃完立刻轉加油/機場。",
            "caution": "",
            "mapQuery": "SAKURA MACHI Kumamoto レストラン",
            "purpose": "返程午餐",
            "timing": "15:00 前",
            "queueRisk": "中",
            "kidFit": "高",
            "takeout": "部分可"
          }
        ],
        "open": true
      },
      {
        "icon": "🎁",
        "title": "伴手禮 / 零食",
        "note": "以機場與百貨收斂。",
        "items": [
          {
            "name": "いきなり団子",
            "rank": "A",
            "meal": "熊本代表零食",
            "area": "機場 / 百貨 / 商場",
            "order": "番薯紅豆蒸菓子",
            "note": "孩子接受度高，熊本代表性明確。",
            "fit": "看到就買，不追名店。",
            "caution": "",
            "mapQuery": "阿蘇くまもと空港 いきなり団子",
            "purpose": "伴手/零食",
            "timing": "返程前",
            "queueRisk": "低",
            "kidFit": "高",
            "takeout": "可"
          },
          {
            "name": "誉の陣太鼓 / 武者がえし",
            "rank": "A",
            "meal": "熊本伴手禮",
            "area": "機場 / 百貨",
            "order": "和菓子伴手禮",
            "note": "穩定、好買、適合最後收尾。",
            "fit": "機場採買，不為本店改線。",
            "caution": "",
            "mapQuery": "阿蘇くまもと空港 誉の陣太鼓 武者がえし",
            "purpose": "伴手",
            "timing": "候機前",
            "queueRisk": "低",
            "kidFit": "中高",
            "takeout": "可"
          }
        ],
        "open": false
      },
      {
        "icon": "🚫",
        "title": "返程日禁止硬追",
        "note": "重餐與排隊餐都降級。",
        "items": [
          {
            "name": "高級燒肉長餐",
            "rank": "X",
            "meal": "不排",
            "area": "熊本市區",
            "order": "改下次",
            "note": "用餐時間長、撤退慢，不符合返程日。",
            "fit": "返程日不要把晚餐當主線。",
            "caution": "",
            "mapQuery": "熊本 焼肉",
            "purpose": "不建議",
            "timing": "Day8",
            "queueRisk": "高",
            "kidFit": "中",
            "takeout": "否"
          },
          {
            "name": "排隊拉麵 / 壽司名店",
            "rank": "X",
            "meal": "不排",
            "area": "熊本市區",
            "order": "改快速餐",
            "note": "排隊不可控，會直接威脅還車與登機。",
            "fit": "排隊超過 15 分鐘就撤。",
            "caution": "",
            "mapQuery": "熊本 ラーメン 行列",
            "purpose": "不建議",
            "timing": "Day8",
            "queueRisk": "高",
            "kidFit": "中",
            "takeout": "否"
          }
        ],
        "open": false
      }
    ]
  }
};
