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
        nombre: {
          type: DataTypes.STRING(100),
        },
        apellido: {
          type: DataTypes.STRING(100),
        },
        ciudad: {
          type: DataTypes.STRING(100),
        },
        last_update: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize: sequelizeInstance,
        tableName: "pruebas",
        modelName: "Prueba",
        timestamps: false,
      },
    );

    return PruebaModel;
  }
}

module.exports = {
  PruebaModel,
};
