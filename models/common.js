var mongoose = require('mongoose');

var CommonSchema = new mongoose.Schema({
  header: [{
    image: {
      type: String
    },
    public_id: {
      type: String
    },
    text_align: {
      type: String
    },
    color: {
      type: String
    }
  }]
})

module.exports = mongoose.model('commons', CommonSchema);
