var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('root.html');
});

module.exports = router;
