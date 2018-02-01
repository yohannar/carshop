var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { //(Routing method)app.get för att hantera GET requests och app.post för att hantera POST requests
  //The '/' is the root path we will match requests to (in this case home page)
  res.send('respond with a resource'); //This one responds with a "respond with a resource" when a GET request is made to the homepage
});

module.exports = router;
