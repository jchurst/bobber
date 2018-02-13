const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const app = express();
const http = require('http').Server(app);
app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('port', process.env.PORT || 8080);
app.set('data', __dirname + '/data');
app.engine('html', handlebars({
	extname: 'html'
}));
app.set('view engine', 'html');
http.listen(app.get('port'));