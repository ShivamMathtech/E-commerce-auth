const user = require("../../model/user");

// Only Admin can ind the all users
let usergetAll = async (req, res) => {
  try {
    const users = await user.find({}, "-password");
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = usergetAll;
