require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Kenduong2003!",
  database: "sneaker",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
