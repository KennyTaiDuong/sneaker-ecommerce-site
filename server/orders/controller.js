const pool = require("../db");
const {
  getAllOrdersQuery,
  getOrderQuery,
  createOrderQuery,
  deleteOrderQuery,
  updateOrderQuery,
} = require("./query");

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await pool.query(getAllOrdersQuery);

    res.json(allOrders);
  } catch (error) {
    console.error(error.message);
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await pool.query(getOrderQuery, [id]);

    res.json(order);
  } catch (error) {
    console.error(error.message);
  }
};

const createOrder = async (req, res) => {
  const {
    total_price,
    shipping_info,
    order_status,
    cart_id,
    user_id,
    products,
  } = req.body;

  try {
    const newOrder = await pool.query(createOrderQuery, [
      total_price,
      shipping_info,
      order_status,
      cart_id,
      user_id,
      products,
    ]);

    res.json(newOrder);
  } catch (error) {
    console.error(error.message);
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await pool.query(deleteOrderQuery, [id]);

    res.json(deletedOrder);
  } catch (error) {
    console.error(error.message);
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      total_price,
      shipping_info,
      order_status,
      user_id,
      cart_id,
      products,
    } = req.body;

    const updatedOrder = await pool.query(updateOrderQuery, [
      total_price,
      shipping_info,
      order_status,
      user_id,
      cart_id,
      products,
      id,
    ]);

    res.json(updatedOrder);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
};
