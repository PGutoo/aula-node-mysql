/*var http = require('http');
var server = http.createServer(function(req, res){
    var categoria = req.url;
    if(categoria == '/front-end'){
        res.end("<html><body>Tecnologias Front-End: TypeScript, Angular, React..</body></html>");
}
    else if(categoria == '/back-end'){
        res.end("<html><body>Tecnologia Back-End: NodeJS, Python, PHP, MySQL..</body></html>");
}  
    else if(categoria == '/infraestrutura'){
        res.end("<html><body>Azure Cloud, Linux, MfffsdfsffySQL Server..</body></html>");
}
    else{
        res.end("<html><body>Programador Full Stack</body></html>");
}
}
);
server.listen(3001);*/

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('./config/dbConnection.js')
    .into(app);
module.exports = app;
/* app.get('/', function(req, res){
    res.render('../secao/default');
});
app.get('/back-end',function(req,res){
    res.render("../secao/backend");
});
app.get('/infraestrutura',function(req,res){
    res.render("../secao/infraestrutura");
});
app.listen(3000,function(){
    console.log("Servidor rodando com Express");
}); */