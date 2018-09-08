// require("dotenv").config();
// var express = require("express");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");
// var methodOverride = require('method-override');
// var db = require("models");
//
// var app = express();
// app.use(express.static(__dirname + '/public'));
// // app.use(express.static("public"));
//
// var PORT = process.env.PORT || 3000;
//
// app.use(bodyParser.urlencoded({
//    extended: false
//  }));
// app.use(bodyParser.json());
//
// app.use(methodOverride('_method'));
// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");
//
// // Routes
// var routes = require('./routes/routes.js');
// app.use('/', routes);
//
//
// var syncOptions = { force: false };
//
// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }
//
// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });
//
// module.exports = app;

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
