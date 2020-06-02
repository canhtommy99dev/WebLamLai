var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var admin = require('firebase-admin')

var serviceAccount = require('./mongcaifoodymcbyfanpage-firebase-adminsdk-bys5y-ccc714061a.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mongcaifoodymcbyfanpage.firebaseio.com"
  });

function isAuthenticated(req,res,next){

}

var app = express();
var port = 8080;

app.use(logger('dev'));

app.set('view engine','ejs');

app.use(express.static('views'));

app.set('views',__dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.render('home.ejs')
})

app.get('/homesucess',function(req,res){
    res.render('homesucess.ejs')
})

app.get('/resultcc',function(req,res){
    res.render('webch.ejs')
})

app.post('/',function(req,res){
    console.log(req.body.breakfast);
    var breakfast = req.body.breakfast;
    res.render('result.ejs',{data:breakfast})
})

app.listen(port,function(){
    console.log("App run port"+ port)
});