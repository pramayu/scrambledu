var express = require('express');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var _ = require('lodash');

var users = require('../models/user');
var config = require('../config/main');
import { signinValidateUser } from '../validate/signin';

var router = express.Router();

router.post('/', (req, res, next) => {
  let { errors, isValid } = signinValidateUser(req.body);
  let { identifier, password } = req.body;

  if(!isValid) {
    res.status(400).json({ errors });
  } else if (isValid) {
    users.findOne({ $or: [{'username': identifier}, {'email': identifier}] }, '_id password username email avatar', (err, user) => {
      if(!_.isEmpty(user)) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(!err && isMatch) {
            var token = jwt.sign({
              id: user._id,
              username: user.username,
              email: user.email,
              avatar: user.avatar
            }, config.secret_key);
            res.status(200).json({ token })
          } else {
            res.status(401).json({ errors: { form: 'Sorry, your username or password was incorrect. Please double-check your password.' } })
          }
        })
      } else {
        res.status(401).json({ errors: { form: 'Sorry, your username or password was incorrect. Please double-check your password.' } })
      }
    })
  }
})

module.exports = router;
