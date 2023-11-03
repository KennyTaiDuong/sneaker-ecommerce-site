const getAllUsersQuery = "SELECT * FROM users";

const getUserQuery = "SELECT * FROM users WHERE email = $1";

const createUserQuery =
  "INSERT INTO users (email, first_name, last_name, phone, shipping_info) VALUES ($1, $2, $3, $4, $5)";

const deleteUserQuery = "DELETE FROM users WHERE email = $1";

const updateUserQuery =
  "UPDATE users SET email = $1, first_name = $2, last_name = $3, phone = $4, shipping_info = $5 WHERE id = $6";

module.exports = {
  getAllUsersQuery,
  getUserQuery,
  createUserQuery,
  deleteUserQuery,
  updateUserQuery,
};
