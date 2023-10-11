const pool = require("../db");

const {
  getAllProductsQuery,
  getProductQuery,
  createProductQuery,
  deleteProductQuery,
  updateProductQuery,
} = require("./query");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await pool.query(getAllProductsQuery);

    res.json(allProducts);
  } catch (error) {
    console.error(error.message);
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await pool.query(getProductQuery, [id]);

    res.json(product.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const { sku, name, price, sizes, category, images } = req.body;

    const newProduct = await pool.query(createProductQuery, [
      sku,
      name,
      price,
      sizes,
      category,
      images,
    ]);

    res.json(newProduct);
  } catch (error) {
    console.error(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await pool.query(deleteProductQuery, [id]);

    res.json(product);
  } catch (error) {
    console.error(error.message);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { sku, name, price, sizes, category, images } = req.body;

  try {
    const updateProduct = await pool.query(updateProductQuery, [
      sku,
      name,
      price,
      sizes,
      category,
      images,
      id,
    ]);

    res.json(updateProduct);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
