import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CategoryPage from "./pages/CategoryPage"; // Import Category Page
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:name" element={<CategoryPage />} /> {/* Category Page Route */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;











// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import "./styles/App.css";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;
