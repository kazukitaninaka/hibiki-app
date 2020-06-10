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
    soloOne: {
      type: Number,
      default: 0,
    },
    soloTwo: {
      type: Number,
      default: 0,
    },
    shout: {
      type: Number,
      default: 0,
    },
    front: {
      type: Number,
      default: 0,
    },
    start: {
      type: Number,
      default: 0,
    },
  },
  opening: {
    kara: {
      type: Number,
      default: 0,
    },
    front: {
      type: Number,
      default: 0,
    },
    start: {
      type: Number,
      default: 0,
    },
  },
  solo: {
    kankan: {
      type: Number,
      default: 0,
    },
    front: {
      type: Number,
      default: 0,
    },
  },
  seigaiha: {
    front: {
      type: Number,
      default: 0,
    },
  },
  zuiun: {
    front: {
      type: Number,
      default: 0,
    },
  },
  hibiki: {
    front: {
      type: Number,
      default: 0,
    },
  },
  big: {
    type: Boolean,
    default: false,
  },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
