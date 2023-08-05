class PruebaService {
  constructor(clubRepository) {
    this.clubRepository = clubRepository;
  }

  async verRegistros() {
    const registros = this.clubRepository.verRegistros();
    return registros;
  }
}

module.exports = {
  PruebaService,
};
