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

module.exports = courseRouter;
