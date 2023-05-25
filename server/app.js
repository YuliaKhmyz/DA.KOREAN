require('dotenv').config();
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT ?? 5000;

const authApiRouter = require('./routes/api/auth.routes');
const calligraphiesApiRouter = require('./routes/api/calligraphies.routes');
const postsApiRouter = require('./routes/api/posts.routes');
const emailApiRouter = require('./routes/api/email.routes');

const serverConfig = require('./config/serverConfig');
const sessionConfig = require('./config/session');
const courseRouter = require('./routes/api/courses.routes');

serverConfig(app);

app.use(session(sessionConfig));
app.use('/api/auth', authApiRouter);
app.use('/api/calligraphies', calligraphiesApiRouter);
app.use('/api/courses', courseRouter);
app.use('/api/posts', postsApiRouter);
app.use('/api/email', emailApiRouter);

try {
  app.listen(PORT, () => {
    console.log(`Арни мчит на ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
