const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/config");

const City = sequelize.define(
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

module.exports = {
  City,
};
