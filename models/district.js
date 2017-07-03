var mongoose = require('mongoose');
var DistrictSchema = new mongoose.Schema({
  code: {
    type: Number, require: true
  },
  regency: {
    type: Number, require: true
  },
  name: {
    type: String, require: true
  }
})

module.exports = mongoose.model('districts', DistrictSchema);
