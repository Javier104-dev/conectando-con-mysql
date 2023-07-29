const { verRegistros: verRegistrosServices } = require("../services/services");

const verRegistros = async (req, res) => {
  try {
    const registros = await verRegistrosServices();
    res.status(200).json(registros);

  } catch (error) {
    res.status(500).json({ error: error.message });

  }
};

const urlInexistente = (req, res) => {
  res.status(404).json({ 404: "Url no encontrada" });
};

module.exports = {
  verRegistros,
  urlInexistente,
};
