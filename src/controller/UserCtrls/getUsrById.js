const User = require("../../model/user");
const UsersGetIdCtrls = async (req, res) => {
  const { email } = req.params;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
    res.status(200).json({
      msg: "User Found",
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = UsersGetIdCtrls;
