'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('viagens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
      caminhao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'caminhoes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      localidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'localidades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      data:{
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('viagens');
  }
};
