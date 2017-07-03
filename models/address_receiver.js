var mongoose = require('mongoose');
var AddReceiveSchema = new mongoose.Schema({
  identifier: {
    type: String, require: true, lowercase: true
  },
  receiver: {
    type: String, require: true, lowercase: true
  },
  phone: {
    type: String, require: true, lowercase: true
  },
  address: {
    type: String, require: true, lowercase: true
  },
  province: {
    type: Number, ref: 'provinces'
  },
  regency: {
    type: Number, ref: 'regencies'
  },
  district: {
    type: Number, ref: 'districts'
  },
  zipcode: {
    type: String, require: true
  }
})

module.exports = mongoose.model('address_receiver', AddReceiveSchema);
