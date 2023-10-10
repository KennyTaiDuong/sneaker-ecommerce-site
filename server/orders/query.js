const getAllOrdersQuery = "SELECT * FROM orders";

const getOrderQuery = "SELECT * FROM orders WHERE order_id = $1";

const createOrderQuery =
  "INSERT INTO orders (total_price, shipping_info, order_status) VALUE ($1, $2, $3)";

const deleteOrderQuery = "DELETE FROM orders WHERE order_id = $1";

const updateOrderQuery =
  "UPDATE orders SET total_price = $1, shipping_info = $2, order_status = $3 WHERE order_id = $4";

module.exports = {
  getAllOrdersQuery,
  getOrderQuery,
  createOrderQuery,
  deleteOrderQuery,
  updateOrderQuery,
};
