require("dotenv").config();

const DB_HOST = process.env.PROD_DB_HOST;
const DB_PORT = process.env.PROD_DB_PORT;
const DB_NAME = process.env.PROD_DB_NAME;
const DB_USER = process.env.PROD_DB_USER;
const DB_PASSWORD = process.env.PROD_DB_PASSWORD;

module.exports = {
  mysql: {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
  },
};
