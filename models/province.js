var mongoose = require('mongoose');
var ProvinceSchema = new mongoose.Schema({
  code: {
    type: Number, require: true
  },
  name: {
    type: String, require: true
  }
})

module.exports = mongoose.model('provinces', ProvinceSchema);
