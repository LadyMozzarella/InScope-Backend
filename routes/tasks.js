var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET tasks */
router.get('/', function(req, res, next) {
  models.Task.findAll().then(function(tasks) {
    res.send(tasks);
  });
});

module.exports = router;
