const express = require("express");
const env = require("dotenv").config();
const app = express();
const mongoose = require("./src/config/db");
const { authRouter } = require("./src/router/authRouter/authRouter");
const userRouter = require("./src/router/user/userRouter");
const productRouter = require("./src/router/productRouter/productRouter");
const categoryRouter = require("./src/router/categoryRouter/categoryRouter");
const cartRouter = require("./src/router/cartRouter/cartRouter");
const orderRouter = require("./src/router/orderRouter/orderRouter");
const wishListRouter = require("./src/router/wishlistRouter/wishlistRouter");
app.use(express.json());
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);
app.use("/api", wishListRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server is Running on port no ${port}`);
});
