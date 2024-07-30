'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un usuario pertenece a un perfil
      usuario.belongsTo(models.perfil, {
        as: 'perfil',
        foreignKey: 'id_perfil'
      });
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    id_perfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuarios'
  });
  return usuario;
};