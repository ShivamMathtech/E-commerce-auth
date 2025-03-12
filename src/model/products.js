const mongoose = require("mongoose");
let productSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // 👈 This links products to categories
    required: true,
  },
  stock: { type: Number, required: true, default: 1 },
  images: [{ type: String, required: true }], // Array of image URLs
  brand: { type: String, required: true },
  ratings: { type: Number, default: 0 },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Products", productSchema);
