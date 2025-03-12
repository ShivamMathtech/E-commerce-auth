const product = require("../../model/products");
let getAllProductsCtrls = async (req, res) => {
  try {
    let products = await product.find();
    res.status(200).json({
      msg: "All products",
      products: products,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = getAllProductsCtrls;
