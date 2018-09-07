var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();

var orm = require("./config/orm");

var controller = require("./controllers/burgerController");


var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(controller);

app.listen(PORT, function(){
  console.log("Started our server and listening");
})
