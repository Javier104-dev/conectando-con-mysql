const express = require("express");
const { City } = require("../model/model");
const { PruebaController, PruebaService, PruebaRepository } = require("../module/module");

const routes = express.Router();

const model = City;
const repository = new PruebaRepository(model);
const service = new PruebaService(repository);
const controller = new PruebaController(service);

routes.get("/prueba", controller.verRegistros.bind(controller));

module.exports = {
  routes,
};
