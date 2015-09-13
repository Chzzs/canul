var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var articleSchema = mongoose.Schema({
  title: String,
  author: String,
  abstract: String,
  content: [{
    header: String,
    paragraph: String
  }],
  catchphrase: String,
  img: String,
  date: String,
  topics: [String]
});

var editoSchema = mongoose.Schema({
  date: String,
  content: String
});

var Article = mongoose.model('Article', articleSchema);
var Edito = mongoose.model('Edito', editoSchema);

router.use(parser.json());
router.use(parser.urlencoded({extended: true}));

router.get('/articles', function(request, response) {
  Article.find(function(error, articles) {
    if (error) return console.log(error);
    response.send(articles);
  });
});

router.get('/articles/:id', function(request, response) {
  var query = Article.where({ "_id" : request.params.id});
  query.findOne(function(error, article) {
    if(error) return console.log(error);
    response.status(200).send(article);
  });
});

router.get('/edito', function(request, response){
  Edito.findOne( function(error, edito) {
    if (error) return console.log(error);
    response.send(edito);
  });
});

module.exports = router;
