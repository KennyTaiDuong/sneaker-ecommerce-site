const pool = require("../db");
const {
  getAllUsersQuery,
  getUserQuery,
  createUserQuery,
  deleteUserQuery,
  updateUserQuery,
} = require("./query");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query(getAllUsersQuery);

    res.json(allUsers);
  } catch (error) {
    console.error(error.message);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await pool.query(getUserQuery, [id]);

    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, first_name, last_name, phone } = req.body;

    const newUser = await pool.query(createUserQuery, [
      username,
      password,
      first_name,
      last_name,
      phone,
    ]);

    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await pool.query(deleteUserQuery, [id]);

    res.json(deletedUser);
  } catch (error) {
    console.error(error.message);
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const { username, password, first_name, last_name, phone } = req.body;

    const updatedUser = await pool.query(updateUserQuery, [
      username,
      password,
      first_name,
      last_name,
      phone,
      id,
    ]);

    res.json(updatedUser);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
