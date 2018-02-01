var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

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

app.use('/', index);
app.use('/users', users);
app.use('/employees',employees);

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

function onSubmit(){
  switch(document.getElementByID("choices").selectedIndex){
    case "Get Employees":
      app.use('/employees',employees);
      break;
    case "Get Carmodels":
      app.use('/cars',cars);
      break;
    case "Add new Carmodel":
      app.use('/newcar',newcar);
      break;
    case "Get Employees' Sales":
      app.use('/sales',sales);
      break;
    default:
      break;
    }
  }
module.exports = app;
