let http = require('http');
var app = require('./config/express')();
var db = require('./config/database.js');


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server rodando na porta' + app.get('port'));
 });

db('mongodb+srv://mongoDB:mongoDB@cluster0-l9pgo.mongodb.net/sistema?retryWrites=true');

