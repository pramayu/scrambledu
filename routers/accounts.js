var express = require('express');
var _ = require('lodash');
var async = require('async');
var randomstring = require('randomstring');
var twilio = require('twilio');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var config = require('../config/main');
var user = require('../models/user');
var prefrence = require('../models/prefrence');
var province = require('../models/province');
var regency = require('../models/regency');
var district = require('../models/district');
var address = require('../models/address_receiver');
var bank = require('../models/bank');
var bankAccount = require('../models/bankaccount');
var router = express.Router();

var client = new twilio(config.twilio.SID, config.twilio.AUTH);

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

router.post('/oi39ry94gf3o98flk/:id/dj8459hf3f9hf948y983', (req, res, next) => {
  async.waterfall([
    function addNewAddr(done) {
      var addr = new address();
      addr.identifier = req.body.identifier;
      addr.receiver = req.body.receiver;
      addr.phone = req.body.phone_addr;
      addr.province = parseInt(req.body.province);
      addr.regency = parseInt(req.body.regency);
      addr.district = parseInt(req.body.district);
      addr.address = req.body.address;
      addr.zipcode = req.body.zipcode;
      addr.user = req.params.id;
      addr.save((err, address) => {
        done(null, addr)
      })
    },
    function getNewAddr(addr, done) {
      address.findOne({'_id': addr._id})
        .populate('province regency district')
        .exec((err, addr) => {
          done(null, addr)
        })
    }
  ], (err, addr) => {
    res.json({ address: addr })
  })
})

router.get('/doi3e3089e3dhdeih/:id/diw8903938249rhhkj', (req, res, next) => {
  var user_id = req.params.id;
  address.find({'user': user_id})
    .populate('province regency district')
    .exec((err, addr) => {
      res.json({ address: addr})
    })
})

router.delete('/dwijd09089ew04fh08/:id/ewo309jfweif39rf', (req, res, next) => {
  var addr_id = req.params.id;
  address.findByIdAndRemove(addr_id, (err, addr) => {
    res.json({success: 'delete successfully'})
  })
})

router.put('/doi3ue938hd9dhweoih/:id/:user_id', (req, res, next) => {
  var id = req.params.id;
  var user_id = req.params.user_id;
  async.waterfall([
    function getUserById(done) {
      address.findOne({'_id': id}, (err, addr) => {
        if(addr.user.toString() === user_id.toString()) {
          addr.identifier = req.body.identifier || addr.identifier;
          addr.receiver = req.body.receiver || addr.receiver;
          addr.phone = req.body.phone_addr || addr.phone;
          addr.province = req.body.province || addr.province;
          addr.regency = req.body.regency || addr.regency;
          addr.district = req.body.district || addr.district;
          addr.address = req.body.address || addr.address;
          addr.zipcode = req.body.zipcode || addr.zipcode;
          addr.save((err, addrs) => {
            done(null, addrs)
          })
        }
      })
    },
    function getAddress(addrs, done) {
      address.findOne({'_id': addrs._id})
        .populate('province regency district')
        .exec((err, addrs) => {
          done(null, addrs)
        })
    }
  ], (err, addrs) => {
    res.json({ address: addrs })
  })
})

router.get('/lkasend39rlsk0390fj/dou3h82374deuifg', (req, res, next) => {
  bank.find({}, (err, _bank) => {
    res.json({bank: _bank})
  })
})

router.post('/p39r30fhj0rhf3r398r3y4tt/:user_id', (req, res, next) => {
  var user_id = req.params.user_id;
  var bankAc = new bankAccount({
    user: req.body.user
  })
  bankAc.save((err, bank) => {
    res.json({ bank })
  })
})


router.delete('/djowiondsfhofhefhdfh/:id/:user_id', (req, res, next) => {
  var _id = req.params.id;
  bankAccount.findByIdAndRemove(_id, (err, bank) => {
    res.json({success: 'delete successfully'})
  })
})

router.get('/diwejr834refeiufhwuihf/dk038ejdksjkflsfkjdf/:user_id/:id', (req, res, next) => {
  var user_id = req.params.user_id;
  var id = req.params.id;
  var token=randomstring.generate({length: 4, charset: 'numeric'});
  async.waterfall([
    function findUser(done) {
      user.findOne({'_id': user_id}, '_id username phone', (err, user) => {
        if(!_.isEmpty(user)) {
          done(null, user)
          console.log(user)
        }
      })
    },
    function findBank(user, done) {
      bankAccount.findOne({'_id': id}, (err, bank) => {
        console.log(bank + ' ' + user.phone)
        if(!_.isEmpty(bank)) {
          client.messages.create({
            body: `Your OTP code is ${token}`,
            to: user.phone,
            from: '+14435267447'
          }).then((message) => {
            bank.otp = token;
            bank.save((err, bank) => {
              done(null, bank)
            })
          })
        }
      })
    }
  ], (err, bank) => {
    res.json({bank})
  })
})


router.put('/dk309j03d9j0dj0dh32/:user_id/398erj9r8h39r8h98r/:id/', (req, res, next) => {
  var user_id = req.params.user_id;
  var _id = req.params.id;
  var encrypt_rek = jwt.sign({
    rekening: req.body.rekening
  }, config.secret_key)
  async.waterfall([
    function getUser(done) {
      user.findOne({'_id': user_id}, '_id username password', (err, user) => {
        if(!_.isEmpty(user)) {
          done(null, user)
        }
      })
    },
    function updateBankData(user, done) {
      bcrypt.compare(req.body.pass, user.password, (err, isMatch) => {
        if(!err && isMatch) {
          bankAccount.findOne({'_id': _id}, (err, bank) => {
            if(!_.isEmpty(bank)) {
              if(user_id.toString() === bank.user.toString()) {
                if(req.body.otp.toString() === bank.otp.toString()) {
                  bank.identifier = req.body.identifier || bank.identifier;
                  bank.rekening = encrypt_rek || bank.rekening;
                  bank.bankname = req.body.bankname || bank.bankname;
                  bank.branch = req.body.branch || bank.branch;
                  bank.save((err, bank) => {
                    done(null, bank)
                  })
                } else {
                  res.status(500).json({ errors: { form: 'OTP Code is failed'}})
                }
              }
              else {
                res.status(500).json({ errors: { form: 'Bank Account Not Found'}})
              }
            } else {
              res.status(500).json({ errors: { form: 'Bank Account Not Found'}})
            }
          })
        } else {
          res.status(500).json({ errors: { form: 'password is invalid'} })
        }
      })
    },
    function _findBank(bank, done) {
      bankAccount.findOne({'_id': bank._id})
        .populate('bankname')
        .exec((err, bank) => {
          done(null, bank)
        })
    }
  ], (err, bank) => {
    res.json({ bank })
  })
})

router.get('/rdj0a3jeoidjw0djruereiw/:user_id', (req, res, next) => {
  var user_id = req.params.user_id;
  bankAccount.find({'user': user_id})
    .populate('bankname')
    .exec((err, bank) => {
      res.json({ bank })
    })
})

router.delete('/dwidoqiwdaowdhowidh/:id', (req, res, next) => {
  var id = req.params.id
  bankAccount.findByIdAndRemove(id, (err, bank) => {
    res.json({ success: 'successfully' })
  })
})

module.exports = router;
