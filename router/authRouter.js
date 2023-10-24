const express = require("express");
const { 
    authLogin ,
    authRegistration , 
    authGoogle , 
    authFacebook , 
    authLinkedeIn ,
    receiveAccount,
    changePassword } = require('../controller/authController');
const router = express.Router();

router.post('/authLogin',authLogin);
router.post('/authRegistration',authRegistration);
router.post('/receiveAccount',receiveAccount);
router.post('/authGoogle',authGoogle);
router.post('/authFacebook',authFacebook);
router.post('/authLinkedeIn',authLinkedeIn);
router.post('/changePassword',changePassword);

module.exports = router;