// packages
const express = require('express');

// config files
const appConfig = require('./product/config/app-config');

// creates an express app
const app = express();

// listening
app.listen(appConfig.PORT);