import React from "react";
import "./bag.css"; // Import the CSS file

const Bag = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container">
      <h2 className="heading">My Shopping Bag</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-wrapper">
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div className="item-info">
                    <h3 className="cart-title">{item.name}</h3>
                    <div className="price-container">
                      <span className="cart-price">₹{item.price}</span>
                      <span className="original-price">
                        ₹{item.originalPrice}
                      </span>
                      <span className="discount">
                        ({Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off)
                      </span>
                    </div>
                    <p className="return-policy">
                      14 days return policy
                    </p>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="price-summary">
            <h3 className="summary-heading">Price Details</h3>
            <div className="price-breakdown">
              <div className="price-row">
                <span>Total MRP</span>
                <span>
                  ₹{cartItems.reduce((sum, item) => sum + item.originalPrice, 0)}
                </span>
              </div>
              <div className="price-row">
                <span>Discount on MRP</span>
                <span>
                  - ₹{cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price), 0)}
                </span>
              </div>
              <div className="price-row">
                <span>Shipping Fee</span>
                <span>₹{cartItems.length > 0 ? 49 : 0}</span> {/* Example shipping fee */}
              </div>
              <div className="total-amount">
                <span>Total Amount</span>
                <span>
                  ₹{cartItems.reduce((sum, item) => sum + item.price, 0) + (cartItems.length > 0 ? 49 : 0)}
                </span>
              </div>
            </div>
            <button className="place-order-btn">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;