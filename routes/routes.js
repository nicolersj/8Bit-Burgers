var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
  // db.all(function(burger_data) {
  //   console.log(burger_data);
  // })
  //
  // db.findAll({}).then(function(results) {
  //   // results are available to us inside the .then
  //   // console.log(results);
  //   res.render("index", {
  //     buns: results
  //   }, {
  //     meats: results
  //   }, {
  //     cheeses: results
  //   }, {
  //     veggies: results
  //   }, {
  //     sides: results
  //   }, {
  //     drinks: results
  //   }, {
  //     add_on: results
  //   });
  //
  // });
  console.log("homepage")
});

router.get('/404', function(req, res) {
  console.log("broken")
});

router.put('/order', function(req, res) {
  // db.update(req.body.burger_id, function(result) {
  //   console.log(burger_data)
  // });
  // res.redirect('/');
  console.log("order food")
});

router.post('/save', function(req, res) {
  // db.create(req.body.burger_name, function(result) {
  //   console.log(burger_data)
  // })
  res.redirect('/');
  console.log("save custom burger")
});

module.exports = router;
