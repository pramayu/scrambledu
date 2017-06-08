var express = require('express');
var _ = require('lodash');

var categories = require('../models/category');
var subcategories = require('../models/subcategory');
var router = express.Router();

router.get('/', (req, res, next) => {
  categories.aggregate([
    {
      $lookup: {
        from: "subcategories",
        localField: "_id",
        foreignField: "categories",
        as: "subcategories"
      }
    },
    {
      $sort: {
        name: 1
      }
    }
  ], (err, categories) => {
    if(!err) {
      res.json({categories})
    }
  })
})


module.exports = router;
