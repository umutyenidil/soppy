// package files
const express = require('express');
const path = require("path");

// configurations files
const appConfig = require('./product/configurations/app-config');

// route files
const publicRoutes = require('./product/routes/public/public');
const userRoutes = require('./product/routes/user/user');
const adminRoutes = require('./product/routes/admin/admin');

// creates an express app
const app = express();

// set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/product/views'));

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(publicRoutes);
app.use(userRoutes);
app.use('/admin', adminRoutes);

// listening
app.listen(appConfig.PORT);