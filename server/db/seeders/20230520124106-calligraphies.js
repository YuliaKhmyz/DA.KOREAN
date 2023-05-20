'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CalligraphyCourses',
      [
        {
          link: 'https://drive.google.com/u/0/uc?id=1bXqYRAR_8f0fCaEm80BqX0Q75VtD8YdJ&export=download',
          title: 'spring',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CalligraphyCourses', null, {});
  },
};
