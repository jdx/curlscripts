var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  setTimeout(function() {
    res.send(200, "curl scripts!");
  }, 200);
});

app.listen(PORT, function(c) {
  console.log("live on port", PORT);
});
