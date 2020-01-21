var app = require('./config/server');
var rotaHome = require('./app/routes/home')(app);
var rotaFront = require('./app/routes/frontend')(app);
var rotaBack = require('./app/routes/backend')(app);
var rotaInfra = require('./app/routes/infraestrutura')(app);
app.listen(3000,function(){
    console.log('Servidor rodando com Express');
});