const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["sellar", "user", "admin"],
    default: "user",
  },
  address: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
