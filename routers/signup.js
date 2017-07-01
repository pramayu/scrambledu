var express = require('express');
var validator = require('validator');
var _ = require('lodash');
var bcrypt = require('bcryptjs');
var async = require('async');
var nodemailer = require('nodemailer');
var randomstring = require('randomstring');
var passport = require('passport');
var jwt = require('jsonwebtoken');

var router = express.Router();
import { addUserValidate } from '../validate/signup';

var users = require('../models/user');
var prefrence = require('../models/prefrence');
var config = require('../config/main');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.nodemailer.email,
    pass: config.nodemailer.password
  }
});


router.get('/check/:identifier/d38d7d1738e2a0cf3cfa5d4ad805abe73ac77bb', (req, res, next) => {
  var identifier = req.params.identifier;
  users.find({$or: [{'username': identifier}, {'email': identifier}]}, '_id username email', (err, user) => {
    if(!_.isEmpty(user)) {
      res.json({ user });
    } else {
      res.json({ info: 'no users found'});
    }
  });
});

router.post('/81abc52ad7185eac7c92', (req, res, next) => {
  let { errors, isValid } = addUserValidate(req.body);
  var token=randomstring.generate(64);
  var link="http://"+req.get('host')+"/verify/user/"+token;
  if(!isValid) {
    res.status(500).json({ errors });
  } else if (isValid) {
    async.waterfall([
      function hashingPassword(done) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.confirm_password, salt, (err, hash) => {
            done(null, hash);
          })
        })
      },
      function addNewUser(hash, done) {
        var user = new users({
          'username': req.body.username.replace(/\s/g,''),
          'email': req.body.email,
          'password': hash,
          'gender': req.body.gender,
          'firstname': req.body.firstname,
          'lastname': req.body.lastname,
          'activation_token': token
        });
        user.save((err, user) => {
          if(err) {
            console.log(err);
          }

          var emailOpts = {
            from: '"scrambledu" <clientservices@scrambledu.com>',
            to: user.email,
            subject: 'Activate Your scrambledu Account',
            html: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify♡♡♡</a>"
          }
          transporter.sendMail(emailOpts, (err) => {
            if(err) {
              console.log(err)
            }
          });
          done(null, user);
        })
      },
      function prefUser(user, done) {
        var pref = new prefrence({
          'user': user._id
        });
        pref.save((err, pref) => {
          done(null, user)
        })
      }
    ], (err, user) => {
      res.status(200).json({user})
    })
  }
})

router.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));

router.get('/auth/facebook/callback',passport.authenticate('facebook', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));

router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));


router.get('/auth/google/callback',passport.authenticate('google', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));


router.get('/oauth2/facebook/jwttoken', (req, res, next) => {
  if(req.user) {
    var token = jwt.sign({
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      avatar: req.user.avatar
    }, config.secret_key);
    res.json({ token })
  }
})

module.exports = router;
