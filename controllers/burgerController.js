var express = require("express");
var router = express.Router();
var db = require("../models/burger");



router.get("/", function(req, res){

    db.findAll({}).then(function(results) {
        // results are available to us inside the .then
       // console.log(results);
        res.render("index", {buns: results}, {meats: results}, {cheeses: results}, {veggies: results}, {sides:results}, {drinks:results},{add_on:results}); 

    });

});


module.exports = router;