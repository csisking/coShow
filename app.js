'use strict';
//生产环境请注释掉
process.env.NODE_ENV = 'development';
//生产环境请注释掉

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const compression = require('compression');
const env = process.env.NODE_ENV || 'development';
const config = require('./config');
// const redis = require('./lib/redis');

const app = express();
global.flag = 'online';
// console.log(env);

//compression
// app.use(compression());

// view engine setup
// app.set('views', path.join(__dirname, 'public/webapp/usercenter/'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('trust proxy', 'loopback');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));


// redis


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// serve
app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(path.join(__dirname, 'res/')));
// app.use(function (req, res, next) {
//     redis.set('foo', 'bar');
//     // Or using a promise if the last argument isn't a function
//     redis.get('foo').then(function (result) {
//         console.log(result);
//         next();
//     });
// });
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
