const express = require("express");
const { registerCtrls } = require("../../controller/authCtrls.js/registerCtrl");
const { loginCtrls } = require("../../controller/authCtrls.js/loginCtrls");
const {
  meProfileCtrl,
} = require("../../controller/authCtrls.js/meProfileCtrls");
const authMiddleware = require("../../middleware/authmiddleware");
const { logoutCtrls } = require("../../controller/authCtrls.js/logoutCtrls");
const {
  forgetPasswordCtrls,
} = require("../../controller/authCtrls.js/forgetCtrls");
const resetCtrls = require("../../controller/authCtrls.js/restCtrls");
const authRouter = express.Router();
authRouter.get("/auth/me", authMiddleware, meProfileCtrl);
authRouter.post("/auth/register", registerCtrls);
authRouter.post("/auth/login", loginCtrls);
authRouter.post("/auth/logout", authMiddleware, logoutCtrls);
authRouter.post("/auth/forget-password", forgetPasswordCtrls);
authRouter.post("/auth/reset-password/:token", resetCtrls);

module.exports = { authRouter };
