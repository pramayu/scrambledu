'use strict';

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var randomstring = require('randomstring');

var users = require('../models/user');
var config = require('./main');

module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID        : config.googleAuth.clientID,
    clientSecret    : config.googleAuth.clientSecret,
    callbackURL     : config.googleAuth.callbackURL,
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      users.findOne({'google_id': profile.id}, function(err, user) {
        if(err) {
          return done(err)
        }
        if(user) {
          return done(null, user);
        } else {
          var randomstr = randomstring.generate(5);
          var user = new users({
            'google_id': profile.id,
            'google_token': token,
            'firstname': profile.name.givenName,
            'lastname': profile.name.familyName,
            'email': profile.emails[0].value,
            'username': profile.name.givenName + '_' + randomstr,
            'activation': true
          });
          user.save(function(err, user) {
            if(err) {
              console.log(err)
            }
            return done(null, user);
          })
        }
      })
    })
  }))
}
