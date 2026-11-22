
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalItems}</h2>
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="120"
            />

            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => handleDecrease(item)}>
              -
            </button>

            <span style={{ margin: "15px" }}>
              {item.quantity}
            </span>

            <button onClick={() => handleIncrease(item)}>
              +
            </button>

            <p>
              Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </div>
        ))
      )}

      <button onClick={onContinueShopping}>
        Continue Shopping
      </button>

      <button
        onClick={() => alert("Coming Soon!")}
        style={{ marginLeft: "10px" }}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
