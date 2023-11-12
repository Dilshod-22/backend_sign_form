const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./config/mongoose');
const authRouter = require('./router/authRouter');
const cors = require('cors')
 
const corsOptions = {
  origin: 'http://localhost.5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }));

mongo();


app.use('/api/auth',cors(corsOptions),authRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})