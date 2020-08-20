const mongoose = require('mongoose');

// Create Schema
const eventSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      default: 1,
      min: 1,
      max: 99,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true },
);

const Event = mongoose.model('event', eventSchema);

module.exports = Event;
