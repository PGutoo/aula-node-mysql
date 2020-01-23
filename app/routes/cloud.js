//var db = require('../../config/dbConnection');
module.exports=function(app){
    app.get('/cloud', function(req,res){
        //var connection = db();
        var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo = 'cloud'", function(error,result){
            res.render('secao/cloud', { dados: result });
            //res.send(result);
        });
});
};