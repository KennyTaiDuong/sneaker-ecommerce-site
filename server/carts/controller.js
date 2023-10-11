const pool = require("../db");

const {
  getAllCartsQuery,
  getCartQuery,
  createCartQuery,
  deleteCartQuery,
  updateCartQuery,
} = require("./query");

const getAllCarts = async (req, res) => {
  try {
    const allCarts = await pool.query(getAllCartsQuery);

    res.json(allCarts);
  } catch (error) {
    console.error(error.message);
  }
};

const getCart = async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await pool.query(getCartQuery, [id]);

    res.json(cart);
  } catch (error) {
    console.error(error.message);
  }
};

const createCart = async (req, res) => {
  try {
    const { products, user_id } = req.body;

    const productsAsJsonb = products.map((product) => JSON.stringify(product));

    const createdCart = await pool.query(createCartQuery, [
      productsAsJsonb,
      user_id,
    ]);

    res.json(createdCart);
  } catch (error) {
    console.error(error.message);
  }
};

const deleteCart = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCart = await pool.query(deleteCartQuery, [id]);

    res.json(deletedCart);
  } catch (error) {
    console.error(error.message);
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;

  try {
    const { products, user_id } = req.body;

    const updatedCart = await pool.query(updateCartQuery, [
      products,
      user_id,
      id,
    ]);

    res.json(updatedCart);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllCarts,
  getCart,
  createCart,
  deleteCart,
  updateCart,
};
