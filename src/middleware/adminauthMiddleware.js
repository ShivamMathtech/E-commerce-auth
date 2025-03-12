const jwt = require("jsonwebtoken");
const User = require("../model/user");

const adminAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET_KEY
    );
    req.user = decoded; // Attach user info to request

    // Check if user is admin
    const adminUser = await User.findById(req.user.userId);
    if (!adminUser || adminUser.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = adminAuthMiddleware;
