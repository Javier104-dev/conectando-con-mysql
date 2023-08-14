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
  PruebaModel,
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

const configurePruebaModel = (container) => {
  PruebaModel.setup(container.get("Sequelize"));
  return PruebaModel;
};

const addCommonDefinitions = (constainer) => {
  constainer.add({
    Sequelize: factory(configureSequelize),
  });
};

const addPruebaModuleDefinitions = (constainer) => {
  constainer.add({
    PruebaController: object(PruebaController).construct(use("PruebaService")),
    PruebaService: object(PruebaService).construct(use("PruebaRepository")),
    PruebaRepository: object(PruebaRepository).construct(use("PruebaModel")),
    PruebaModel: factory(configurePruebaModel),
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
