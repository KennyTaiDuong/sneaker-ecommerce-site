require("dotenv").config();

const productRoutes = require("./products/route");
const userRoutes = require("./user/routes");

const express = require("express");

// express app
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Connected to db and listening on port ${process.env.PORT}`);
});

app.use("/api/product", productRoutes);
app.use("/api/users", userRoutes);
