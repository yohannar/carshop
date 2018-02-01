var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
  //var file=JSON.parse(data);
  //res.json(JSON.stringify(file["carshop"]["employees"]));
  res.send('employees');
})
module.exports=router;
