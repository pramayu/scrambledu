'use strict'

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String, unique: true, require: true, lowercase: true
  },
  email: {
    type: String, unique: true, require: true, lowercase: true
  },
  password: {
    type: String, minlength: 7
  },
  gender: {
    type: String
  },
  avatar: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  activation_token: {
    type: String
  },
  activation: {
    type: Boolean, default: false
  },
  password_token: {
    type: String
  },
  password_reset: {
    type: Boolean, default: false
  },
  facebook_id: {
    type: String
  },
  facebook_token: {
    type: String
  },
  google_id: {
    type: String
  },
  google_token: {
    type: String
  },
  avatar: {
    type: String
  }
});


module.exports = mongoose.model('users', UserSchema);
