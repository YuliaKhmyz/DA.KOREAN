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

calligraphyRouter.put('/:id', async (req, res, next) => {
  try {
    const calligraphy = await CalligraphyCourse.findByPk(Number(req.params.id));
    console.log('calligraphy', calligraphy);
    if (!calligraphy) {
      res.status(404).json({ success: false, message: 'Нет такого объекта' });

      return;
    }

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

calligraphyRouter.post('/mypage', async (req, res) => {
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

calligraphyRouter.get('/mypage', async (req, res) => {
  const boughtCalligraphies = await BoughtCalligraphy.findAll({
    raw: true,
    where: { user_id: req.session.userId },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });

  const allCourses = await CalligraphyCourse.findAll({ raw: true });

  const myPageCourses = boughtCalligraphies.map((bougthCourse) => {
    const { link, title, koreantitle } =
      allCourses[bougthCourse.calligraphy_course_id - 1];
    return { ...bougthCourse, link, title, koreantitle };
  });
  res.json(myPageCourses);
});

module.exports = calligraphyRouter;
