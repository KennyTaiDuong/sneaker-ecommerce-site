const express = require("express");
const { getPublishableKey, createPaymentIntent } = require("./controller");

const router = express.Router();

router.get("/config", getPublishableKey);

router.post("/create-payment-intent", createPaymentIntent);

module.exports = router;
