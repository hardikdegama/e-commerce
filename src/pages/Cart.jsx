import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { products } from "../data";
import "./Cart.css";


const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const displayedProducts = products.slice(0, 12);

  return (
    <>
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is currently empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Price: ${item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

<div>
<div className="buynew">Buy A Some A New Products</div>
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

</>
  );
};

export default Cart;
