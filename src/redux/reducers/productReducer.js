
const initialState = {
  products: [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1299,
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678757/Croma%20Assets/Communication/Mobiles/Images/300824_0_opb0vg.png?tr=w-360"
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/61imYpK33qL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 3,
      name: "Noise Colorfit Icon 2 1.8'' Display with Bluetooth Calling, AI Voice Assistant Smartwatch  (Grey Strap, Regular)",
      price: 999,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/y/v/7/-original-imah76jhgpcaktrv.jpeg?q=70&crop=false"
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      price: 399,
      image: "https://m.media-amazon.com/images/I/51aXvjzcukL._SL1500_.jpg"
    },
    {
      id: 5,
      name: "Apple MacBook Air M2",
      price: 1099,
      image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 6,
      name: "Samsung 55-inch 4K QLED TV",
      price: 899,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa43q60daulxl/gallery/in-qled-q60d-qa43q60daulxl-539976066?$684_547_PNG$"
    },
    {
      id: 7,
      name: "Sony PlayStation 5",
      price: 499,
      image: "https://m.media-amazon.com/images/I/51HCjA3rqYL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 8,
      name: "JBL Charge 5 Bluetooth Speaker",
      price: 179,
      image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw00f57470/JBL_CHARGE5_HERO_BLACK_0046_x1.png?sw=535&sh=535"
    },
    {
      id: 9,
      name: "Apple Watch Series 9",
      price: 399,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQG3O8iKxPfW5vJKSiyRNNnNsWZC5Jewsv4n-fNi4r6H46Jf_LSS2PB9CAtGg1QDeHN2DUWCxZqyr-RncyxbDk0teP7nky8EubxKQOP640"
    },
    {
      id: 10,
      name: "U TURN, Men Slim Fit Printed Spread Collar Casual Shirt",
      price: 359,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/h/f/k/l-113-grey-woxen-original-imah85tu3dxa2jps.jpeg?q=70&crop=false"
    },
    {
      id: 11,
      name: "Men Regular Fit Checkered Spread Collar Casual Shirt",
      price: 450,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/shirt/e/z/6/l-beige-chex-shirt-vellosta-original-imah9k5mysrnkkfz.jpeg?q=70&crop=false"
    },
    {
      id: 12,
      name: "Typography Round Neck Cotton Blend Orange T-Shirt",
      price: 650,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/m/v/i/xxl-fs49-orng-groovyyyy-leotude-original-imah28ja6ptyn5c7.jpeg?q=70&crop=false"
    },
    {
      id: 13,
      name: "Women A-line Purple Midi/Calf Length Dress",
      price: 555,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/dress/u/6/0/m-htdrss11624-honky-tonky-original-imah7jm2xaz2h24w.jpeg?q=70&crop=false"
    },
    {
      id: 14,
      name: "Women A-line Dark Blue, Light Blue Midi/Calf Length Dress",
      price: 250,
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/s/3/x/s-ankita-gown-fashion2wear-original-imagwv6xht9gunwg.jpeg?q=70&crop=false"
    },
    {
      id: 15,
      name: "Fashion String 213 cm (7 ft) Polyester Semi Transparent Door Curtain (Pack Of 2)  (Floral, Green)",
      price: 488,
      image: "https://rukminim2.flixcart.com/image/416/416/ktyp8cw0/curtain/q/t/7/long-tree-fs2pc000944dr-door-eyelet-fashion-string-original-imag77y9ph3gnrcc.jpeg?q=70&crop=false"
    },
    {
      id: 16,
      name: "Goodson Cotton Floor Mat  (Navy Grey Aqua, Free, Pack of 2)",
      price: 175,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mat/9/e/c/large-blue-border-2-blue-border-1-javson-original-imah4h98zr4k73rb.jpeg?q=70&crop=false"
    },
    {
      id: 17,
      name: "MarQ by Flipkart by Flipkart 8 kg Washer only Maroon, White  (MQVWA800NNNLB)",
      price: 4488,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/j/n/7/8-43-mqvwa800nnnlb-0-300-50-5-11-5-marq-by-flipkart-95-5-original-imah6fdy5ywzhejr.jpeg?q=70&crop=false"
    },
    {
      id: 18,
      name: "EVEREST EW 400 DELUX Stabilizer Upto 1.5 ton AC (Working Range : 170 V to 270 V)  (White)",
      price: 1745,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/voltage-stabilizer/z/x/k/ew-400-ew-400-delux-everest-original-imah9qgzupbrfffd.jpeg?q=70&crop=false"
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
