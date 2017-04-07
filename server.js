var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/home",function(req,res){
	res.send('home')
})

app.get("/movie",function(req,res){
	res.send('movie')
})

app.get("/su",function(req,res){
	console.log(req.query);
	res.send('成功获取数据')
})

app.listen(8080,function(){
	console.log('server is running!')
})