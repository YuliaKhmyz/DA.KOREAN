require('dotenv').config();
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT ?? 5000;

const serverConfig = require('./config/serverConfig');
const sessionConfig = require('./config/session');

serverConfig(app);

app.use(session(sessionConfig));

try {
  app.listen(PORT, () => {
    console.log(`Арни мчит на ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
