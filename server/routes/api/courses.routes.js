const courseRouter = require('express').Router();
const { Course } = require('../../db/models');

courseRouter.get('/', async (req, res) => {
  try {
    const courses = await Course.findAll({});
    res.json(courses);
  } catch (error) {
    console.log(error);
  }
});

courseRouter.post('/', async (req, res) => {
  const course = await Course.create({
    main_title: req.body.main_title,
    main_description: req.body.main_description,
    start_title: req.body.start_title,
    start_description: req.body.start_description,
    condition_title: req.body.condition_title,
    condition_description: req.body.condition_description,
    price_title: req.body.price_title,
    price: req.body.price,
  });

  return res.status(201).json(course);
});

courseRouter.delete('/:id', async (req, res, next) => {
  try {
    const removeCourse = await Course.destroy({
      where: {
        id: Number(req.params.id),
      },
    });

    if (removeCourse === 0) {
      res.status(404).json({ success: false, message: 'Нет такого объекта' });
    } else {
      res.json({ success: true });
    }
  } catch (er) {
    next(er);
  }
});

courseRouter.put('/:id', async (req, res, next) => {
  try {
    const course = await Course.findByPk(Number(req.params.id));
    console.log('course', course);
    if (!course) {
      res.status(404).json({ success: false, message: 'Нет такого объекта' });

      return;
    }
    course.main_title = req.body.main_title;
    course.main_description = req.body.main_description;
    course.start_title = req.body.start_title;
    course.start_descriptione = req.body.start_descriptione;
    course.condition_title = req.body.condition_title;
    course.condition_description = req.body.condition_description;
    course.price_title = req.body.price_title;
    course.price = req.body.price;
    console.log('newcourse', course);

    // if ('title' in req.body) calligraphy.title = req.body.title;
    // if ('koreantitle' in req.body)
    //   calligraphy.koreantitle = req.body.koreantitle;
    // if ('link' in req.body) calligraphy.link = req.body.link;

    await course.save();

    res.json({ success: true });
  } catch (er) {
    next(er);
  }
});

module.exports = courseRouter;
