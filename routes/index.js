const express = require('express');

const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  res.send('Welcome to the InScope Backend Application');
});

// We don't have a favicon
router.get('/favicon.ico', (req, res) => {
  res.status(204).send('No Content');
});

module.exports = router;
