const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
}).then(() => console.log("mongoDB connected"))


app.use('/api', require('./routes/Bookroutes'))



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('server is running on 4000')
})