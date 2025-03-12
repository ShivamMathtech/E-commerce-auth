const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
let loginCtrls = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        msg: "Invalid mail",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET_KEY, // Use env variable for security
      { expiresIn: "7d" } // Token expires in 7 days
    );
    res.status(201).json({
      msg: "You LoggedIn Successfully ",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server error",
      error: error.message,
    });
  }
};

module.exports = {
  loginCtrls,
};
