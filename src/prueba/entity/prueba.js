class Prueba {

  constructor(
    id,
    nombre,
    apellido,
    ciudad,
    createdAt,
    lastUpdated,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
    this.createdAt = createdAt;
    this.lastUpdated = lastUpdated;
  }
}

module.exports = {
  Prueba,
};
