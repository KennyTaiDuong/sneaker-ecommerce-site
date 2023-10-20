require("dotenv").config();

const productRoutes = require("./products/route");
const userRoutes = require("./users/route");
const orderRoutes = require("./orders/route");
const cartRoutes = require("./carts/route");
const cors = require("cors");

const express = require("express");

// express app
const app = express();

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

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);
