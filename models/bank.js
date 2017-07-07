var mongoose = require('mongoose');

var BankSchema = new mongoose.Schema({
  name: {
    type: String
  },
  kode: {
    type: String
  }
});

module.exports = mongoose.model('banks', BankSchema);
