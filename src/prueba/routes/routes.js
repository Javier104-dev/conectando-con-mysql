const express = require("express");

const routes = express.Router();

const configureRoutes = (container) => {
  const controller = container.get("PruebaController");
  routes.get("/ciudad", controller.verRegistros.bind(controller));
  routes.get("/ciudad/:id", controller.verRegistro.bind(controller));
  routes.delete("/ciudad/:id", controller.eliminarRegistro.bind(controller));
  return routes;
};

module.exports = {
  configureRoutes,
};
