var Usuario = require('../models/usuario.js');

module.exports.listaUsuarios = function (req, res) {
    let promise = Usuario.find().exec();
    promise.then(
        function (usuarios) {
            res.json(usuarios)
        }
    ).catch(
        function (erro) {
            res.status(500).end();
        }
    );
};

module.exports.obterUsuario = function (req, res) {
    var id = req.params.id;
    let promise = Usuario.findById(id);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
};


module.exports.inserirUsuario = function (req, res) {
    let promise = Usuario.create(req.body);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
};