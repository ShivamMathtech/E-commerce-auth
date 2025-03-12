const Wishlist = require("../../model/wishlist");
const addWishlistCtrls = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.userId;

    let wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, products: [productId] });
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Product already in wishlist" });
      }
    }

    await wishlist.save();
    res
      .status(200)
      .json({ success: true, message: "Product added to wishlist", wishlist });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error adding to wishlist", error });
  }
};

module.exports = addWishlistCtrls;
