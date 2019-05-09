let express = require('express');
let usuariosRouter = require('../app/routes/usuarios.js');
let bodyParser = require('body-parser');


module.exports = function () {
    let app = express();
    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    usuariosRouter(app);
    return app;
}