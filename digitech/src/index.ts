/*import express from 'express'
var mongoose = require('mongoose')
const app = express();
const port = 5000;

app.get('/', (_, res) => {
    res.status(200).send();
})
 
app.listen(port, () =>
    console.log(`Running on port ${port}`)
)

//mongodb
//mongoose.connect('mongodb://localhost:27017')
//mongoose.connection.on('error', console.error.bind(console, 'DB connection error'))

const db = require('./config/db.config')

db.connect();*/

import mongoose from "mongoose";
import bodyParser from "body-parser";
/*import Teacher from "../modelles/teacher";
import cors from 'cors';*/
import express,{Request, Response} from"express";

const port: number=5000;

require('dotenv').config();
const app = require('express');
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/school';
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', require('./routes'));
/*app.use(bodyParser.json());
const uri ="mongodb://localhost:27017/schooldb";

(async ()=>{
    try{
        await mongoose.connect(uri);
        console.log('Connecter');
    } catch (e) {
        console.log(e);
    }
})();*/

/*app.get('/list', (req:Request, res:Response) => {
    Teacher.find((err, teacher) => {
        if(err)res.status(500).send(err);
        else res.send(teacher);
    });
}); */


app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});
mongoose.connect(db,);