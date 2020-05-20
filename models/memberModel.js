const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  generation: {
    type: Number,
    required: true,
  },
  matsuri: {
    soloOne: Number,
    soloTwo: Number,
    shout: Number,
    front: Number,
    start: Number,
  },
  opening: {
    kara: Number,
    front: Number,
    start: Number,
  },
  solo: {
    kankan: Number,
    front: Number,
  },
  seigaiha: {
    front: Number,
  },
  zuiun: {
    front: Number,
  },
  hibiki: {
    front: Number,
  },
  big: Boolean,
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
