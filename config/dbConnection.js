// Conexão com o MySQL
let mysql = require('mysql');

let connMysql = function() {

    return mysql.createConnection({
        host: 'localhost',
        user: '<usuario_DB>',
        password: '<senha_DB>',
        database: '<nome_DB>'
    });
}
module.exports = function () {
    return connMysql;
}
