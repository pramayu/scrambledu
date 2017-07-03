var express = require('express');
var _ = require('lodash');
var user = require('../models/user');
var prefrence = require('../models/prefrence');
var province = require('../models/province');
var regency = require('../models/regency');
var district = require('../models/district');
var address = require('../models/address_receiver');
var router = express.Router();

router.get('/5872c4ec0e00167ab362/:id/8714c9ac5782c5eb63b5', (req, res, next) => {
  var user_id = req.params.id;
  user.findOne({'_id': user_id}, '_id username email avatar gender firstname lastname phone birthday', (err, user) => {
    if(!_.isEmpty(user)) {
      res.status(200).json({ user })
    } else {
      res.json({ error: 'User not found'})
    }
  })
})

router.put('/d3ri93fdh923fdh3928ehd/:id', (req, res, next) => {
  var user_id = req.params.id;
  user.findOne({'_id': user_id}, '_id username email avatar gender firstname lastname phone birthday', (err, user) => {
    if(!_.isEmpty(user)) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.avatar = req.body.avatar || user.avatar;
      user.gender = req.body.gender || user.gender;
      user.firstname = req.body.firstname || user.firstname;
      user.lastname = req.body.lastname || user.lastname;
      user.phone = req.body.phone || user.phone;
      user.birthday = req.body.birthday || user.birthday;
      user.save((err, user) => {
        if(!err) {
          res.json({ errors: { form: 'Your data successfully updated' } })
        }
      })
    }
  })
})

router.put('/38h29fdh23f938ery39y/:id/fjweijnvksdjfoehf', (req, res, next) => {
  var user_id = req.params.id;
  prefrence.findOne({'user': user_id}, (err, pref) => {
    if(Object.keys(req.body)[0] === 'languages') {
      pref.languages = req.body.languages;
    }
    if(Object.keys(req.body)[0] === 'newsletter') {
      pref.newsletter = req.body.newsletter;
    }
    if(Object.keys(req.body)[0] === 'reviews') {
      pref.reviews = req.body.reviews;
    }
    if(Object.keys(req.body)[0] === 'feature') {
      pref.feature = req.body.feature;
    }
    if(Object.keys(req.body)[0] === 'security') {
      pref.security = req.body.security;
    }
    pref.save((err, pref) => {
      if(!err) {
        res.json({ errors: { form: 'Your data successfully updated' } })
      }
    })
  })
})

router.get('/dlqh4o23rh0389rh2/:id/kfj30r93f30d308ihd', (req, res, next) => {
  var user_id = req.params.id;
  prefrence.findOne({ 'user': user_id }, (err, pref) => {
    if(!_.isEmpty(pref)) {
      res.status(200).json({ preferences: pref })
    } else {
      res.json({ error: 'User not found'})
    }
  })
})

router.get('/f3r9fh938hf98dhw8d/s092d0jdwqijwdih/doi3e938djowd', (req, res, next) => {
  province.find({}, (err, province) => {
    res.json({ province })
  })
})

router.get('/dj938hd938hd938fded/d398y93fhiuwefh398y/:id/d83hq0ifdw', (req, res, next) => {
  var prov_id = parseInt(req.params.id);
  regency.find({'prov': prov_id}, (err, regency) => {
    res.json({ regency })
  })
})

router.get('/d903pdijwedoj3rh0hf0/do30wfhe0ifh3yr48/:id/nfpa3847gfdjf93', (req, res, next) => {
  var regency = parseInt(req.params.id);
  district.find({'regency': regency}, (err, district) => {
    res.json({ district })
  })
})

router.post('/oi39ry94gf3o98flk/dj8459hf3f9hf948y983', (req, res, next) => {
  var addr = new address();
  addr.identifier = req.body.identifier;
  addr.receiver = req.body.receiver;
  addr.phone = req.body.phone;
  addr.province = parseInt(req.body.province);
  addr.regency = parseInt(req.body.regency);
  addr.district = parseInt(req.body.district);
  addr.address = req.body.address;
  addr.zipcode = req.body.zipcode;
  addr.save((err, address) => {
    res.json({ address })
  })
})

module.exports = router;
