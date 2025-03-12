const express = require("express");
const authMiddleware = require("../../middleware/authmiddleware");
const OrderCreateCtrls = require("../../controller/orderCtrls/createOrdersCtrls");
const getOrders = require("../../controller/orderCtrls/getAllOrder");
const adminAuthMiddleware = require("../../middleware/adminauthMiddleware");
const getOrderById = require("../../controller/orderCtrls/getOrderById");
const deleteOrder = require("../../controller/orderCtrls/deleteOrderCtrls");
const updateOrderStatus = require("../../controller/orderCtrls/updateOrderStatus");
const orderRouter = express.Router();
orderRouter.post("/orders", authMiddleware, OrderCreateCtrls);
orderRouter.get("/orders", adminAuthMiddleware, getOrders); //Only admin can retrive all Orders
// orderRouter.get("/orders/user", async (req, res) => {});
orderRouter.get("/orders/:id", authMiddleware, getOrderById);
orderRouter.put("/orders/:id/status", adminAuthMiddleware, updateOrderStatus);
orderRouter.delete("/orders/:id", adminAuthMiddleware, deleteOrder);

module.exports = orderRouter;
