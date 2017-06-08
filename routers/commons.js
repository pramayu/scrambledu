var express = require('express');
var _ = require('lodash');


var commons = require('../models/common');
var router = express.Router();

router.get('/', (req, res, next) => {
  commons.find({})
  .exec((err, commons) => {
    if(err) {
      console.log("you have fuck'in errors")
    }
    res.json({ commons })
  })
})

module.exports = router;
