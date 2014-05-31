var router = require('express').Router();

router.get('/', function(req, res) {
  setTimeout(function() {
    res.send(200, "curl scripts!");
  }, 200);
});

module.exports = router;
