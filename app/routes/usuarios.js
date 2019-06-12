let controller = require("../controllers/usuarios.js");

module.exports = function(app){
    app.get("/usuarios",controller.listarUsuarios);
    app.get("/usuarios/:id",controller.obterUsuario);
    app.post('/usuarios',controller.inserirUsuario);
    app.put('/usuarios',controller.atualizarUsuario);
    app.delete("/usuarios",controller.excluirUsuario);
 }
 