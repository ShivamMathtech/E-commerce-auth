const User = require("../../model/user");
let meProfileCtrl = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({
      msg: "Insternal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  meProfileCtrl,
};
