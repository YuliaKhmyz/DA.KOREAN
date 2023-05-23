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

module.exports = courseRouter;
