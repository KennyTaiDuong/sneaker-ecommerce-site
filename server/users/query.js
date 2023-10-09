const getAllUsersQuery = "SELECT * FROM users";

const getUserQuery = "SELECT * FROM users WHERE user_id = $1";

const createUserQuery =
  "INSERT INTO users (username, password, first_name, last_name, phone) VALUES ($1, $2, $3, $4, $5)";

const deleteUserQuery = "DELETE FROM users WHERE user_id = $1";

const updateUserQuery =
  "UPDATE users SET username = $1, password = $2, first_name = $3, last_name = $4, phone = $5 WHERE user_id = $6";

module.exports = {
  getAllUsersQuery,
  getUserQuery,
  createUserQuery,
  deleteUserQuery,
  updateUserQuery,
};
