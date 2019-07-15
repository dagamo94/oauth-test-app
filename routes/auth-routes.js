const router = require('express').Router();

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
router.get('/google', function(req, res){
    // handle with passport
    res.send('logging in with google');
});

module.exports = router;