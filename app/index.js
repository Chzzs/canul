var express = require('express');
var app = express();
var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/prod');
var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error: '));
    db.once( 'open', function() {
      console.log('Connected to mongodb://localhost/prod');
    });
var route = require('./route');

app.use(express.static('public'));
app.use('/', route);

var server = app.listen('3000', function() {
  console.log('Server listening port 3000');
});
