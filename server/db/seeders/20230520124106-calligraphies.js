'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CalligraphyCourses',
      [
        {
          link: 'https://drive.google.com/file/d/1bXqYRAR_8f0fCaEm80BqX0Q75VtD8YdJ/view?usp=drivesdk',
          title: 'весна',
          koreantitle: '봄',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: 'https://drive.google.com/u/0/uc?id=1YPYTlWwV7anTT-UVLybyCSn1uP2d8DZn&export=download',
          title: 'лето',
          koreantitle: '여름',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: 'https://drive.google.com/u/0/uc?id=1YPYTlWwV7anTT-UVLybyCSn1uP2d8DZn&export=download',
          title: 'осень',
          koreantitle: '가을',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: 'https://drive.google.com/u/0/uc?id=1YPYTlWwV7anTT-UVLybyCSn1uP2d8DZn&export=download',
          title: 'зима',
          koreantitle: '겨울',
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
