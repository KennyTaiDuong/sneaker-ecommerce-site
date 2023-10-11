const getAllProductsQuery = "SELECT * FROM products";

const getProductQuery = "SELECT * FROM products WHERE sku = $1";

const createProductQuery =
  "INSERT INTO products (sku, name, price, sizes, category, images) VALUES ($1, $2, $3, $4, $5, $6)";

const deleteProductQuery = "DELETE FROM products WHERE sku = $1";

const updateProductQuery =
  "UPDATE products SET sku = $1, name = $2, price = $3, sizes = $4, category = $5, images = $6 WHERE sku = $7";

module.exports = {
  getAllProductsQuery,
  getProductQuery,
  createProductQuery,
  deleteProductQuery,
  updateProductQuery,
};
