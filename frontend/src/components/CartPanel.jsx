import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./Cart.css";

function CartPanel({ open, onClose }) {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = React.useState(false);

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNum = Number(item.price.replace(/[₹,]/g, ""));
    return acc + priceNum * item.quantity;
  }, 0);

  const placeOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  if (!open) return null;

  return (
    <div className="cart-panel">
      <button style={{float: "right"}} onClick={onClose}>Close</button>
      {orderPlaced ? (
        <>
          <h3>Order Placed!</h3>
          <p>Thank you for your purchase.</p>
        </>
      ) : (
        <>
          <h3>Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.name} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <p className="item-name">{item.name}</p>
                      <p className="item-price">{item.price}</p>
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                        <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="cart-total">Total: ₹{totalPrice.toLocaleString()}</p>
              <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
              <button className="clear-btn" onClick={placeOrder}>Place Order</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CartPanel;
