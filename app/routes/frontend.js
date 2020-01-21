module.exports=function(app){
    app.get('/frontend', function(req,res){
        var mysql=require('mysql');
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'projeto_node'
        });
        connection.query('select * from conteudo', function(erro,result){
            res.send(result);
        });
        //res.render('secao/frontend');
});
};