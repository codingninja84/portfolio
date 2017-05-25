var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');
var mongoose = require('Mongoose')
mongoose.promise = global.promise

// require bodyParser since we need to handle post data for adding a user
app.use(bodyParser.json());
// static content
app.use(express.static(path.join(__dirname, "./public/dist")));


require('./server/config/mongoose.js');

//import the routes files
//this runs the file and stores module.exports
var route_setter = require("./server/config/routes/routes.js")

//invoke and pass app as a var. This calls the function
route_setter(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
