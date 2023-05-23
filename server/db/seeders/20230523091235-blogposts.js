'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'BlogPosts',
      [
        {
          title: 'Хангыль',
          description:
            'Я учу корейский уже 20 лет. Но никак не выучу. Почему? Сколько же лет надо, чтобы освоить корейский? Расскажу про свой опыт. Моя личная история в цифрах: ✅ После 2,5 лет изучения корейского в СПбГУ я попала на 3 уровень языковых курсов университета Ёнсе. ✅ За 1 год прошла с 3 по 6 уровень.✅ Через 4 года постоянного обучения сдала 4 ТОПИК и поступила в Корею в магистратуру. ✅ На 5-ый год с начала пути - сдала TOPIK 6 уровень. И уже после этого пошло реальное завоевание языка: курсы литературного перевода, работа в больнице мед координатором, бесконечные бизнес переговоры. Владею ли я корейским в совершенстве? Мое мнение: учить язык и держать голову в тонусе надо всю жизнь. Поэтому я записалась на курсы для прохождения 5 и 6 уровня TOPIK. Еще раз. Хотя только что его успешно сдала. Просто люблю учиться. И буду делать это постоянно. Ближайшая регистрация на сдачу TOPIK 30 мая, а сам экзамен - 9 июля.',
          photo:
            'https://drive.google.com/file/d/13RdHkhgk4J661SnB1j9yaYPoe7kxMPL1/view',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хангыль',
          description:
            'Я учу корейский уже 20 лет. Но никак не выучу. Почему? Сколько же лет надо, чтобы освоить корейский? Расскажу про свой опыт. Моя личная история в цифрах: ✅ После 2,5 лет изучения корейского в СПбГУ я попала на 3 уровень языковых курсов университета Ёнсе. ✅ За 1 год прошла с 3 по 6 уровень.✅ Через 4 года постоянного обучения сдала 4 ТОПИК и поступила в Корею в магистратуру. ✅ На 5-ый год с начала пути - сдала TOPIK 6 уровень. И уже после этого пошло реальное завоевание языка: курсы литературного перевода, работа в больнице мед координатором, бесконечные бизнес переговоры. Владею ли я корейским в совершенстве? Мое мнение: учить язык и держать голову в тонусе надо всю жизнь. Поэтому я записалась на курсы для прохождения 5 и 6 уровня TOPIK. Еще раз. Хотя только что его успешно сдала. Просто люблю учиться. И буду делать это постоянно. Ближайшая регистрация на сдачу TOPIK 30 мая, а сам экзамен - 9 июля.',
          photo:
            'https://drive.google.com/file/d/13RdHkhgk4J661SnB1j9yaYPoe7kxMPL1/view',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хангыль',
          description:
            'Я учу корейский уже 20 лет. Но никак не выучу. Почему? Сколько же лет надо, чтобы освоить корейский? Расскажу про свой опыт. Моя личная история в цифрах: ✅ После 2,5 лет изучения корейского в СПбГУ я попала на 3 уровень языковых курсов университета Ёнсе. ✅ За 1 год прошла с 3 по 6 уровень.✅ Через 4 года постоянного обучения сдала 4 ТОПИК и поступила в Корею в магистратуру. ✅ На 5-ый год с начала пути - сдала TOPIK 6 уровень. И уже после этого пошло реальное завоевание языка: курсы литературного перевода, работа в больнице мед координатором, бесконечные бизнес переговоры. Владею ли я корейским в совершенстве? Мое мнение: учить язык и держать голову в тонусе надо всю жизнь. Поэтому я записалась на курсы для прохождения 5 и 6 уровня TOPIK. Еще раз. Хотя только что его успешно сдала. Просто люблю учиться. И буду делать это постоянно. Ближайшая регистрация на сдачу TOPIK 30 мая, а сам экзамен - 9 июля.',
          photo:
            'https://drive.google.com/file/d/13RdHkhgk4J661SnB1j9yaYPoe7kxMPL1/view',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хангыль',
          description:
            'Я учу корейский уже 20 лет. Но никак не выучу. Почему? Сколько же лет надо, чтобы освоить корейский? Расскажу про свой опыт. Моя личная история в цифрах: ✅ После 2,5 лет изучения корейского в СПбГУ я попала на 3 уровень языковых курсов университета Ёнсе. ✅ За 1 год прошла с 3 по 6 уровень.✅ Через 4 года постоянного обучения сдала 4 ТОПИК и поступила в Корею в магистратуру. ✅ На 5-ый год с начала пути - сдала TOPIK 6 уровень. И уже после этого пошло реальное завоевание языка: курсы литературного перевода, работа в больнице мед координатором, бесконечные бизнес переговоры. Владею ли я корейским в совершенстве? Мое мнение: учить язык и держать голову в тонусе надо всю жизнь. Поэтому я записалась на курсы для прохождения 5 и 6 уровня TOPIK. Еще раз. Хотя только что его успешно сдала. Просто люблю учиться. И буду делать это постоянно. Ближайшая регистрация на сдачу TOPIK 30 мая, а сам экзамен - 9 июля.',
          photo:
            'https://drive.google.com/file/d/13RdHkhgk4J661SnB1j9yaYPoe7kxMPL1/view',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  },
};
