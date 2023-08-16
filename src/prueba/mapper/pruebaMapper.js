const { Prueba } = require("../entity/prueba");

const fromModelToEntity = ({
  id,
  nombre,
  apellido,
  ciudad,
  createdAt,
  updatedAt,

}) => new Prueba(
  id,
  nombre,
  apellido,
  ciudad,
  createdAt,
  updatedAt,
);

const fromFormToEntity = ({
  id,
  nombre,
  apellido,
  ciudad,

}) => new Prueba(
  Number(id),
  nombre,
  apellido,
  ciudad,
);

module.exports = {
  fromModelToEntity,
  fromFormToEntity,
};
