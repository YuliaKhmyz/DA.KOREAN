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

module.exports = calligraphyRouter;
