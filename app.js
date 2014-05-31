var express = require('express');
var app = express();

app.use(require('./controllers/root'));
app.use(require('./controllers/gist'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("live on port", PORT);
});
