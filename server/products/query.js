const getAllProductsQuery = "SELECT * FROM products";

const getProductQuery = "SELECT * FROM products WHERE sku = $1";

const createProductQuery =
  "INSERT INTO products (sku, name, price, sizes, category) VALUES ($1, $2, $3, $4, $5)";

const deleteProductQuery = "DELETE  FROM products WHERE sku = $1";

const updateProductQuery =
  "UPDATE products SET sku = $1, name = $2, price = $3, sizes = $4, category = $5 WHERE sku = $6";

module.exports = {
  getAllProductsQuery,
  getProductQuery,
  createProductQuery,
  deleteProductQuery,
  updateProductQuery,
};
