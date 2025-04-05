const products = [

  //electronics section

  { id: 1, name: "Boult Y1 Pro with Zen Quad Mic ENC, 60Hrs Battery, Fast Charging, Knurled Design, 5.3v Bluetooth  (Powder Blue, True Wireless)", category: "electronics", price: 1299, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/s/7/f/-original-imahf4qppx6fkxtw.jpeg?q=70&crop=false" },
  { id: 2, name: "SmartphoneboAt Rockerz 110 with 40 HRS Playback, ENx Technology, Beast Mode & ASAP Charge Bluetooth  (Black, In the Ear)", category: "electronics", price: 1500, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/r/r/4/-original-imaguggqedr3ypyx.jpeg?q=70&crop=false" },
  { id: 3, name: "TRIGGR Trinity 2 with Dual Pairing, ENC, Fast Charge, 50H Battery, Rubber Finish, v5.3 Bluetooth  (Midnight Black, On the Ear)", category: "electronics", price: 999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/c/z/-original-imahafshasnhfjvd.jpeg?q=70&crop=false" },
  { id: 4, name: "Apple iPhone 15 (Green, 256 GB)", category: "electronics", price: "74,999", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70&crop=false" },
  { id: 5, name: "Acer Aspire 3 Intel Core i7 12th Gen 1255U - (16 GB/1 TB SSD/Windows 11 Home) A324-51 Thin and Light Laptop  (14 Inch, Steel Gray, 1.45 Kg)", category: "electronics", price: "46,990", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/g/i/l/a324-51-thin-and-light-laptop-acer-original-imah42gdv8rbbjtv.jpeg?q=70&crop=false" },


  //fashion section

  { id: 1, name: "Men Regular Fit Checkered Spread Collar Casual Shirt", category: "fashion", price: 500, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/shirt/l/i/b/m-white-chex-shirt-vellosta-original-imah9cd5e8nvhzw5.jpeg?q=70&crop=false" },
  { id: 2, name: "Men Regular Fit Solid Spread Collar Formal Shirt", category: "fashion", price: 699, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/d/b/v/xl-epb1-eviqe-original-imahyq4pdttszzyx.jpeg?q=70&crop=false" },
  { id: 3, name: "Casual Regular Sleeves Solid Women Dark Green Top", category: "fashion", price: 450, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/h/j/b/l-1-stylish-hand-block-printed-top-ag136-neerafashion-original-imagqzysnhx2cmyc.jpeg?q=70&crop=false" },
  { id: 4, name: "Men Printed Round Neck Pure Cotton Grey T-Shirt", category: "fashion", price: "999", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/e/a/u/m-fmt222-chug-grey-force-original-imah3rzhvmhnnahd.jpeg?q=70&crop=false" },
  { id: 5, name: "VeBNoR Men Regular Fit Solid Button Down Collar Formal Shirt", category: "fashion", price: 1450, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/v/k/xxl-frml-st2-vebnor-original-imah89h9ayzfwpxu.jpeg?q=70&crop=false" },
  { id: 6, name: "Men Solid Henley Neck Cotton Blend Black T-Shirt", category: "fashion", price: 1655, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/1/i/c/xl-tblhnful-d144-tripr-original-imaha8kbpkebscvt.jpeg?q=70&crop=false" },
  { id: 7, name: "Men Solid Round Neck Polyester Beige T-Shirt", category: "fashion", price: 1650, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/z/q/8/m-fmt301-jacquard-offwt-force-original-imah5p5zy82cvbz6.jpeg?q=70&crop=false" },
  { id: 8, name: "Men Colorblock Polo Neck Cotton Blend Multicolor T-Shirt", category: "fashion", price: 500, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/y/h/y/xxl-t52-mt-teemex-original-imagt627mufmxxyf.jpeg?q=70&crop=false" },


  //home-living section

  { id: 1, name: "RJVT Microfiber Bathroom Mat  (Grey, Medium)", category: "home-living", price: 599, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mat/k/j/v/medium-uto45-1-kl12-rjvt-original-imahfqxw4zamnqkc.jpeg?q=70&crop=false" },
  { id: 2, name: "Swikon star 3 Cushion 2 bolster Microfibre Geometric Bolster Pack of 5  (Dark Blue)", category: "home-living", price: 1599, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/pillow/o/n/f/15-blueline-b2k3-ac-67-5-401-swikon-star-original-imahahrhkyxrpe8a.jpeg?q=70&crop=false" },
  { id: 3, name: "Jainco Decor Floral 6 Seater Table Cover  (Multicolor, Polyester)", category: "home-living", price: 1199, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/table-cover/c/8/u/dtc-net-sun-mahroon-6-seater-1-c-net-sun-mahroon-d-p-c-original-imahagkeggsjkywm.jpeg?q=70&crop=false" },
  { id: 4, name: "Kolar Polyester Adults Washable 6.5x 6.5 Feet Double Bed Machardani,78x78 Inch King Size Premium Mosquito Net  (Full Pink, Tent)", category: "home-living", price: 999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mosquito-net/w/r/c/king-size-bed-net-for-double-bed-premium-machardani-strong-original-imagqthazwfdsgmh.jpeg?q=70&crop=false" },


  // appliances section
  
  { id: 1, name: "Orient Electric 46 L Room/Personal Air Cooler  (White, Aeroquid)", category: "appliances", price: 12000, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/air-cooler/a/o/h/-original-imagy5zuz3xhcfh8.jpeg?q=70&crop=false" },
  { id: 2, name: "SAMSUNG 183 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer with Digital Inverter  (llia Purple, RR20C1824CR/HL)", category: "appliances", price: 35999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/a/s/f/-original-imah4c6p6gzzh9bz.jpeg?q=70&crop=false" },
  { id: 3, name: "Godrej 2024 Model 5-In-1-Convertible Cooling 1.4 Ton 3 Star Split Inverter Heavy Duty Cooling At Extreme Temperature AC - White  (AC 1.4T EI 17TINV3R32 RYQ, Copper Condenser)", category: "appliances", price: 30000, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/u/y/a/-original-imah8vbzsdf5ns5y.jpeg?q=70&crop=false" },
  { id: 4, name: "MinMAX SENORITA 48 ULTRA HIGH SPEED ANTI-DUST 1200 mm 3 Blade Ceiling Fan  (Ultra High Speed | MET BLUE | Pack of 1)", category: "appliances", price: 3000, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/fan/a/q/i/sanorita-60-1-ceiling-fan-1200-minmax-original-imah8ry9yyxqg29d.jpeg?q=70&crop=false" },


];

export default products;
