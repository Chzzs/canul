var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var schema = mongoose.Schema({
  title: String,
  author: String,
  abstract: String,
  content: String,
  img: String,
  date: String,
  topics: [String]
});

var Article = mongoose.model('Article', schema);

router.use(parser.json());
router.use(parser.urlencoded({extended: true}));

router.get('/articles', function(request, response) {
  console.log("articles requested");
  Article.find(function(error, articles) {
    if (error) return console.log(error);
    console.log("articles found");
    console.log(articles);
    response.send(articles);
  });
});

router.get('/articles/:id', function(request, response) {
  var query = Article.where({ "id" : request.params.id});
  query.findOne(function(error, article) {
    if(error) return console.log(error);
    response.status(200).send(article);
  });
});

module.exports = router;


var json = {
  "title": "Faut-il venir la première semaine de cours ?",
  "author": "La Chagne",
  "abstract": "Laissant le mois d’aout biafiner ses coups de soleil embarrassants, septembre pointe le bout de son foie avec son lot de doutes et d’interrogations. Même pas le temps de poser les valises que nos esprits sont déjà dans la tourmente: dois-je vraiment assister à la première semaine d’amphi?",
  "content": "content",
  "img":"img.png",
  "topics": ["CPE"]
}
