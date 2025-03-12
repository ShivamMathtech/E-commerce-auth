const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../utils/sendMail");
let forgetPasswordCtrls = async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        msg: "Invalid Email",
      });
    }

    // Generate password reset token (expires in 15 min)
    const resetToken = jwt.sign(
      { userId: user._id, role: user.role, purpose: "password-reset" },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );
    // Create password reset link
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    // Send email with reset link

    await sendEmail(
      user.email,
      "Password Reset Request",
      `Click on this link to reset your password: ${resetLink}`
    );
    return res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { forgetPasswordCtrls };
