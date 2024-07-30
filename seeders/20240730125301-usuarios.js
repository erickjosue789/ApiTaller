'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let nombres = ['Erick', 'Ivanna', 'Carlos', 'Cristhian', 'Jose', 'Vicente', 'Carmen'];
    let apellidos = ['Gonzalez', 'Valdiviezo', 'Molina', 'Ramirez', 'Espinoza', 'Delgado'];
    let [perfiles, perfiles_metadata] = await queryInterface.sequelize.query('SELECT id FROM perfiles');

    for (let i = 0; i < 10; i++) {
      let num_cedula ='0';
      for (let i = 0; i < 9; i++) {
        num_cedula = num_cedula + Math.floor(Math.random() * 10);
      }

      await queryInterface.bulkInsert('usuarios', [{
        nombre: nombres[Math.floor(Math.random() * nombres.length)],
        apellido: apellidos[Math.floor(Math.random() * apellidos.length)],
        id_perfil: perfiles[Math.floor(Math.random() * perfiles.length)].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }],{});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};