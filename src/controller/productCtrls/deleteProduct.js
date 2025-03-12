const products = require("../../model/products");

let deleteProducts = async (req, res) => {
  try {
    const product = await products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        msg: "Product not found",
      });
    }
    await products.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Product Is deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = deleteProducts;
