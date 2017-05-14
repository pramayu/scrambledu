var mongoose = require('mongoose');

var SubcategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  categories: {
    type: mongoose.Schema.Types.ObjectId, ref: 'categories'
  },
  section: {
    name: {
      type: String
    },
    subsection: [{
      name: {
        type: String
      }
    }]
  }
});

module.exports = mongoose.model('subcategories', SubcategorySchema);
