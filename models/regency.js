var mongoose = require('mongoose');
var RegencySchema = new mongoose.Schema({
  code: {
    type: Number, require: true
  },
  prov: {
    type: Number, require: true
  },
  name: {
    type: String, require: true
  }
})

module.exports = mongoose.model('regencies', RegencySchema);
