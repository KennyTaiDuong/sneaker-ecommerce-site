const getAllOrdersQuery = "SELECT * FROM orders";

const getOrderQuery = "SELECT * FROM orders WHERE id = $1";

const createOrderQuery =
  "INSERT INTO orders (total_price, shipping_info, order_status) VALUES ($1, $2, $3)";

const deleteOrderQuery = "DELETE FROM orders WHERE id = $1";

const updateOrderQuery =
  "UPDATE orders SET total_price = $1, shipping_info = $2, order_status = $3, user_id = $4, cart_id = $5 WHERE id = $6";

module.exports = {
  getAllOrdersQuery,
  getOrderQuery,
  createOrderQuery,
  deleteOrderQuery,
  updateOrderQuery,
};
