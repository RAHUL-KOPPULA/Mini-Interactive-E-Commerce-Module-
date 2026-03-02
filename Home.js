import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const API = "http://localhost:5000";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get(`${API}/api/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = async (id) => {
    await axios.post(`${API}/api/cart`, {
      productId: id,
      quantity: 1
    });
    alert("Added to Cart 🛒");
  };

  return (
    <div className="store-container">
      <h2 className="store-title">E-Commerce Store</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            
            <div className="image-container">
              <img src={p.image} alt={p.name} />
            </div>

            <div className="product-info">
              <h4>{p.name}</h4>

              <div className="rating">
                ⭐⭐⭐⭐☆ <span>(120)</span>
              </div>

              <div className="price">₹{p.price}</div>

              <button
                className="add-btn"
                onClick={() => addToCart(p._id)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;