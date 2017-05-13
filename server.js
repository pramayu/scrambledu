'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHot = require('webpack-hot-middleware');
var mongoose = require('mongoose');
var helmet = require('helmet');
var passport = require('passport');


var webpackConfig = require('./webpack.config');
var config = require('./config/main');
var users = require('./models/user');
var signup = require('./routers/signup');
var signin = require('./routers/signin');
var userverify = require('./routers/verify_user');

var app = express();
var compile = webpack(webpackConfig);

app.use(webpackMiddleware(compile));
app.use(webpackHot(compile));

mongoose.connect(config.mongoose);
mongoose.Promise = global.Promise;

app.use(helmet());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: config.secret_key,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
require('./config/facebookAuth')(passport);
require('./config/googleAuth')(passport);
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  users.findById(id, function(err, user) {
    done(err, user);
  });
});
app.use(function(req, res, next){
  res.locals.current_user = req.user;
  next();
});

app.use('/verify', userverify);
app.use('/signin', signin);
app.use('/signup', signup);
app.get('/*', function (req, res) {
  res.render('index', { title: '@scrambleegs' });
});

app.use(logger('dev'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Server running on port 127.0.0.1:3000');
});
