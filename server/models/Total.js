const mongoose = require('mongoose');

// Create Schema
const totalSchema = mongoose.Schema(
  {
    total: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true },
);

const Total = mongoose.model('total', totalSchema);

module.exports = Total;
