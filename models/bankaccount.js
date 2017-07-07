var mongoose = require('mongoose');

var BnkSchema = new mongoose.Schema({
  identifier: {
    type: String
  },
  rekening: {
    type: String
  },
  bankname: {
    type: mongoose.Schema.Types.ObjectId, ref: 'banks'
  },
  branch: {
    type: String
  },
  otp: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users'
  }
})

module.exports = mongoose.model('bank_accounts', BnkSchema);
