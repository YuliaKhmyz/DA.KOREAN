const calligraphyRouter = require('express').Router();
const { CalligraphyCourse, BoughtCalligraphy } = require('../../db/models');

calligraphyRouter.get('/', async (req, res) => {
  try {
    const calligraphies = await CalligraphyCourse.findAll({});
    res.json(calligraphies);
  } catch (error) {
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
    const removeCalligraphy = await CalligraphyCourse.destroy({
      where: {
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

calligraphyRouter.post('/myCalligraphy', async (req, res) => {
  const { id } = req.body;
  const previouslyBoughtCalligraphy = await BoughtCalligraphy.findOne({
    where: { calligraphy_course_id: id, user_id: req.session.userId },
  });

  if (!previouslyBoughtCalligraphy) {
    await BoughtCalligraphy.create({
      calligraphy_course_id: req.body.id,
      user_id: req.session.userId,
    });
  }
});

module.exports = calligraphyRouter;
