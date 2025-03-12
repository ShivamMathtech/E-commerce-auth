const Wishlist = require("../../model/wishlist");
const deleteWishlistCtrls = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.user.userId;
    const wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }
    wishlist.products = wishlist.products.filter((id) => {
      id.toString() !== productId;
    });
    await wishlist.save();
    res.status(200).json({
      success: true,
      message: "Product removed from wishlist",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = deleteWishlistCtrls;
