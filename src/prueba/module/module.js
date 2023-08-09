const { PruebaController } = require("../controller/pruebaController");
const { PruebaService } = require("../services/pruebaService");
const { PruebaRepository } = require("../repository/pruebaRepository");
const { modelDB } = require("../model/model");

module.exports = {
  PruebaController,
  PruebaService,
  PruebaRepository,
  modelDB,
};
