const Category = require("../../model/category");
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById({ _id: req.params.id });
    if (!category) {
      return res.status(404).json({
        msg: "Category Not Found",
      });
    }
    await Category.findByIdAndDelete({ _id: req.params.id });
    res.status(201).json({
      msg: "Category Deleted Successyfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = deleteCategory;
