const express = require("express");
const { verRegistros, urlInexistente } = require("../controllers/controllers");

const routes = express.Router();

routes.get("/prueba", verRegistros);
routes.use("*", urlInexistente);

module.exports = {
  routes,
};
