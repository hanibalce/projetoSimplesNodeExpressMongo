var usuarios = [
    { _id: 1, nome: "João da Silva", email: "joao@gmail.com" },
    { _id: 2, nome: "José da Silva", email: "jose@gmail.com" }
];

var Usuario = require('../models/usuario.js');

module.exports.inserirUsuario = function (req, res) {
    let promise = Usuario.create(req.body);
    promise.then(
        function(usuario){
            res.status(201).json(usuario);
        }
    ).catch(
        function(error){
            res.status(404).send('Usuario não existe!');
        }
    )
};


module.exports.listarUsuario = function (req, res) {
    let promise = Usuario.find().exec();
    promise.then(
        function(usuarios){
            res.json(usuarios);
        }
    ).catch(
        function(error){
            res.status(500).end();
        }
    )
};

module.exports.obterUsuario = function (req, res){
    var id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(
        function(usuario){
            res.json(usuario);
        }
    ).catch(
        function(error){
            res.status(500).end();
        }
    )
}