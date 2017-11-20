//setup express
var express = require('express');
var app = express();

//setup bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//setup path
var path = require('path');

//setup views
// app.use(express.static(path.join(__dirname, './client/static')));
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public/dist')));
app.use(bodyParser.urlencoded({ extended: true }));

//start database
require('./server/config/mongoose.js');

//setup routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

//start port
app.listen(8000,function(){
    console.log('listenning port 8000');
});