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
    const registro = await this.pruebaModel.findOne({ where: { city_id: id } });

    if (!registro) throw new Error(`No se pudo encontrar una ciudad con el id:${id}`);

    return fromModelToEntity(registro);
  }

  async eliminarRegistro(id) {
    return this.pruebaModel.destroy({ where: { city_id: id } });
  }
}

module.exports = {
  PruebaRepository,
};
