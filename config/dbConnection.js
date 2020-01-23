var mysql = require('mysql');
module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'pedro',
        password: '0246810',
        database: 'projeto_node'
    })
        
};