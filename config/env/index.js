require("dotenv").config();

const env = process.env.NODE_ENV || "development";
//development.js or production.js or test.js
const config = require(`./${env}`);

console.log("Environment Type:" + env);

module.exports = config;
