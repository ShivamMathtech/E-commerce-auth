const Product = require("../../model/products");
let getProductById = async (req, res) => {
  try {
    const { name } = req.params;
    let product = await Product.findOne({ name: name });
    if (!product) {
      return res.status(404).json({
        msg: "Product Not found",
      });
    }

    res.status(200).json({
      msg: "Prodcut Found",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = getProductById;
