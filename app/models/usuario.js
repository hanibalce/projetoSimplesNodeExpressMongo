let mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        nascimento: {
            type: Date,
            required: true
        }
    });
    return mongoose.model('Usuario', schema);
}();