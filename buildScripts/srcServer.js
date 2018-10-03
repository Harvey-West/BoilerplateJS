var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.set('port', (process.env.port || port));

//Disbales header leaking information about the server to the requestor.
app.disable('x-powered-by');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(process.env.PORT || app.get('port'), function (err) {
      if (err) {
        console.log(err);
      } else {
        open('htt')
      }
    })
