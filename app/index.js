var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/sitemap', function(request, response) {
	var dir = "./public/"
	response.sendFile(dir+ "sitemap.xml");
});

app.listen(3002, function(){
  console.log('listening port 3002');
});
