const express = require('express');
const mainRoute = require('./routes/routes');
const audioPlayerRoute = require('./routes/audioplayer');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/`));
app.use(mainRoute);
app.use(audioPlayerRoute);

module.exports = app;