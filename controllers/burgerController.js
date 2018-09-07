var express = require("express");
var router = express.Router();
var BunsDB = require("../models/BunsDB");
var CheesesDB = require("../models/CheesesDB");
var AddOnsDB = require("../models/AddOnsDB");
var CondimentsDB = require("../models/CondimentsDB");
var DrinksDB = require("../models/DrinksDB");
var MeatsDB = require("../models/MeatsDB");
var SidesDB = require("../models/SidesDB");
var VeggiesDB = require("../models/VeggiesDB");



router.get("/", function(req, res){

    var data = {buns: {}, cheeses: {}, add_ons: {}, condiments: {}, drinks: {}, meats: {}, sides: {}, veggies: {}};
    BunsDB.findAll({}).then(function(results) {

        console.log(results);
     data.buns =  results
    });


    CheesesDB.findAll({}).then(function(results) {

        console.log(results);
        data.cheeses = results

    });

    AddOnsDB.findAll({}).then(function(results) {

        console.log(results);
        data.add_ons = results

    });

    CondimentsDB.findAll({}).then(function(results) {

        console.log(results);
        data.condiments = results

    });

    DrinksDB.findAll({}).then(function(results) {

        console.log(results);
        data.drinks = results

    });

    DrinksDB.findAll({}).then(function(results) {

        console.log(results);
        data.drinks = results

    });

    MeatsDB.findAll({}).then(function(results) {

        console.log(results);
        data.meats = results

    });

    SidesDB.findAll({}).then(function(results) {

        console.log(results);
        data.sides = results

    });

    VeggiesDB.findAll({}).then(function(results) {

        console.log(results);
        data.veggies = results

    });

    res.render("index", {data: data});
});

// router.put('/add_ons/update',function(req,res){
//   console.log('request', req);
//   burger.update(req.body.id, function(result){
//     console.log(result);
//     res.redirect('/');
//   });
// });


module.exports = router;
