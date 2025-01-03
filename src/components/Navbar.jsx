// import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navigationbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>E-Shop</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navigationbar;
