var Express = require('express');

var App = Express();

App.get('/', function(req, res) {
  res.send('hi there');
})

App.listen(3000);
