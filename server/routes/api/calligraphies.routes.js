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
  if (req.body.title.trim() === '') {
    return res.status(422).json({ error: 'Заголовок задачи не должен быть пустым' });
  }

  const task = await Task.create({
    title: req.body.title,
    user_id: req.session.userId,
  });

  return res.status(201).json(task);
});

module.exports = calligraphyRouter;
