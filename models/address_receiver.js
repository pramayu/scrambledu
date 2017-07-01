var mongoose = require('mongoose');
var AddReceiveSchema = new mongoose.Schema({
  identifier: {
    type: String, require: true
  },
  receiver: {
    type: String, require: true
  },
  phone: {
    type: String, require: true
  },
  address: {
    type: String, require: true
  },
  province: {
    type: String, require: true
  },
  regency: {
    type: String, require: true
  },
  subdistrict: {
    type: String
  }
})

module.exports = mongoose.model('address_receiver', AddReceiveSchema);
