const { DataTypes } = require("sequelize");

const modelDB = (db) => {
  const City = db.define(
    "city",
    {
      city_id: {
        type: DataTypes.SMALLINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      city: {
        type: DataTypes.STRING(50),
      },
      country_id: {
        type: DataTypes.SMALLINT,
        unique: true,
      },
      last_update: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "city",
      timestamps: false,
    },
  );

  return City;
};

module.exports = {
  modelDB,
};
