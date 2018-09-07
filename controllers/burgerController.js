var express = require("express");
var router = express.Router();
var BunsDB = require("../models/BunsDB");
var CheesesDB = require("../models/CheesesDB");



router.get("/", function(req, res){
    
    var data = {buns: {}, cheeses: {}};
    BunsDB.findAll({}).then(function(results) {

        console.log(results);
     data.buns =  results
    });
    

    CheesesDB.findAll({}).then(function(results) {

        console.log(results);
        data.cheeses = results
    
    });

    res.render("index", {data: data});
});


module.exports = router;