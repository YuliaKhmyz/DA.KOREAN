'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CalligraphyCourses',
      [
        {
          link: 'https://drive.google.com/u/0/uc?id=1bXqYRAR_8f0fCaEm80BqX0Q75VtD8YdJ&export=download',
          title: 'весна',
          koreantitle: '봄',
          price: 1000,
          type: 'calligraphy',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: 'https://drive.google.com/u/0/uc?id=1YPYTlWwV7anTT-UVLybyCSn1uP2d8DZn&export=download',
          title: 'лето',
          koreantitle: '여름',
          price: 1000,
          type: 'calligraphy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: 'https://drive.google.com/u/0/uc?id=1YPYTlWwV7anTT-UVLybyCSn1uP2d8DZn&export=download',
          title: 'осень',
          koreantitle: '가을',
          price: 1000,
          type: 'calligraphy',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: 'https://drive.google.com/u/0/uc?id=1YPYTlWwV7anTT-UVLybyCSn1uP2d8DZn&export=download',
          title: 'зима',
          koreantitle: '겨울',
          price: 1000,
          type: 'calligraphy',

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
