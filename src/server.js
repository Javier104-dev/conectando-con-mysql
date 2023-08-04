const express = require("express");
const { HOST, PORT } = require("./config/config");
const { routes } = require("./prueba/routes/routes");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

"prueba"
"prueba2"

server.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`http://${HOST}:${PORT}/prueba`);
});
