const products = require("../../model/products");
let updateProducts = async (req, res) => {
  try {
    const { name, price, category, description, stock } = req.body;
    let product = await products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        msg: "Product Not found",
      });
    }
    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;
    product.description = description || product.description;
    product.stock = stock || product.stock;
    const updatedproduct = await product.save();
    res.status(200).json({
      msg: "Prodcut Updated",
      product: updatedproduct,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = updateProducts;
