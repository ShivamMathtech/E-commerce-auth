const Cart = require("../../model/cartmodel");
const Product = require("../../model/products");
const user = require("../../model/user");
const addCartItemCtrls = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.userId;
    // console.log(userId);
    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      //  If cart doesn't exist, create one
      cart = new Cart({ user: userId, products: [], totalPrice: 0 });
    }
    const existingProductIndex = cart.products.findIndex(
      (p) => p.product.toString() === productId
    );
    if (existingProductIndex !== -1) {
      // 🔥 If product exists in cart, update quantity
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      // 🔥 Add new product to cart
      cart.products.push({ product: productId, quantity });
    }

    // 🔥 Recalculate total price
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.quantity * product.price,
      0
    );

    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = addCartItemCtrls;
