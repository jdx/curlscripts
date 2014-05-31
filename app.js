var express = require('express');
var app = express();

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.use(require('./controllers/root'));
app.use(require('./controllers/gist'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("live on port", PORT);
});
