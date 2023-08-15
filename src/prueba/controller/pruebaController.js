const { fromFormToEntity } = require("../mapper/pruebaMapper");

class PruebaController {

  constructor(pruebaService) {
    this.pruebaService = pruebaService;
  }

  async verRegistros(req, res) {
    try {
      const registros = await this.pruebaService.verRegistros();
      res.status(200).json(registros);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async verRegistro(req, res) {
    const { id } = req.params;

    try {
      const registro = await this.pruebaService.verRegistro(id);
      res.status(200).json(registro);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async save(req, res) {
    const registro = fromFormToEntity(req.body);

    try {
      const savedRegistro = await this.pruebaService.save(registro);
      if (registro.id) {
        res.status(200).json({ msg: "registro actualizado", savedRegistro });
      } else {
        res.status(200).json({ msg: "registro creado con exito", registro });
      }

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminarRegistro(req, res) {
    const { id } = req.params;

    try {
      const registro = await this.pruebaService.verRegistro(id);
      await this.pruebaService.eliminarRegistro(registro);
      res.status(200).json({ msg: "eliminado", registro });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = {
  PruebaController,
};
