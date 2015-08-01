var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
var users = require('./routes/users');
var passport = require('passport');
var session = require('express-session');
var cors = require('cors')

var app = express();

mongoose.connect(configDB.url);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET_TOKEN,
  saveUninitialized: true,
  resave: false
  // cookie: { secure: true, maxAge: 2628000000 * 100 }
}));

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use( (req, user, next) => {
  console.log("PARAMS", req.body, req.query, req.params);
  next();
});

var routes = require('./routes/index')(passport, mongoose);
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use( (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use( (err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
