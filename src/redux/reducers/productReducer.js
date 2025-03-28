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
        name: "Apple Watch Series 9",
        price: 399,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQG3O8iKxPfW5vJKSiyRNNnNsWZC5Jewsv4n-fNi4r6H46Jf_LSS2PB9CAtGg1QDeHN2DUWCxZqyr-RncyxbDk0teP7nky8EubxKQOP640"
      }
    ],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default productReducer;
  