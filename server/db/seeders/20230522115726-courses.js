'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          main_title: 'начальный курc',
          main_description:
            'Живые онлайн занятия с основателем школы в мини-группах по 4 человека. Цель: освоить базовые грамматики, запустить разговорный, чтобы студенты могли общаться на бытовые темы, решать самостоятельно насущные проблемы в Корее.',
          start_title: 'начало курса в июле',
          start_description:
            'Курс длится 4 месяца. Во время обучения упор делается на практические занятия, тренировочные тесты и увеличение словарного запаса.',
          condition_title: 'как часто проходят занятия?',
          condition_description:
            'Каждую неделю 2 занятия по 60 минут. Очень большая часть зависит от самостоятельной работы между уроками по предоставлены мной материалам.',
          price_title: 'стоимость',
          price: 35000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          main_title: 'подготовка к topik',
          main_description:
            'Мои ученики сдают topic на высший балл. Переезжают в Корею. Смотрят новые серии дорам первыми! И уверенно подпевают на K-Pop концертах ;)',
          start_title: 'начало курса в августе',
          start_description:
            'Курс длится 6 месяцев. Во время обучения упор делается на практические занятия, тренировочные тесты и увеличение словарного запаса.',
          condition_title: 'как часто проходят занятия?',
          condition_description:
            'Каждую неделю 2 занятия по 60 минут. Очень большая часть зависит от самостоятельной работы между уроками по предоставлены мной материалам.',
          price_title: 'стоимость',
          price: 50000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
