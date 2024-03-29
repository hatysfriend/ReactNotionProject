const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: { 
    type: String,
    default: "",
  },
  content: {
    type: Array,
    default: [],
  },
  image:{
    type: String,
    default: null,
  },
  coverImage:{
    type: String,
    default: null,
  },
  childPages:{
    type: Array,
    default:[]
  }
});

module.exports = mongoose.model('notion', noteSchema);