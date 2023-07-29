const { City } = require("../model/model");

const verRegistros = async () => {
  const registros = await City.findAll();
  return registros;
};

module.exports = {
  verRegistros,
};
