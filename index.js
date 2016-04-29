var express = require('express'),
    path = require('path');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var sendData = function (res, path) {
  var options = {
    root: __dirname + '/data/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile(path, options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent:', path);
    }
  });
}

app.get('/news', function (req, res) {
  sendData(res, 'news/news.xml');
});

app.get('/events/:year', function (req, res) {
  sendData(res, 'events/' + req.params.year + '.json');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});