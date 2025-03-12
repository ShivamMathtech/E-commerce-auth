const express = require("express");
const authMiddleware = require("../../middleware/authmiddleware");
const OrderCreateCtrls = require("../../controller/orderCtrls/createOrdersCtrls");
const orderRouter = express.Router();
orderRouter.post("/orders", authMiddleware, OrderCreateCtrls);
orderRouter.get("/orders", async (req, res) => {});
orderRouter.get("/orders/user", async (req, res) => {});
orderRouter.get("/orders/:id", async (req, res) => {});
orderRouter.put("/orders/:id/status", async (req, res) => {});
orderRouter.delete("/orders/:id", async (req, res) => {});

module.exports = orderRouter;
