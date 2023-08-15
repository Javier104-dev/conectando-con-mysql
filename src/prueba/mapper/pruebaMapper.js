/* eslint-disable camelcase */
const { Prueba } = require("../entity/prueba");

const fromModelToEntity = ({
  city_id,
  nombre,
  apellido,
  ciudad,
  createdAt,
  lastUpdated,

}) => new Prueba(
  Number(city_id),
  nombre,
  apellido,
  ciudad,
  createdAt,
  lastUpdated,
);

const fromFormToEntity = ({
  city_id,
  nombre,
  apellido,
  ciudad,

}) => new Prueba(
  Number(city_id),
  nombre,
  apellido,
  ciudad,
);

module.exports = {
  fromModelToEntity,
  fromFormToEntity,
};
