const User = require("../../model/user");
let updateUser = async (req, res) => {
  try {
    const { name, email, contact, address } = req.body;
    const userId = req.user.userId;
    // Now find the user by Id
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        msg: "User Not Found",
      });
    }
    // Update user details (excluding password)
    user.name = name || user.name;
    user.email = email || user.email;
    user.contact = contact || user.contact;
    user.address = address || user.address;
    await user.save(); // Save the updated user

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = updateUser;
