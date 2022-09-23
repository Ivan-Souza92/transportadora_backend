'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('caminhoes' , {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apelido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rendimento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.dropTable('caminhoes');
  }
};
