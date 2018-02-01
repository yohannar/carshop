var express = require('express');
var router = express.Router();

/*Routing refers to the definition of application (sever) end points and how they
respond to client (web browser) requests*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content:'Först'}); //The first 
});

module.exports = router;
