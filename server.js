import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Database from './database/db.js';

const app = express();
const port = 4000;

const db = new Database();
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`vous etes connecte au server avec succes http//:localhost:${port}`);
})