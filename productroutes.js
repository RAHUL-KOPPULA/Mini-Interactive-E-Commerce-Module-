const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// ===============================
// Add Product
// ===============================
router.post("/", async (req, res) => {
  try {
    const { name, description, price, category, stock, image } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and Price are required" });
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      image
    });

    await product.save();
    res.status(201).json(product);

  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


// ===============================
// Get All Products + Search
// ===============================
router.get("/", async (req, res) => {
  try {
    const search = req.query.search;
    let query = {};

    if (search && search.trim() !== "") {
      query.name = { $regex: search, $options: "i" };
    }

    const products = await Product.find(query);
    res.json(products);

  } catch (error) {
    console.error("Fetch Products Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


// ===============================
// Get Single Product
// ===============================
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);

  } catch (error) {
    console.error("Single Product Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;