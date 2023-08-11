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

const configSequelize = () => {
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

const configModel = (container) => {
  const config = container.get("sequelize");
  const model = modelDB(config);
  return model;
};

const configDi = () => {
  const container = new DIContainer();
  container.add({
    sequelize: factory(configSequelize),
    model: factory(configModel),
    PruebaRepository: object(PruebaRepository).construct(use("model")),
    PruebaService: object(PruebaService).construct(use("PruebaRepository")),
    PruebaController: object(PruebaController).construct(use("PruebaService")),
  });
  return container;
};

module.exports = {
  HOST: process.env.SERVER_HOST,
  PORT: process.env.SERVER_PORT,
  configDi,
};
