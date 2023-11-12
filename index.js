const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./config/mongoose');
const authRouter = require('./router/authRouter');
const cors = require('cors')
 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors())
mongo();


app.use('/api/auth',authRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})