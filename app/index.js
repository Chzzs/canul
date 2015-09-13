var express = require('express');
var mongoose = require('mongoose');

var app = express();
var arguments = process.argv.splice(2);

var name = "test";
if (arguments.length == 0) {
  console.log("Database name not provided, will use 'test'.");
} else {
  name = arguments[0];
}

var database = "mongodb://localhost/" + name;
    mongoose.connect(database);

var handle = mongoose.connection;
    handle.on('error', console.error.bind(console, 'Connection error: '));
    handle.once( 'open', function() {
      console.log('Successfully connected to ' +  name + ' database.' );
    });
var route = require('./route');

app.use(express.static('public'));
app.use('/', route);

var server = app.listen('3000', function() {
  console.log('Server will listen to port 3000.');
});
