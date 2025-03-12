const express = require("express");
const addCartItemCtrls = require("../../controller/cartCtrls/addItemCtrls");
const adminAuthMiddleware = require("../../middleware/adminauthMiddleware");
const authMiddleware = require("../../middleware/authmiddleware");
const getAllCartItems = require("../../controller/cartCtrls/getAllCartItems");
const deleteCartItemById = require("../../controller/cartCtrls/deleteCartItem");
const clearAllCartCtrls = require("../../controller/cartCtrls/clearAllCart");
const cartRouter = express.Router();
cartRouter.post("/cart/add", authMiddleware, addCartItemCtrls);
cartRouter.get("/cart", authMiddleware, getAllCartItems);
cartRouter.put("/cart/update/:id", async (req, res) => {});
cartRouter.delete("/cart/remove/:id", authMiddleware, deleteCartItemById);
cartRouter.delete("/cart/clear", authMiddleware, clearAllCartCtrls);

module.exports = cartRouter;
