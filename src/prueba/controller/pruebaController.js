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
}

module.exports = {
  PruebaController,
};
