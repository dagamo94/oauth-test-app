const router = require('express').Router();
const passport = require('passport');

// AUTH LOGIN
router.get('/login', function(req,res){
    res.render('login');
});

// AUTH LOGOUT
router.get('/logout', function(req, res){
    //handle with passport
    res.send('logging out');
})

// AUTH WITH GOOGLE
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// CALLBACK ROUTE FOR GOOGLE TO REDIRECT TO 
router.get('/google/redirect', passport.authenticate('google'), function(req, res){
    res.send('reached the callback uri')
});

module.exports = router;