const { configureDI } = require("../config/configDi");

(async () => {
  const container = configureDI();

  const mainDb = container.get("Sequelize");
  container.get("PruebaModel");

  await mainDb.sync();
})();
