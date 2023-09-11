const express = require("express");
const { HOST, PORT } = require("./config/configDi");
const { configureRoutes } = require("./prueba/routes/routes");
const { configureDI } = require("./config/configDi");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const container = configureDI();

server.use(configureRoutes(container));

server.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`http://${HOST}:${PORT}`);
});
