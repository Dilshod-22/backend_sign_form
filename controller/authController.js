const user = require('../models/user');
const asyncHandler=require('express-async-handler');
const {sendMesasage} = require('../config/nodemailer');
const {random} = require('../config/random');

let info = {};

const getUserInfo = asyncHandler(
    async(req,res) => {
        const user = await user.findById(req.params.id);
        res.send(user)
    }
)

const authLogin = asyncHandler(
    async(req,res) => {
        const { password , email } = req.body;
        const find = await user.findOne({email:email,password:password});
        if(find) {
            res.send(find._id).status(200);
            res.end();      
        }else{
            throw new Error('email or passwors is wrong')
        }   
    }
);

const authRegistration = asyncHandler(
    async(req,res) => {
        const { username , password , email } = req.body;
        const find = await user.findOne({email:email});
        if(find) {
            throw new Error('this email is already registered');
        }else{
            const users = {
                username:username,
                password:password,
                email:email
            }
            await user.create(users);
            res.json(users);
            res.end();  
        } 
    }
);

const receiveAccount = asyncHandler(
    async(req,res) => {
        const { email } = req.body;
        const find = await user.findOne({email:email});
        if(find) {
            info.email = find.id;
            info.code = random();
            console.log(info.code);
            const deleteUrl = `Your code for recvery password ${info.code}`
            const data = {
            from: "kutubxona655@gmail.com",
            to: email,
            subject: "Подтверждения для удаления аккаунта",
            text: deleteUrl
            }
            await sendMesasage(data)
            res.send('sended to success');   
        }else{
            res.send('email is mot found');    
        }
    }    
);

const authGoogle = asyncHandler(
    async(req,res) => {
        
    }
);

const authFacebook = asyncHandler(
    async(req,res) => {
        
    }
);

const googleIdenty = asyncHandler(
    async(req,res) => {
        passport.authenticate('facebook')
    }
);

const authLinkedeIn = asyncHandler(
    async(req,res) => {

    }
);

const changePassword = asyncHandler(
    async(req,res) => {
        const {changePassword,verifyPassword} = req.body;
        if(verifyPassword === info.code){
            let useri = await user.findByIdAndUpdate(info.email,{$set:{password:changePassword}});    
            useri ? res.send("change password success") : res.send("change password error");
        }else{
            res.send('Confirmation password error')
        }
    }
)

module.exports = {
    authLogin,
    authRegistration,
    authGoogle,
    authFacebook,
    authLinkedeIn,
    receiveAccount,
    changePassword,
    googleIdenty
}