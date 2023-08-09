require("dotenv").config();
const { Sequelize } = require("sequelize");
const {
  object,
  use,
  default: DIContainer,
  func,
} = require("rsdi");
const {
  PruebaController,
  PruebaService,
  PruebaRepository,
  modelDB,
} = require("../prueba/module/module");

const dbConfig = new Sequelize(
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

const configDi = () => {
  const container = new DIContainer();
  container.add({
    config: dbConfig,
    modelDB: func(modelDB, use("config")),
    PruebaRepository: object(PruebaRepository).construct(use("modelDB")),
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
