const express = require("express");
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

var PORT = process.env.PORT || 8080

// SET UP VIEW ENGINE
app.set('view engine', 'ejs');

// SET UP ROUTES
app.use('/auth', authRoutes);

//CREATE HOME ROUTE
app.get('/', function(req, res){
    res.render('home');
});

app.listen(PORT, function(){
    console.log('app now listening for requests on port ', PORT);
});