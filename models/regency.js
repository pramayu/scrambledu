var mongoose = require('mongoose');
var RegencySchema = new mongoose.Schema({
  _id: {
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
