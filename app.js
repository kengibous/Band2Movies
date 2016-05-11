var express = require("express");
var app = express();
var Showtimes = require("showtimes");
var api = new Showtimes(53186, {});
 

app.get('/', function(req, res) {
  
  api.getTheaters(function (error, theaters) {
	  if (error) {
		throw error
	  }
	 
	  res.send(theaters);
	});

});
 
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});