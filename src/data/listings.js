// simple json object which will contain all out listings

const listings = [
  {
    title: "Hot Events",
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: require("./photos/listing1.jpeg"),
        title: "이쁜손톱 네일아트",
        header: "가을맞이 예쁜 손톱으로 꾸며보세요~ 💅🏻 젤네일 기본 30000원",
        price: 30,
        priceType: "per person",
        stars: 29,
      },
      {
        id: 2,
        photo: require("./photos/listing2.jpeg"),
        title: "송정 서핑보드",
        header: "인기 강사 영입! 🌊 부산 서핑의 성지 송정에서 즐거운 파도타기",
        price: 70,
        priceType: "per person",
        stars: 4,
      },
      {
        id: 3,
        photo: require("./photos/listing3.jpeg"),
        title: "프렌치 치즈 앤 와인",
        header:
          "프랑스 직수입 🇫🇷 보르도 생산 와인과 노르망디 지방의 산뜻한 치즈를 맛보세요",
        price: 47,
        priceType: "per person",
        stars: 30,
      },
      {
        id: 4,
        photo: require("./photos/listing4.jpeg"),
        title: "까꼬뽀꼬 헤어살롱",
        header:
          "미용경력 30년, 센텀 까꼬뽀꼬 헤어살롱 💇🏻‍♀️ 에서 발레아쥬 염색 할인합니다.",
        price: 57,
        priceType: "per person",
        stars: 70,
      },
      {
        id: 5,
        photo: require("./photos/listing5.jpeg"),
        title: "램브란트 미술학원",
        header:
          "미대입시 취미회화 전문 🎨 홍대 미대 출신 강사진 주말반 저녁반도 운영합니다.",
        price: 61,
        priceType: "per person",
        stars: 66,
      },
      {
        id: 6,
        photo: require("./photos/listing6.jpeg"),
        title: "자탄풍 렌탈바이크",
        header:
          "자전거, 퀵보드, 바이크 렌탈합니다. 장비부터 기초 교육까지 제공합니다. 🚲",
        price: 55,
        priceType: "per person",
        stars: 15,
      },
    ],
  },
  {
    title: "Fashions",
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: require("./photos/listing7.jpeg"),
        title: "바비걸(트레이닝복/요가복 전문)",
        header:
          "신상 및 인기 상품 재입고 완료! 최고급 원단으로 자체 제작합니다.",
        price: 72,
        priceType: "per piece",
        stars: 101,
      },
      {
        id: 8,
        photo: require("./photos/listing8.jpeg"),
        title: "소녀감성",
        header:
          "톡톡하고 부드러운 면소재 티셔츠 전문점. 한 번만 입고 만 사람 없다는 그 집!",
        price: 18,
        priceType: "per piece",
        stars: 119,
      },
      {
        id: 9,
        photo: require("./photos/listing9.jpeg"),
        title: "말미잘봉봉",
        header:
          "말미잘봉봉 레이스원피스 재입고. 넘나 이쁜데 달리 설명할 길이 없네 💕",
        price: 152,
        priceType: "per piece",
        stars: 320,
      },
      {
        id: 10,
        photo: require("./photos/listing10.jpeg"),
        title: "신발콩콩",
        header: "여성 워커힐, 단화, 부츠 전문점 🍁 가을 신상 입고 🍂",
        price: 79,
        priceType: "per piece",
        stars: 300,
      },
      {
        id: 11,
        photo: require("./photos/listing11.jpeg"),
        title: "다파라가방",
        header: "마진 생각 없이 팝니다. 사가면 그냥 🐶이득",
        price: 12,
        priceType: "per piece",
        stars: 57,
      },
    ],
  },
  {
    title: "Popular Shops",
    boldTitle: true,
    showAddToFav: false,
    listings: [
      {
        id: 12,
        photo: require("./photos/listing12.jpeg"),
        title: "RESERVATION",
        header: "대박난언니",
        price: 30,
        priceType: "per piece",
        stars: 0,
      },
      {
        id: 13,
        photo: require("./photos/listing13.jpeg"),
        title: "RESERVATION",
        header: "장인가죽",
        price: 68,
        priceType: "per piece",
        stars: 0,
      },
      {
        id: 14,
        photo: require("./photos/listing14.jpeg"),
        title: "RESERVATION",
        header: "멍멍이 파라다이스",
        price: 34,
        priceType: "per counter",
        stars: 0,
      },
      {
        id: 15,
        photo: require("./photos/listing15.jpeg"),
        title: "RESERVATION",
        header: "고마워플라워",
        price: 46,
        priceType: "per piece",
        stars: 0,
      },
    ],
  },
];

export default listings;
