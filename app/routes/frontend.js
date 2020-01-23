var db = require('../../config/dbConnection');
module.exports=function(app){
    app.get('/frontend', function(req,res){
        var connection = db();
        connection.query("SELECT * FROM conteudo WHERE modulo = 'front-end'", function(error,result){
            res.render('secao/frontend', { dados: result });
            //res.send(result);
        });
});
};