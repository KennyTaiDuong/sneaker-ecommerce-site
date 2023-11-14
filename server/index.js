require("dotenv").config();

const productRoutes = require("./products/route");
const userRoutes = require("./users/route");
const orderRoutes = require("./orders/route");
const cartRoutes = require("./carts/route");

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const cors = require("cors");

const express = require("express");

// express app
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Connected to db and listening on port ${process.env.PORT}`);
});

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/stripe/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/stripe/create-payment-intent", async (req, res) => {
  try {
    const { body } = req;
    console.log(req);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);
