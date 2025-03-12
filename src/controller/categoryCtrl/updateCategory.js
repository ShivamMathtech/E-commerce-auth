const Category = require("../../model/category");
const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const categroy = await Category.findById({ _id: req.params.id });
    if (!categroy) {
      return res.status(404).json({
        msg: "Category not found",
      });
    }
    categroy.name = name || categroy.name;
    categroy.description = description || categroy.description;
    const updatedCategory = await categroy.save();
    res.status(201).json({
      msg: "Category Updated",
      updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = updateCategory;
