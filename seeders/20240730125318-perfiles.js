'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let perfiles = ['Admin', 'Supervisor', 'Operador', 'Cliente'];
    let estados = ['Activo', 'Inactivo'];

    for (let i = 0; i < perfiles.length; i++) {
      await queryInterface.bulkInsert('perfiles', [{
        descripcion: perfiles[i],
        estado: estados[Math.floor(Math.random() * estados.length)],
        createdAt: new Date(),
        updatedAt: new Date()
      }],{});
    }
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('perfiles', null, {});
  }
};
