const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  date: Date,
  opening: {
    front: Array,
    kara: Array,
    start: Array,
  },
  matsuri: {
    front: Array,
    start: Array,
    shout: Array,
    soloOne: Array,
    soloTwo: Array,
  },
  solo: {
    front: Array,
    kankan: Array,
  },
  seigaiha: {
    front: Array,
  },
  zuiun: {
    front: Array,
  },
  hibiki: {
    front: Array,
  },
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
