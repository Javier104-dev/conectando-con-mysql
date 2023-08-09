const express = require("express");
const { configDi } = require("../../config/configDi");

const controller = configDi().get("PruebaController");
const routes = express.Router();

routes.get("/ciudad", controller.verRegistros.bind(controller));

module.exports = {
  routes,
};
