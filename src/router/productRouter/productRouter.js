const express = require("express");
const addProdcutsCtrls = require("../../controller/productCtrls/addProducts");
const adminAuthMiddleware = require("../../middleware/adminauthMiddleware");
const getAllProductsCtrls = require("../../controller/productCtrls/getAllProducts");
const getProductById = require("../../controller/productCtrls/productById");
const deleteProducts = require("../../controller/productCtrls/deleteProduct");
const updateProducts = require("../../controller/productCtrls/updateProducts");
const productRouter = express.Router();
productRouter.post("/products", adminAuthMiddleware, addProdcutsCtrls);
productRouter.get("/products", getAllProductsCtrls);
productRouter.get("/product/:name", getProductById);
productRouter.put("/product/:id", adminAuthMiddleware, updateProducts);
productRouter.delete("/product/:id", adminAuthMiddleware, deleteProducts);

module.exports = productRouter;
