const express = require("express");
const addWishlistCtrls = require("../../controller/wishlistCtrls.js/wishlistAdd");
const authMiddleware = require("../../middleware/authmiddleware");
const getAllWishListCtrls = require("../../controller/wishlistCtrls.js/getAllWishListItems");
const deleteWishlistCtrls = require("../../controller/wishlistCtrls.js/deletewishlistCtrls");
const wishListRouter = express.Router();
wishListRouter.post("/wishlist/add", authMiddleware, addWishlistCtrls);
wishListRouter.get("/wishlist", authMiddleware, getAllWishListCtrls);
wishListRouter.delete("/remove/:id", authMiddleware, deleteWishlistCtrls);

module.exports = wishListRouter;
