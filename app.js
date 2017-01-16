var express=require('express'),
    bodyparser=require('body-parser'),
    path=require('path'),
    connection=require('./connection'),
    settings=require('./settings');

var app=express();
var server=require('http').Server(app);

app.use(bodyparser.json());
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb',extended:true}));

app.use(require('./routes/index'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/app/shared/index.html');
});

connection.init();

app.set('port',process.env.PORT || settings.webPort);
app.use(express.static(path.join(__dirname,'public')));

server.listen(app.get('port'),function(){
  console.log("Server listing port : " + server.address().port);
});

module.express = app;
