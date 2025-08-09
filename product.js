// product.js
// Danh sách sản phẩm (đã chuẩn hoá price thành number, giữ id + image + category)
const products = {
  "runway": [
    {
      id: 201,
      name: "Zegna Silk Blazer",
      brand: "Zegna",
      price: 25000000,
      image: "https://productimage.zegna.com/is/image/zegna/UGTC5A2-FCT578-B09-F?wid=1536&hei=2048",
      description: "Áo blazer lụa Zegna tinh tế và sang trọng.",
      category: "clothing"
    },
    {
      id: 202,
      name: "Gucci Embroidered Gown",
      brand: "Gucci",
      price: 72000000,
      image: "https://1.bp.blogspot.com/-iKqs20PIW64/Vs7UaOQjYiI/AAAAAAAHlx4/8cPOUiA2W1M/s1600/_GUC0695.jpg",
      description: "Đầm Gucci thêu tay từ bộ sưu tập Runway.",
      category: "clothing"
    }
  ],
  "timeless": [
    {
      id: 203,
      name: "Chanel Tweed Jacket",
      brand: "Chanel",
      price: 89000000,
      image: "https://www.chanel.com/images/as///f_auto,q_auto:good,dpr_1.1/w_960/-77459839.jpg",
      description: "Áo khoác tweed cổ điển – biểu tượng bất hủ của Chanel.",
      category: "clothing"
    },
    {
      id: 204,
      name: "Loro Piana Cashmere Coat",
      brand: "Loro Piana",
      price: 95000000,
      image: "https://media.loropiana.com/HYBRIS/FAP/FAP0487/207DD67E-6729-45C0-B960-63D16B352D2C/FAP0487_H0W0_MEDIUM.jpg",
      description: "Áo khoác Cashmere mềm mại từ Loro Piana.",
      category: "clothing"
    }
  ],
  "modern": [
    {
      id: 205,
      name: "Zegna Modern Trousers",
      brand: "Zegna",
      price: 18000000,
      image: "https://productimage.zegna.com/is/image/zegna/UFI35A9-TZ32-N01-F?wid=1536&hei=2048",
      description: "Quần âu hiện đại, dáng slim-fit từ Zegna.",
      category: "clothing"
    },
    {
      id: 206,
      name: "Gucci Monogram Bag",
      brand: "Gucci",
      price: 42000000,
      image: "https://tse1.mm.bing.net/th/id/OIP.e4LZM5YxL0SCHiEO3ht06gHaJ4?pid=Api&P=0&h=180",
      description: "Túi Gucci Monogram bản giới hạn mới nhất.",
      category: "other"
    },
    {
      id: 207,
      name: "Váy Amor",
      brand: "Gabriela Hearst",
      price: 24000000,
      image: "https://is4.fwrdassets.com/images/p/fw/z/GABF-WD35_V1.jpg",
      description: "Váy Gabriela Hearst Amor.",
      category: "clothing"
    },
    {
      id: 208,
      name: "Váy Eyot",
      brand: "Gabriela Hearst",
      price: 55000000,
      image: "https://is4.fwrdassets.com/images/p/fw/z/GABF-WD64_V1.jpg",
      description: "Váy Gabriela Hearst Eyot.",
      category: "clothing"
    },
    {
      id: 209,
      name: "Váy sọc",
      brand: "Moncler",
      price: 78000000,
      image: "https://is4.fwrdassets.com/images/p/fw/z/MONC-WD10_V1.jpg",
      description: "Váy sọc hiện đại.",
      category: "clothing"
    },
    {
      id: 210,
      name: "Váy polo mini cotton terry",
      brand: "Celine",
      price: 48996700,
      image: "https://image.celine.com/a51d1623ea454cb0/original/RR0E50A80-07YC_1_FALL25_W.tif?im=Resize=(480);AspectCrop=(1,1),xPosition=.5,yPosition=.5",
      description: "Váy mini vải cotton terry của Celine.",
      category: "clothing"
    },
    {
      id: 211,
      name: "Cardigan Triomphe len Aran",
      brand: "Celine",
      price: 61245900,
      image: "https://image.celine.com/d03d3f117ad41f44/original/RV09U0117-01OW_1_SPR25_P1_W.tif?im=Resize=(2000)",
      description: "Áo cardigan len Aran Celine.",
      category: "clothing"
    },
    {
      id: 212,
      name: "Áo khoác thể thao vải nhung",
      brand: "Celine",
      price: 55121300,
      image: "https://image.celine.com/d10b328c24b350c0/original/2Y16E748Q-19XC_1_SUM25_W.tif?im=Resize=(480);AspectCrop=(1,1),xPosition=.5,yPosition=.5",
      description: "Áo khoác thể thao nhung Celine.",
      category: "clothing"
    },
    {
      id: 213,
      name: "Áo cánh Lavalliere Georgette",
      brand: "Celine",
      price: 59204400,
      image: "https://image.celine.com/45a021214b35eb1f/original/RB01B0393-GAH6_1_FALL25_W.tif?im=Resize=(1200);AspectCrop=(1,1),xPosition=.5,yPosition=.5",
      description: "Áo cánh Lavalliere bằng lụa Georgette.",
      category: "clothing"
    },
    {
      id: 214,
      name: "Sơ mi thêu vải lanh cotton",
      brand: "Celine",
      price: 56754600,
      image: "https://image.celine.com/5e449748f1ba041d/original/RC05G0143-01AV_1_FALL25_W.tif?im=Resize=(1200);AspectCrop=(1,1),xPosition=.5,yPosition=.5",
      description: "Áo sơ mi thêu bằng vải lanh cotton.",
      category: "clothing"
    },
    {
      id: 215,
      name: "Váy mohair ngắn",
      brand: "Celine",
      price: 51038300,
      image: "https://image.celine.com/4ace83518a127cd4/original/RJ03I523K-38NO_1_FALL25_W.tif?im=Resize=(1200);AspectCrop=(1,1),xPosition=.5,yPosition=.5",
      description: "Váy ngắn bằng len mohair.",
      category: "clothing"
    }
  ]
};


