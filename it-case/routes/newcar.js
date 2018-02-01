var express=require("express");
var bodyParser=require("body-parser");
var app=express.Router();

app.post('/newcar', function(request,response){
  var query1=request.body.post_variable;
});
