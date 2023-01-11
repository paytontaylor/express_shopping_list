const express = require('express');
const app = express();
const listRoutes = require('./listRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/items', listRoutes())

module.exports = { app }