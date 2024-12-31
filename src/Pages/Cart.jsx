import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "../Styles/Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity, currency } = useContext(ShopContext);

  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image[0]} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: {currency} {item.price}</p>
                <p>Total: {currency} {item.price * item.quantity}</p>
                <div className="quantity-selector">
                  <button 
                    onClick={() => item.quantity > 1 && updateQuantity(item._id, item.quantity - 1)}
                    disabled={item.quantity <= 1} 
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: {currency} {totalCartPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
