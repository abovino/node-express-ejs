// require express and create new app instance, and create port variable
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded());

// route our app
var router = require('./app/routes');
app.use('/', router);

// set static files (css, images, etc) location
app.use(express.static(__dirname + '/public'))

// start server (app listen)
/*app.listen(port, function(req, res) {
  console.log("app listening on port " + port);
});*/

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Chat server listening at" + port);
});

