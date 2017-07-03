var mongoose = require('mongoose');
var ProvinceSchema = new mongoose.Schema({
  _id: {
    type: Number, require: true
  },
  name: {
    type: String, require: true
  }
})

module.exports = mongoose.model('provinces', ProvinceSchema);
