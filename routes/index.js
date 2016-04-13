/**
 * Created by Lili on 09/04/15.
 */
/* GET Userlist page. */

var express = require('express');
var router = express.Router();
var data = require('./data.js');
// console.log(data);

/* GET home page. */
// router.get('/map', function(req, res) {
//     res.render('map', { title: 'Map' });
// });

router.get('/player', function(req, res){
    res.render('player', {
    });
});

router.get('/framework', function(req, res){
    res.render('framework', {});
});

router.get('/upload', function(req, res){
});

module.exports = router;

