const express = require("express");
const authMiddleware = require("../../middleware/authmiddleware");
const adminAuthMiddleware = require("../../middleware/adminauthMiddleware");
const usergetAll = require("../../controller/UserCtrls/allUserRetivel");
const UsersGetIdCtrls = require("../../controller/UserCtrls/getUsrById");
const updateUser = require("../../controller/UserCtrls/updateProfile");
const deleteUserCtrl = require("../../controller/UserCtrls/deleteCtrls");
const userRouter = express.Router();
userRouter.get("/users", authMiddleware, usergetAll); // Only admin can See all the users Details
userRouter.get("/user/:email", UsersGetIdCtrls); // User Get his/her profile based on their Email id
userRouter.put("/user/:id", authMiddleware, updateUser); // User Update their Profile
userRouter.delete("/user/:id", adminAuthMiddleware, deleteUserCtrl); //  Delete User only Admin can delete user

module.exports = userRouter;
