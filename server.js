var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require("./middleware.js");

app.use(middleware.logger);
//app.use(middleware.requireAuthentication); //application level middleware

app.get('/about', middleware.requireAuthentication, function(req, res){ //route level middileware
  res.send("about us !");
});

app.use(express.static(__dirname+"/public"));

app.listen(PORT, function() {
  console.log("express server started on port :"+PORT);
});
