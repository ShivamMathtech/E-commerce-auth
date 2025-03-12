const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
const user = require("../model/user");
const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    const token = authHeader.split(" ")[1]; // Extract token after "Bearer "
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || "shiva");
    req.user = decoded; // Attach decoded user info to req.user

    if (!req.user.userId) {
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid Token", error: error.message });
  }
};

module.exports = authMiddleware;
