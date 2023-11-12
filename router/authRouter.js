const express = require("express");
const { 
    authLogin ,
    authRegistration , 
    authGoogle , 
    authFacebook , 
    authLinkedeIn ,
    receiveAccount,
    changePassword,
    googleIdenty } = require('../controller/authController');
const router = express.Router();
const passport = require('passport')
require('../config/passport-google')
require('../config/passport-facebook')

router.post('/authLogin',authLogin);
router.post('/authRegistration',authRegistration);
router.post('/receiveAccount',receiveAccount);
router.post('/authGoogle',authGoogle);
router.post('/authFacebook',authFacebook);
router.post('/authLinkedeIn',authLinkedeIn);
router.post('/changePassword',changePassword);
router.post('/authGoogle/callback',googleIdenty);
router.get('/login',(req,res)=>{
    res.send("salomcha")
})


router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: "/login"
}), (req, res) => {
    res.end('Log in!')
})

router.get('/facebook',
  passport.authenticate('facebook'));
 
router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;