const Category = require("../../model/category");
let addCategoryCtrls = async (req, res) => {
  try {
    const { name, description } = req.body;
    // Check if category already exists

    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = new Category({ name, description });
    await category.save();

    res.status(201).json({ message: "Category added successfully", category });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = addCategoryCtrls;
