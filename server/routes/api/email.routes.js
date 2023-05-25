// eslint-disable-next-line import/newline-after-import
const emailApiRouter = require('express').Router();

const { Email } = require('../../db/models');
const mailer = require('../../nodemailer');

emailApiRouter.post('/email', async (req, res) => {
  const { email } = req.body;

  const existingEmail = await Email.findOne({ where: { email } });

  try {
    if (!existingEmail) {
      const newEmail = await Email.create({ email });
      const message = {
        to: req.body.email,
        subject: `Новости школы "DA.KOREAN"`,
        text: `Поздравляем!
Вы подписались на новостную рассылку школы по изучению корейского языка "DA.KOREAN"!
Мы будем присылать Вам новости о языковых курсах, скидках, интересных событиях, связанных с изучением корейского
С уважением,
Команда "DA.KOREAN".
                `,
      };
      mailer(message);
      res.status(201).json(message);
      return;
    }
    res.status(403).json({ error: 'Вы уже подписаны на рассылку' });
    return;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = emailApiRouter;
