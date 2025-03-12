const Cart = require("../../model/cartmodel");
const deleteCartItemById = async (req, res) => {
  try {
    const userId = req.user.userId;
    const productId = req.params;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({
        msg: "Cart Not Found",
      });
    }
    // console.log(cart.products);
    // 🔥 Remove product from cart
    cart.products = cart.products.filter(
      (p) => p.product.toString() !== productId
    );
    // console.log(cart.totalPrice);
    // 🔥 Recalculate total price
    cart.totalPrice = cart.products.reduce((acc, item) => {
      acc + item.quantity * item.product.price;
    }, 0);
    await cart.save();

    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = deleteCartItemById;
