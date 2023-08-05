class PruebaRepository {
  constructor(pruebaModel) {
    this.pruebaModel = pruebaModel;
  }

  async verRegistros() {
    const registros = await this.pruebaModel.findAll();
    return registros;
  }
}

module.exports = {
  PruebaRepository,
};
