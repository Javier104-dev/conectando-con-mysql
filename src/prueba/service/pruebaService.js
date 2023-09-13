const { Prueba } = require("../entity/prueba");

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

  async save(registro) {
    if (registro === undefined) throw new Error("El registro no es tiene formato valido");

    return this.pruebaRepository.save(registro);
  }

  async eliminarRegistro(registro) {
    if (!(registro instanceof Prueba)) throw new Error("El registro no es tiene formato valido");

    return this.pruebaRepository.eliminarRegistro(registro);
  }
}

module.exports = {
  PruebaService,
};
