var Usuario = require('../models/usuario.js');

module.exports.listarUsuarios = function (req, res) {
    let promise = Usuario.find().exec();
    promise.then(
        function (usuarios) {
            res.status(200).json(usuarios)
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
            res.status(200).json(usuario);
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

module.exports.excluirUsuario = function (req, res) {
    let promise = Usuario.findByIdAndRemove(req.body._id).exec();
    promise.then(
        function (usuario) {
            res.status(200).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
};


module.exports.atualizarUsuario = function (req, res) {
    let _usuarioId = req.body._id;
    var _nome = req.body.nome;
    var _email = req.body.email;
    var _nascimento = req.body.nascimento;
    Usuario.findOneAndUpdate({ _id: _usuarioId }, { $set: { nome: _nome, email:_email, nascimento:_nascimento } }, 
                        { new: true }, 
                        function(err, doc) {
                             if (err) {
                                console.log(err);
                                return res.json('Erro: Usuário não atualizado!');
                             } else {
                                res.json(doc);   
                             }    
                        });
};