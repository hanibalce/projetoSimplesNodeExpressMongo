let controller = require('../controllers/usuario.js');

module.exports = function(app){
    app.get('/usuarios', controller.listarUsuario);
    app.get('/usuarios/:id', controller.obterUsuario);
    app.post('/usuarios', controller.inserirUsuario);
}