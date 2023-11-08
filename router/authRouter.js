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
require('../config/passport')

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



module.exports = router;