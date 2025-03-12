const Cart = require("../../model/cartmodel");
const getAllCartItems = async (req, res) => {
  try {
    const userId = req.user.userId;

    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product",
      "name price"
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = getAllCartItems;
