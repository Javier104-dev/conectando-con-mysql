const { Prueba } = require("../entity/prueba");
const { fromModelToEntity } = require("../mapper/pruebaMapper");

class PruebaRepository {

  constructor(pruebaModel) {
    this.pruebaModel = pruebaModel;
  }

  async verRegistros() {
    const registros = await this.pruebaModel.findAll();
    const mapper = registros.map((element) => fromModelToEntity(element));
    return mapper;
  }

  async verRegistro(id) {
    const registro = await this.pruebaModel.findOne({ where: { id } });

    if (!registro) throw new Error(`No se pudo encontrar una ciudad con el id: ${id}`);

    return fromModelToEntity(registro);
  }

  async save(registro) {
    const pruebaModel = this.pruebaModel.build(registro, { isNewRecord: !registro.id });

    await pruebaModel.save();

    return fromModelToEntity(pruebaModel);
  }

  async eliminarRegistro(registro) {
    if (!(registro instanceof Prueba)) throw new Error("El registro no es una instancia de la clase Prueba");

    return this.pruebaModel.destroy({ where: { id: registro.id } });
  }
}

module.exports = {
  PruebaRepository,
};
