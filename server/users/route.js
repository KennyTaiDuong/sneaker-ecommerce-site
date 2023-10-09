const express = require("express");
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("./controller");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", createUser);

userRouter.delete("/:id", deleteUser);

userRouter.put("/:id", updateUser);

module.exports = userRouter;
