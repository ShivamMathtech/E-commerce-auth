const product = require("../../model/products");
const addProdcutsCtrls = async (req, res) => {
  try {
    const { name, description, price, category, stock, images, brand } =
      req.body;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !stock ||
      !images ||
      !brand
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new product({
      name,
      description,
      price,
      category,
      stock,
      images,
      brand,
    });

    await newProduct.save();

    return res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = addProdcutsCtrls;
