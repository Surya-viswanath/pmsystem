const express = require('express');
const connection = require('./config/Mong');
// const router = require('./Router/Router1');
const cors =require("cors");
const app = express();
const dotenv = require('dotenv');
const router = require('./Router/Router');
const multer = require('multer');
const routerone = require('./Router/Rone');


connection();
app.use(express.json());

dotenv.config();
app.use(cors());




app.use('/',router)


const PORT  = process.env.PORT || 4008

app.listen(PORT,console.log(`server is running on ${PORT}`));




