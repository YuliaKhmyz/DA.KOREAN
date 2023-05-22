const calligraphyRouter = require('express').Router();
const { CalligraphyCourse } = require('../../db/models');

calligraphyRouter.get('/', async (req, res) => {
  try {
    const calligraphies = await CalligraphyCourse.findAll({});
    res.json(calligraphies);
    // console.log('calligraphies', calligraphies);
  } catch (error) {
    console.error(error);
    // res.redirect('/error')
  }
});

calligraphyRouter.post('/', async (req, res) => {
  if (
    req.body.title.trim() === '' ||
    req.body.link.trim() === '' ||
    req.body.koreantitle.trim() === ''
  ) {
    return res.status(422).json({ error: 'Заполните все поля' });
  }

  const calligraphy = await CalligraphyCourse.create({
    title: req.body.title,
    link: req.body.link,
    koreantitle: req.body.koreantitle,
  });

  return res.status(201).json(calligraphy);
});

calligraphyRouter.delete('/:id', async (req, res, next) => {
  try {
    // удаляем задачу с заданным id
    const removeCalligraphy = await CalligraphyCourse.destroy({
      where: {
        // в req.params.id ляжет соответсвующая часть URL
        id: Number(req.params.id),
      },
    });

    if (removeCalligraphy === 0) {
      res.status(404).json({ success: false, message: 'Нет такого объекта' });
    } else {
      res.json({ success: true });
    }
  } catch (er) {
    next(er);
  }
});

calligraphyRouter.put('/:id', async (req, res, next) => {
  try {
    // достаём из БД задачу с заданным id
    const calligraphy = await CalligraphyCourse.findByPk(Number(req.params.id));
    console.log('calligraphy', calligraphy);
    if (!calligraphy) {
      res.status(404).json({ success: false, message: 'Нет такого объекта' });

      return;
    }

    // меняем состояние задачи и сохраняем в БД
    if ('title' in req.body) calligraphy.title = req.body.title;
    if ('koreantitle' in req.body)
      calligraphy.koreantitle = req.body.koreantitle;
    if ('link' in req.body) calligraphy.link = req.body.link;

    await calligraphy.save();

    res.json({ success: true });
  } catch (er) {
    next(er);
  }
});

module.exports = calligraphyRouter;
