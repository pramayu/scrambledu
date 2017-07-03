var mongoose = require('mongoose');
var DistrictSchema = new mongoose.Schema({
  _id: {
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
