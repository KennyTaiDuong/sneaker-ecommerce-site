const express = require("express");
const {
  getAllCarts,
  getCart,
  createCart,
  deleteCart,
  updateCart,
} = require("./controller");

const router = express.Router();

router.get("/", getAllCarts);

router.get("/:id", getCart);

router.post("/", createCart);

router.delete("/:id", deleteCart);

router.put("/:id", updateCart);

module.exports = router;
