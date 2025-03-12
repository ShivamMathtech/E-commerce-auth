const Order = require("../../model/Order");
// const cart = require("../../model/cartmodel");
const OrderCreateCtrls = async (req, res) => {
  try {
    const { products, totalPrice } = req.body;
    if (!products || products.length === 0) {
      return res.status(400).json({ msg: "No products in the order" });
    }
    const order = new Order({
      user: req.user.userId,
      products,
      totalPrice,
    });

    await order.save();
    res.status(201).json({ msg: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = OrderCreateCtrls;
