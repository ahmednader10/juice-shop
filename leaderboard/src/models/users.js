'use strict';
var mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});


let User = mongoose.model('User', usersSchema);
module.exports = User;
