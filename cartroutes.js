const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add to Cart (or Increase if exists)
router.post("/", async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cartItem = await Cart.findOne({ productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      cartItem.totalPrice = cartItem.quantity * product.price;
      await cartItem.save();
    } else {
      cartItem = new Cart({
        productId,
        quantity,
        totalPrice: product.price * quantity
      });
      await cartItem.save();
    }

    res.json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Update Quantity
router.put("/:id", async (req, res) => {
  try {
    const { quantity } = req.body;

    const cartItem = await Cart.findById(req.params.id).populate("productId");

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    cartItem.quantity = quantity;
    cartItem.totalPrice = quantity * cartItem.productId.price;

    await cartItem.save();

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get Cart
router.get("/", async (req, res) => {
  const items = await Cart.find().populate("productId");
  res.json(items);
});

// Delete Item
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
});

module.exports = router;