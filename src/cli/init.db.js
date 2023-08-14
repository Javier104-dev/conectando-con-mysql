const { configureDI } = require("../config/configDi");

const container = configureDI();

const mainDb = container.get("Sequelize");

container.get("PruebaModel");

mainDb.sync();
