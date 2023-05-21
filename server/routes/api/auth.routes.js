const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/register', async (req, res) => {
  const { name, email, password, password2 } = req.body;

  try {
    if (name && email && password && password2) {
      if (password !== password2) {
        res.status(403).json({ error: 'Пароли не совпадают' });
        return;
      }

      const existingUser = await User.findOne({ where: { name } });
      if (existingUser) {
        res.status(409).json({
          error: 'Пользователь с таким логином уже существует',
        });
        return;
      }

      const existingEmail = await User.findOne({ where: { email } });

      if (existingEmail) {
        res.status(409).json({
          error:
            'Пользователь с таким адресом электронной почты уже существует',
        });
        return;
      }

      if (!existingUser && !existingEmail && password === password2) {
        const user = await User.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          isAdmin: false,
        });
        req.session.userId = user.id;
        res.status(201).json(user);
        return;
      }
    } else {
      res.status(403).json({ error: 'Заполните все поля' });
    }
  } catch (error) {
    console.error(error);
  }
});

authApiRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  try {
    if (user && password) {
      if (user && (await bcrypt.compare(password, user.password))) {
        const existingUser = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        req.session.userId = existingUser.id;
        res.status(201).json(existingUser);
        return;
      }

      if (!user || !(await bcrypt.compare(password, user.password))) {
        res
          .status(401)
          .json({ error: 'Такого пользователя нет, либо пароли не совпадают' });
      }
    } else {
      res
        .status(403)
        .json({ error: 'Такого пользователя нет, либо пароли не совпадают' });
      return;
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

authApiRouter.get('/logout', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res.clearCookie('user_sid').json({ message: 'Успешный выход' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

authApiRouter.get('/check', async (req, res) => {
  try {
    const userSession = req.session.userId;
    console.log('userSession', userSession);
    if (userSession) {
      const { dataValues: user } = await User.findOne({
        where: { id: userSession },
        attributes: { exclude: ['password'] },
      });
      res.status(201).json({
        isLoggedIn: true,
        user: {
          id: user.id,
          name: user.name,
        },
      });
    } else {
      res.json({ user: undefined, isLoggedIn: false });
    }
  } catch (error) {
    res.status(404).json({ message: error.messsage });
  }
});

module.exports = authApiRouter;
