'use strict';

var FacebookStrategy = require('passport-facebook').Strategy;
var randomstring = require('randomstring');

var users = require('../models/user');
var config = require('./main');

module.exports = function(passport){
  passport.use(new FacebookStrategy({
    clientID        : config.facebookAuth.clientID,
    clientSecret    : config.facebookAuth.clientSecret,
    callbackURL     : config.facebookAuth.callbackURL,
    profileFields: ['id', 'picture', 'email', 'gender', 'name']
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      users.findOne({'facebook_id': profile.id}, function(err, user) {
        if(err) {
          return done(err);
        }
        if(user) {
          return done(null, user);
        } else {
          var randomstr = randomstring.generate(5);
          var user = new users({
            'facebook_id': profile.id,
            'facebook_token': token,
            'firstname': profile.name.givenName,
            'lastname': profile.name.familyName,
            'email': profile.emails[0].value,
            'username': profile.name.givenName + '_' + randomstr,
            'avatar': profile.picture,
            'gender': profile.gender,
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
