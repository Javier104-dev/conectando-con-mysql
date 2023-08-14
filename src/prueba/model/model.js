const { DataTypes, Model } = require("sequelize");

class PruebaModel extends Model {

  static setup(sequelizeInstance) {
    PruebaModel.init(
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
        sequelize: sequelizeInstance,
        tableName: "city",
        modelName: "Model",
        timestamps: false,
      },
    );

    return PruebaModel;
  }
}

module.exports = {
  PruebaModel,
};
