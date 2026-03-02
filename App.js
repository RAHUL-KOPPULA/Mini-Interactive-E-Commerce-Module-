import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
        <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;