const express = require('express');

const router = express.Router();

// Event model
const Event = require('../models/Event');

// @route GET api/events
// @desc Get all events
// @access Public
router.get('/', (req, res, next) => {
  try {
    const { ageLimit } = req.query;
    Event.find(
      ageLimit && {
        createdAt: {
          $lt: new Date(),
          $gte: new Date(new Date() - ageLimit * 60 * 60 * 24 * 1000),
        },
      },
    )
      .sort({ createdAt: -1 })
      .then((events) => res.json(events));
  } catch (err) {
    next(err);
  }
});

// @route POST api/events
// @desc Create an event
// @access Public
router.post('/', (req, res, next) => {
  try {
    const newEvent = new Event({
      amount: req.body.amount,
      comment: req.body.comment || null,
    });
    newEvent.save().then((item) => res.status(201).json(item));
  } catch (err) {
    next(err);
  }
});

// @route DELETE api/events/:id
// @desc Delete an event
// @access Public
router.delete('/:id', (req, res, next) => {
  try {
    Event.findByIdAndDelete(req.params.id, (err, event) => {
      if (err) {
        res.status(404);
        return next(Error('Resource does not exist'));
      }
      if (!event) {
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
