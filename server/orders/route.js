const express = require("express");

const {
  getAllOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("./controller");

const router = express.Router();

router.get("/", getAllOrders);

router.get("/:id", getOrder);

router.post("/", createOrder);

router.delete("/:id", deleteOrder);

router.put("/:id", updateOrder);

module.exports = router;
