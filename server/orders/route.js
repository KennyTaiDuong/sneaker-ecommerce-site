const express = require("express");

const {
  getAllOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("./controller");

const orderRouter = express.Router();

orderRouter.get("/", getAllOrders);

orderRouter.get("/:id", getOrder);

orderRouter.post("/", createOrder);

orderRouter.delete("/:id", deleteOrder);

orderRouter.put("/:id", updateOrder);

module.exports = orderRouter;
