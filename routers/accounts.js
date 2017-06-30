var express = require('express');
var _ = require('lodash');
var user = require('../models/user');
var router = express.Router();

router.get('/5872c4ec0e00167ab362/:id/8714c9ac5782c5eb63b5', (req, res, next) => {
  var user_id = req.params.id;
  user.findOne({'_id': user_id}, '_id username email avatar gender firstname lastname', (err, user) => {
    if(!_.isEmpty(user)) {
      res.status(200).json({ user })
    } else {
      res.json({ error: 'User not found'})
    }
  })
})

module.exports = router;
