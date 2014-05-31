var router = require('express').Router();
var request = require('request');

router.get('/:user/:id', function(req, res) {
  var url = 'https://gist.githubusercontent.com/dickeyxxx/2e41c04ff60259c0ebb8/raw/7bafe97e02e724c83d479dd61115c8b6fb83272c/node.sh';
  res.type('text');
  request(url, function(error, response, body) {
    res.send(200, body);
  });
});

module.exports = router;
