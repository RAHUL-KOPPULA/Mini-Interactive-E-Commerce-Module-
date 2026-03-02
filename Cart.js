import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function Cart() {
  const [items, setItems] = useState([]);

  const fetchCart = async () => {
    const res = await axios.get(`${API}/api/cart`);
    setItems(res.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id) => {
    await axios.delete(`${API}/api/cart/${id}`);
    fetchCart();
  };

  const total = items.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">🛒 Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div className="card mb-3 shadow-sm" key={item._id}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.productId?.name}</h5>
                  <p>Quantity: {item.quantity}</p>
                  <p>₹{item.totalPrice}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="card p-3 shadow">
            <h4>Total: ₹{total}</h4>
            <button
              className="btn btn-success mt-2"
              onClick={() =>
                alert("Order Placed Successfully!")
              }
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;