'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      translationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Translations',
          key: 'id',
        },
        onDelete: 'CASCADE', type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.BOOLEAN
      },
      review: {
        type: Sequelize.STRING
      },
      requester: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};