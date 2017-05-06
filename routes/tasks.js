const express = require('express');
const models = require('../models');

const router = express.Router();

/* GET tasks */
router.get('/', (req, res) => {
  models.Task.findAll().then((tasks) => {
    res.send(tasks);
  });
});

module.exports = router;
