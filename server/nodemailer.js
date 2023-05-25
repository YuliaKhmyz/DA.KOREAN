const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    // адрес почтового сервера — smtp.yandex.ru; - для яндекса меняем smtp.mail.ru на smtp.yandex.ru
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'xmyza@mail.ru', // ваша почта яндекс
      pass: 'Vkep3sbfRXgd3XA0BZpA',

      // потом нужно Создайте пароль приложения в яндексе на почте и вставит в сточку выше
    },
  },
  {
    from: 'Mailer Test <xmyza@mail.ru>', // ваша почта яндекс
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
