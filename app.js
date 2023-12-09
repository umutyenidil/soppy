// package files
const express = require('express');

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
app.set('views', './product/views');

// routes
app.use(publicRoutes);
app.use(userRoutes);
app.use('/admin', adminRoutes);

// listening
app.listen(appConfig.PORT);