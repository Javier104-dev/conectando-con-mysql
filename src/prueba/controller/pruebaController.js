const { AbstractController } = require("../abstractController");

class PruebaController extends AbstractController {

  constructor(clubService) {
    super();
    this.clubService = clubService;
  }

  async verRegistros(req, res) {
    try {
      const registros = await this.clubService.verRegistros();
      res.status(200).json(registros);

    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  }
}

module.exports = {
  PruebaController,
};
