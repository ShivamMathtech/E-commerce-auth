const TokenBlacklist = require("../../model/blacklistToken");
let logoutCtrls = async (req, res) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // Extract token
    if (!token) return res.status(400).json({ message: "No token provided" });
    // Save token to blacklist
    await TokenBlacklist.create({ token });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.meddage,
    });
  }
};

module.exports = {
  logoutCtrls,
};
