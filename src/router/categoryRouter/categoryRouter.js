const express = require("express");
const addCategoryCtrls = require("../../controller/categoryCtrl/addCategoryCtrls");
const adminAuthMiddleware = require("../../middleware/adminauthMiddleware");
const getAllCategory = require("../../controller/categoryCtrl/getAllCategory");
const getCategoryById = require("../../controller/categoryCtrl/getCategoryById");
const updateCategory = require("../../controller/categoryCtrl/updateCategory");
const deleteCategory = require("../../controller/categoryCtrl/deleteCategoryCtrls");
const categoryRouter = express.Router();
categoryRouter.post("/addCategory", adminAuthMiddleware, addCategoryCtrls);
categoryRouter.get("/getAllCategory", getAllCategory);
categoryRouter.get("/getCategoryById/:id", getCategoryById);
categoryRouter.put("/updateCategory/:id", adminAuthMiddleware, updateCategory);
categoryRouter.delete(
  "/deleteCategory/:id",
  adminAuthMiddleware,
  deleteCategory
);
module.exports = categoryRouter;
