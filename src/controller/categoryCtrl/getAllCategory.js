const Category = require("../../model/category");
let getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      msg: "All Category Products",
      categories: categories,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = getAllCategory;
