const getAllCartsQuery = "SELECT * FROM carts";

const getCartQuery = "SELECT * FROM carts WHERE id = $1";

const createCartQuery = "INSERT INTO carts (products, user_id) VALUES ($1, $2)";

const deleteCartQuery = "DELETE FROM carts WHERE id = $1";

const updateCartQuery =
  "UPDATE carts SET products = $1, user_id = $2 WHERE id = $3";

module.exports = {
  getAllCartsQuery,
  getCartQuery,
  createCartQuery,
  deleteCartQuery,
  updateCartQuery,
};
