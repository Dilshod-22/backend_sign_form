const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');


const sendMesasage = asyncHandler(async(data, req, res) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'kutubxona655@gmail.com',
            pass: 'afrbijcfijrbmhzk'
        }
    })

    let mailOption = {
        from: data.from,
        to: data.to,
        subject: data.subject,
        text: data.text
    }
    transporter.sendMail(mailOption, function(err, res){
        if(err){
            console.log(err)
            return false;
        }else{
            console.log('email send: ' + res.response)
            return true;
        }
    })
})

const forgotPass = asyncHandler(async(data, req, res) => {
//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: 'kutubxona655@gmail.com',
//             pass: 'afrbijcfijrbmhzk'
//         }
//     })

//     let mailOption = {
//         from: data.from,
//         to: data.to,
//         subject: data.subject,
//         text: data.text
//     }

//     transporter.sendMail(mailOption, function(err, info){
//         if(err){
//             console.log(err)
//         }else{
//             console.log('email send' + info.response)
//         }
//     })
})


module.exports = { sendMesasage, forgotPass }