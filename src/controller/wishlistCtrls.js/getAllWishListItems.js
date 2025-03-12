const Wishlist = require("../../model/wishlist");
const getAllWishListCtrls = async (req, res) => {
  try {
    const userId = req.user.userId;
    const wishlist = await Wishlist.findOne({ user: userId }).populate(
      "products.product"
    );
    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }
    res.status(200).json({
      msg: "Your wishlist items",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = getAllWishListCtrls;
