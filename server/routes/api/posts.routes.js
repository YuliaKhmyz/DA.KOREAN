const postsRouter = require('express').Router();

const { BlogPost } = require('../../db/models');

postsRouter.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.findAll({});
    res.json(posts);
  } catch (error) {
    // res.redirect('/error')
  }
});

module.exports = postsRouter;
