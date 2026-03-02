const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to:", mongoose.connection.name);

    const deleteResult = await Product.deleteMany({});
    console.log("Deleted Count:", deleteResult.deletedCount);

    const inserted = await Product.insertMany(products);
    console.log("Inserted Count:", inserted.length);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedData();