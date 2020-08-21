const express = require('express');

const router = express.Router();

// Beers model
const Beers = require('../models/Beers');

// @route GET api/beers
// @desc Get all beers
// @access Public
router.get('/', (req, res, next) => {
  try {
    const { ageLimit } = req.query;
    Beers.find(
      ageLimit && {
        createdAt: {
          $lt: new Date(),
          $gte: new Date(new Date() - ageLimit * 60 * 60 * 24 * 1000),
        },
      },
    )
      .sort({ createdAt: -1 })
      .then((beers) => res.json(beers));
  } catch (err) {
    next(err);
  }
});

// @route POST api/beers
// @desc Create an beers
// @access Public
router.post('/', (req, res, next) => {
  try {
    const newBeers = new Beers({
      amount: req.body.amount,
      comment: req.body.comment || null,
    });
    newBeers.save().then((item) => res.status(201).json(item));
  } catch (err) {
    next(err);
  }
});

// @route DELETE api/beers/:id
// @desc Delete an beers
// @access Public
router.delete('/:id', (req, res, next) => {
  try {
    Beers.findByIdAndDelete(req.params.id, (err, beers) => {
      if (err) {
        res.status(404);
        return next(Error('Resource does not exist'));
      }
      if (!beers) {
        res.status(410);
        return next(Error('Resource already deleted'));
      }
      return res.sendStatus(204);
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
