// import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import "./HomeDesign.css"; // Import the CSS file

const Home = () => {
  // Limit products to first 12
  const displayedProducts = products.slice(0, 12);

  return (
    <div>
      {/* Background Section with Split Layout */}
      <div className="background-section">
        <div className="text-side">
          <h2 className="text">
          Shop the latest trends and exclusive deals, all from the comfort of your home!
          </h2>
        </div>
        <div className="image-side">
          <img
            src="/public/homepage.avif" // Replace with your image URL
            alt="Food Delivery"
            className="side-image"
          />
        </div>
      </div>

      {/* Product Section */}
      <div className="home">
        <h1 className="text">Welcome to E-Shop</h1>
        <div className="products">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/Products/${product.id}`} className="btn">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
