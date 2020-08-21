const mongoose = require('mongoose');

// Create Schema
const beersSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      default: 1,
      min: 1,
      max: 99,
    },
    comment: {
      type: String,
      max: 35,
    },
  },
  { timestamps: true },
);

const Beers = mongoose.model('beers', beersSchema);

module.exports = Beers;
