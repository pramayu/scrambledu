'use strict'

import mongoose from 'mongoose';
var SettingSchema = new mongoose.Schema({
  languages: {
    type: String, default: 'english'
  },
  newsletter: {
    type: Boolean, default: true
  },
  reviews: {
    type: Boolean, default: true
  },
  feature: {
    type: Boolean, default: false
  },
  security: {
    type: Boolean, default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users'
  }
})

module.exports = mongoose.model('prefrence', SettingSchema)
