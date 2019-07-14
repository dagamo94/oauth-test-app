const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080

// SET UP VIEW ENGINE
app.set('view engine', 'ejs');


//CREATE HOME ROUTE
app.get('/', function(req, res){
    res.render('home');
});

app.listen(PORT, function(){
    console.log('app now listening for requests on port ', PORT);
});