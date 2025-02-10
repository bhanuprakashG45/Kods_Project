const cors = require('cors');
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8001;
const router = require('./routes/authRouter');
const connectToDb = require('./utils/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173', // replace with your frontend URL
  }));

// const corsOptions = {
//     origin: 'http://localhost:8001',
//     methods: "GET, POST, PUT, DELETE ,PATCH,HEAD",
//     credentials : true,
// }

// app.use(cors(corsOptions));

app.use('/',router);
app.get('/', router);

connectToDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})

