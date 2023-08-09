class PruebaRepository {

  constructor(pruebaModel) {
    this.pruebaModel = pruebaModel;
  }

  async verRegistros() {
    const registros = await this.pruebaModel.findAll();
    return registros;
  }

  async verRegistro(id) {
    const registro = await this.pruebaModel.findOne({ where: { city_id: id } });

    if (!registro) throw new Error(`No se pudo encontrar una ciudad con el id:${id}`);

    return registro;
  }
}

module.exports = {
  PruebaRepository,
};
