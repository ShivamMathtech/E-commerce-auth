const User = require("../../model/user");
const bycript = require("bcryptjs");
let registerCtrls = async (req, res) => {
  const { name, email, password, address, contact, role } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(200).json({
        msg: "User is already existed",
      });
    }
    let hashpassword = await bycript.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashpassword,
      address,
      contact,
      role,
    });
    user.save();
    res.status(201).json({
      msg: "User is Registed Successflly",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  registerCtrls,
};
