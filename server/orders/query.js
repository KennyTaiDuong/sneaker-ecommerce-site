const getAllOrdersQuery = "SELECT * FROM orders";

const getOrderQuery = "SELECT * FROM orders WHERE id = $1";

const createOrderQuery =
  "INSERT INTO orders (total_price, shipping_info, order_status, cart_id, user_id, products, name) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const deleteOrderQuery = "DELETE FROM orders WHERE id = $1";

const updateOrderQuery =
  "UPDATE orders SET total_price = $1, shipping_info = $2, order_status = $3, user_id = $4, cart_id = $5, products = $6, name =$7 WHERE id = $8";

module.exports = {
  getAllOrdersQuery,
  getOrderQuery,
  createOrderQuery,
  deleteOrderQuery,
  updateOrderQuery,
};
