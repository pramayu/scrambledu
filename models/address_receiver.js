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
    type: mongoose.Schema.Types.ObjectId, ref: 'provinces'
  },
  regency: {
    type: mongoose.Schema.Types.ObjectId, ref: 'regencies'
  },
  subdistrict: {
    type: mongoose.Schema.Types.ObjectId, ref: 'districts'
  }
})

module.exports = mongoose.model('address_receiver', AddReceiveSchema);
