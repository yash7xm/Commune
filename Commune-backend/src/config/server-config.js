require("dotenv").config();

const ServerConfig = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  API_SERVER_PORT: process.env.API_SERVER_PORT,
};

module.exports = ServerConfig;
