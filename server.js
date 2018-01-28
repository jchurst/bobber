var express = require("express");

var PORT = (process.env.PORT || 5000);

var app = express();

app.use(express.static("public"));

app.listen(PORT, function () {
	console.log("Node app is running on port", PORT);
});