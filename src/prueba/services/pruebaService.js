class PruebaService {

  constructor(pruebaRepository) {
    this.pruebaRepository = pruebaRepository;
  }

  async verRegistros() {
    const registros = this.pruebaRepository.verRegistros();
    return registros;
  }

  async verRegistro(id) {
    if (!id) throw new Error("El id no esta definido");

    const registro = this.pruebaRepository.verRegistro(id);
    return registro;
  }

  async eliminarRegistro(id) {
    if (!id) throw new Error("El id no esta definido");

    return this.pruebaRepository.eliminarRegistro(id);
  }
}

module.exports = {
  PruebaService,
};
