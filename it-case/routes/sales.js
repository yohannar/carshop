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

  json = getConfig('data.json');

  router.get('/',function(req,res,next){
    var result=createjson();
    res.json(result); //Returns only the Employees
  })
  
  function createjson(){
    var employees=json.carshop.employees;
    var sales=json.carshop.sales;
    var cars=json.carshop.carmodels;
    var text='{"employees": ['+'{"id:"}'+'{"name:"}'+'{"sales":}'+']'+'}';
    var result=JSON.parse(text);
    console.log(result);

    for(var l=0;l<employees.length;l++){ //Setting up a copy of the Employees object, a table with three attributes: id, name and sales
      result[l].id=employees[l].id;
      result[l].name=employees[l].name;
      result[l].sales=0;
    }

    for(var i=0;i<sales.length;i++){ //Looking at one element at the time in the sales object.
      var current=salses[i]; //The current sale entry we are handeling
      var carid=current.carmodel_id; //The carmodel_id conserned in this entry
      var price=0;//The price for the carmodel consering the current sale sales[i]
      var employee=current.employee_id; //The employee who have managed the specified sale
      for(var j=0;j<cars.length;j++){ //Stepping through the cars and looking for the the same id as in the sales entry we are looking at
        if(carid==cars[j].id){
          price=cars[j].price;
        }else{ //If the carmodel entry we are currently looking at does not match the carid in the sale: Do nothing and loop again
        }
      }for(var k=0;k<result.length;k++){ //Doing the same thing for employees. We can do this in the result object as well since it is a copy of the employee one
        if(employee==employees[k].id){
          result[k].price+=price; //We have fetched the price and the employee and are increasing the value for the price
        }else{
        }
      }
    }
    return result;
  }

module.exports=router;
