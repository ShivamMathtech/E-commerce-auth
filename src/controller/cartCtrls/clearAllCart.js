const Cart = require("../../model/cartmodel");
const clearAllCartCtrls = async (req, res) => {
  try {
    const userId = req.user.userId;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // ✅ Clear the cart
    cart.products = [];
    cart.totalPrice = 0;

    await cart.save();

    res.status(200).json({ message: "Cart cleared successfully", cart });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = clearAllCartCtrls;
