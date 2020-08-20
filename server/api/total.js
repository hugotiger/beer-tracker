const express = require('express');

const router = express.Router();

// Total model
const Total = require('../models/Total');

router.get('/', async (req, res, next) => {
  try {
    const total = await Total.findOne().sort();
    console.log(total);
    res.json(total || { total: 0 });
  } catch (err) {
    next(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    Total.updateOne({}, { $inc: { total: req.body.amount || 1 } }, { upsert: true }, (err, doc) => {
      if (err) return res.send(500, { error: err });
      return res.send('Successful');
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
