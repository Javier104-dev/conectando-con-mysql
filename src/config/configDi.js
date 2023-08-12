require("dotenv").config();
const { Sequelize } = require("sequelize");
const {
  object,
  use,
  default: DIContainer,
  factory,
} = require("rsdi");
const {
  PruebaController,
  PruebaService,
  PruebaRepository,
  modelDB,
} = require("../prueba/module/module");

const configureSequelize = () => {
  const config = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      dialect: process.env.SEQUELIZE_DIALECT,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  );

  return config;
};

const configureModel = (container) => {
  const config = container.get("Sequelize");
  const model = modelDB(config);
  return model;
};

const addCommonDefinitions = (constainer) => {
  constainer.add({
    Sequelize: factory(configureSequelize),
    Model: factory(configureModel),
  });
};

const addPruebaModuleDefinitions = (constainer) => {
  constainer.add({
    PruebaRepository: object(PruebaRepository).construct(use("Model")),
    PruebaService: object(PruebaService).construct(use("PruebaRepository")),
    PruebaController: object(PruebaController).construct(use("PruebaService")),
  });
};

const configureDI = () => {
  const container = new DIContainer();
  addCommonDefinitions(container);
  addPruebaModuleDefinitions(container);
  return container;
};

module.exports = {
  HOST: process.env.SERVER_HOST,
  PORT: process.env.SERVER_PORT,
  configureDI,
};
