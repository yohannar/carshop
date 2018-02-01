var express = require('express');
var router = express.Router();
var fs=require('fs'),
  json;


  function readJsonFileSync(filepath, encoding){

      if (typeof (encoding) == 'undefined'){
          encoding = 'utf8';
      }
      var file = fs.readFileSync(filepath, encoding);
      return JSON.parse(file);
  }

  function getConfig(file){

      var filepath = __dirname + '/../' + file;
      return readJsonFileSync(filepath);
  }

  //assume that config.json is in application root

  json = getConfig('data.json');

  router.get('/',function(req,res,next){
    res.json(json.carshop.employees); //Returns only the Employees
  })


module.exports=router;
