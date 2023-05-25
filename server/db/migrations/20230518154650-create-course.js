'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      main_title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      main_description: {
        type: Sequelize.TEXT,
      },
      start_title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      start_description: {
        type: Sequelize.TEXT,
      },
      condition_title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      condition_description: {
        type: Sequelize.TEXT,
      },
      price_title: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  },
};
