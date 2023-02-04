var express = require('express');
var router = express.Router();

/* GET webhooks options. */
router.get('/', function(req, res, next) {
  res.send('Respond with a list of hook options');
});

module.exports = router;
