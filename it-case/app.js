var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var employees=require('./routes/employees');
var cars=require('./routes/cars');
//var new_car=require('./routes/newcar');
var sales=require('./routes/newcar');
var fs=require('fs'),
  json;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); //Express requires extra middle-ware layer to handle POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.route('/')
  .get('/', function(req,res){
  res.render('index')
});
app.route('/users')
  .get('/', function(req, res, next) { //(Routing method)app.get för att hantera GET requests och app.post för att hantera POST requests
    //The '/' is the root path we will match requests to (in this case home page)
    res.send('respond with a resource'); //This one responds with a "respond with a resource" when a GET request is made to the homepage
  });

app.route('/employees')
  .get('/',function(req,res,next){
  res.json(json.carshop.employees); //Returns only the Employees
})
app.use('/cars',cars);
//app.use('/newcar',new_car);
app.use('/sales',sales);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000,function(){ //listen on port 3000. The home page will be displayed by using index.js
  console.log("Started on PORT 3000")
});
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

module.exports = app;
