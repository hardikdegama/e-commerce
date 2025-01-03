

// import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

const Items = () => {
  // Remove the limit, so it will display all products
  const displayedProducts = products; // Display all products

  return (
    <div className="home">
      <h1>Our Product Is </h1>
      <div className="products">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
           <Link to={`/products/${product.id}`} className="btn">
                         View Details
                       </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;

