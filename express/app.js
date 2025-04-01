//app.js
const express = require('express');
const birds_router = require('./birds_router');
const birds_app = express();

//birds home page
birds_app.use('/birds', birds_router);
birds_app.listen(8080);