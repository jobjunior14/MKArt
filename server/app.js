const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const AppError =  require(`${__dirname}/./utils/appError`);
const globalErrorHandler = require(`${__dirname}/./controller/errorHandling`);
const app = express();

//First Middleware
app.use(cors());
app.use(express.json());

app.use (morgan('dev'));

app.use('/uploads/profil', express.static('uploads/profil'));
app.use('/uploads/gallery', express.static('uploads/gallery'));

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods");
    next();
});

const adminRoutes = require('./routes/adminRoutes.js');
const userRoutes = require ('./routes/userRoutes.js');


//3) Routess
app.use ('/api/v1/admin', adminRoutes);
app.use ('/api/v1/user', userRoutes);

app.all ('*', (req, res, next) =>
{
    next( new AppError (`Cannot find ${req.originalUrl} this server`, 404));
});

app.use( globalErrorHandler );


module.exports = app;