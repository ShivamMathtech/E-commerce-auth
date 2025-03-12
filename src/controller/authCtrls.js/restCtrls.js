const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let resetCtrls = async (req, res) => {
  try {
    const { token } = req.params;
    console.log(req.params); // Extract token from URL
    const { newPassword } = req.body;
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (decoded.purpose !== "password-reset") {
      return res
        .status(400)
        .json({ message: "Invalid token for password reset" });
    }
    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    // Save the updated password
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = resetCtrls;
