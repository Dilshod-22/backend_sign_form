const mongoose = require('mongoose');
const dbConnect=()=>{
    try{
        mongoose.connect('mongodb+srv://moxirbek:dilshodbek0422@cluster0.fp1t4.mongodb.net/?retryWrites=true&w=majority')
            console.log('connect to mongoose');   
    }
    catch{
        console.log('connect error');
    }
};
module.exports = dbConnect;
