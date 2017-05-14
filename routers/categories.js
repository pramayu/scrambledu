var express = require('express');
var _ = require('lodash');

var categories = require('../models/category');
var router = express.Router();

router.get('/', (req, res, next) => {
  categories.find({})
  .sort('name': desc)
  .exec((err, categories) => {
    if(!err) {
      res.json({categories})
    }
  })
})


module.exports = router;
