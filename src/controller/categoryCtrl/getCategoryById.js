const Category = require("../../model/category");
let getCategoryById = async (req, res) => {
  try {
    let categories = await Category.findById(req.params.id);
    if (!categories) {
      return res.status(404).json({
        msg: "Category not Found",
      });
    }
    res.status(200).json({
      msg: "Find Categroy",
      categories,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = getCategoryById;
