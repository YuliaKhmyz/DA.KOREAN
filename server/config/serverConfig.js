const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:4000'],
  optionsSuccessStatus: 200,
  credentials: true,
};

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors(corsOptions));
};

module.exports = serverConfig;
