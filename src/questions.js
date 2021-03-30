const questions = {
  question: [
    "都道府県を教えてください",
    "建物種別を教えてください",
    "建物の申請対象について教えてください",
    "居住年数は何年ですか？",
    "賃貸ですか所有していますか？",
    "保険会社はどこですか？",
    "火災保険の家財に加入していますか？",
    "エアコンはご自身で取り付けましたか？"
  ],
  options: [
    // 都道府県を教えてください
    [
      { key: 1, title: "北海道" },
      { key: 2, title: "青森県" },
      { key: 3, title: "岩手県" },
      { key: 4, title: "宮城県" },
      { key: 5, title: "秋田県" },
      { key: 6, title: "山形県" },
      { key: 7, title: "福島県" },
      { key: 8, title: "茨城県" },
      { key: 9, title: "栃木県" },
      { key: 10, title: "群馬県" },
      { key: 11, title: "埼玉県" },
      { key: 12, title: "千葉県" },
      { key: 13, title: "東京都" },
      { key: 14, title: "神奈川県" },
      { key: 15, title: "新潟県" },
      { key: 16, title: "富山県" },
      { key: 17, title: "石川県" },
      { key: 18, title: "福井県" },
      { key: 19, title: "山梨県" },
      { key: 20, title: "長野県" },
      { key: 21, title: "岐阜県" },
      { key: 22, title: "静岡県" },
      { key: 23, title: "愛知県" },
      { key: 24, title: "三重県" },
      { key: 25, title: "滋賀県" },
      { key: 26, title: "京都府" },
      { key: 27, title: "大阪府" },
      { key: 28, title: "兵庫県" },
      { key: 29, title: "奈良県" },
      { key: 30, title: "和歌山県" },
      { key: 31, title: "鳥取県" },
      { key: 32, title: "島根県" },
      { key: 33, title: "岡山県" },
      { key: 34, title: "広島県" },
      { key: 35, title: "山口県" },
      { key: 36, title: "徳島県" },
      { key: 37, title: "香川県" },
      { key: 38, title: "愛媛県" },
      { key: 39, title: "高知県" },
      { key: 40, title: "福岡県" },
      { key: 41, title: "佐賀県" },
      { key: 42, title: "長崎県" },
      { key: 43, title: "熊本県" },
      { key: 44, title: "大分県" },
      { key: 45, title: "宮崎県" },
      { key: 46, title: "鹿児島県" },
      { key: 47, title: "沖縄県" }
    ],

    // 建物種別を教えてください
    [
      {
        key: 1,
        title: "オフィスビル"
      },
      {
        key: 2,
        title: "テナント"
      },
      {
        key: 3,
        title: "店舗"
      },
      {
        key: 4,
        title: "工場"
      },
      {
        key: 5,
        title: "自宅"
      },
      {
        key: 6,
        title: "施設"
      }
    ],

    // 建物の申請対象について教えてください
    [
      {
        key: 1,
        title: "仮"
      },
      {
        key: 2,
        title: "仮"
      }
    ],

    // 居住年数は何年ですか？
    [
      {
        key: 1,
        title: "0年～5年"
      },
      {
        key: 2,
        title: "6年～10年"
      },
      {
        key: 3,
        title: "11年～15年"
      },
      {
        key: 4,
        title: "16年～20年"
      },
      {
        key: 5,
        title: "21年～25年"
      },
      {
        key: 6,
        title: "26年～30年"
      },
      {
        key: 7,
        title: "30年～"
      }
    ],

    // 賃貸ですか所有していますか
    [
      {
        key: 1,
        title: "賃貸"
      },
      {
        key: 2,
        title: "所有"
      }
    ],

    // 保険会社はどこですか？
    [
      {
        key: 1,
        title: "東京海上日動"
      },
      {
        key: 2,
        title: "三井住友海上"
      },
      {
        key: 3,
        title: "損保ジャパン"
      },
      {
        key: 4,
        title: "AIG損保"
      },
      {
        key: 5,
        title: "SBI損保"
      },
      {
        key: 6,
        title: "セコム損保"
      },
      {
        key: 7,
        title: "共栄火災"
      },
      {
        key: 8,
        title: "セゾン自動車保険"
      },
      {
        key: 9,
        title: "楽天損保"
      },
      {
        key: 10,
        title: "Chubb保険会社"
      },
      {
        key: 11,
        title: "共済"
      }
    ],

    // 火災保険の家財に加入していますか？
    [
      {
        key: 1,
        title: "はい"
      },
      {
        key: 2,
        title: "いいえ"
      }
    ],

    // 火災保険の家財に加入していますか？　→いいえの場合
    // 火災保険の風災に加入していますか？
    // [
    //   {
    //     key: 1,
    //     title: "はい"
    //   },
    //   {
    //     key: 2,
    //     title: "いいえ"
    //   }
    // ],

    // エアコンはご自身で取り付けましたか？
    [
      {
        key: 1,
        title: "はい"
      },
      {
        key: 2,
        title: "いいえ"
      }
    ]

    // エアコンはご自身で取り付けましたか？　→いいえの場合
    // エアコンの修理義務はどちらにありますか？
    // [
    //   {
    //     key: 1,
    //     title: "ご自身"
    //   },
    //   {
    //     key: 2,
    //     title: "オーナー（管理会社）"
    //   }
    // ]
  ]
};
export default questions;
