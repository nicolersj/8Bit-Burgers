var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    console.log("homepage")
    res.render('index');
    // res.send("views/index")
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

router.get('/404', function(req, res) {
  console.log("broken")
  res.render('404');});


module.exports = router;
