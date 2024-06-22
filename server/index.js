import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import defaultData from './default.js' ;
import router from './routes/route.js';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({extended:true})); // to parse body
app.use(bodyParser.urlencoded({extended:true})); // to parse url
app.use('/',router);

dotenv.config();

const USERNAME = process.env.DB_NAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

defaultData();

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));
