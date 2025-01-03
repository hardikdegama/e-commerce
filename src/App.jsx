// File: src/App.jsx
// import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/Product.jsx";
import Cart from "./pages/Cart";
import Products from "./pages/ProductsDetailsPage.jsx"; // Import Products page
import Navbar from "./Components/Navbar.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={< ProductDetails/>} /> {/* Add Route for Products */}
      </Routes>
    </div>
  );
};

export default App;
