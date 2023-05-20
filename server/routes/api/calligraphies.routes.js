const calligraphyRouter = require('express').Router();
const { CalligraphyCourse } = require('../../db/models');

calligraphyRouter.get('/', async (req, res) => {
  try {
    const calligraphies = await CalligraphyCourse.findAll({});
    res.json(calligraphies);
    console.log('calligraphies', calligraphies);
  } catch (error) {
    console.error(error);
    // res.redirect('/error')
  }
});

module.exports = calligraphyRouter;
