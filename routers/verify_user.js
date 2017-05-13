var express = require('express');
var _ = require('lodash');
var jwt = require('jsonwebtoken');

var users = require('../models/user');
var config = require('../config/main');

var router = express.Router();


router.post('/user/:usertoken', (req, res, next) => {
  var usertoken = req.params.usertoken;
  users.findOne({'activation_token': usertoken}, '_id activation username email avatar', (err, user) => {
    if(!_.isEmpty(user)) {
      if(user.activation === false) {
        user.activation = true;
        user.save((err, user) => {
          var token = jwt.sign({
            _id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar
          }, config.secret_key)
          res.json({ token })
        })
      } else if (user.activation === true) {
        res.status(401).json({ errors: { form: 'This account is already activated, please log in.' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Token is expired. Please re-send actiovation token.' } })
    }
  })
})


module.exports = router;
