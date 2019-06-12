let express = require('express');
let usuariosRouter = require('../app/routes/usuarios.js');
let bodyParser = require('body-parser');


module.exports = function () {
	let app = express();
	var port = process.env.PORT || 3000;
	app.set('port', port);
	app.use(express.static('./public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	usuariosRouter(app);
	return app;
}

