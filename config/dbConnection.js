var mysql = require('mysql');
var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'pedro',
        password: '0246810',
        database: 'projeto_node'
    })
};

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o db');
    return connMySQL;
}