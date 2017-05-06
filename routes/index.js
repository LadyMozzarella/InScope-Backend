const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// We don't have a favicon
router.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
});

module.exports = router;
