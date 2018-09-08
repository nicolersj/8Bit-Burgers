var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    console.log("homepage")
    res.render('index');
    // res.send("views/index")
});


router.put('/burgers/update', function(req, res) {
  console.log("order food", req)
  db.update(req.body.id, function(result) {
    console.log(burger_data)
  });
  res.redirect('/');

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
