
import cors from 'cors';
import express from 'express';
import path from 'path';
import { collectNwriteData } from './ts/collectData';
// import {getEvents} from "./utils/getEvents";
import {getUId} from "./utils/get";
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
const moment = require('moment-timezone');
const app = express();
dotenv.config()

// const client = new MongoClient(uri)
export {app};

// client.connect()
const time = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');

// Pfad zur JSON-Datei
const visitData = path.join(__dirname, 'data/visits.json');

// JSON-Daten zum Anhängen

console.log('Server is running');
app.use(express.json());
app.use(cors())
// app.use(cors()); // Enable CORS

// APIs
app.post('/api/event/Wevent', (req, res) => {
    console.log('Event API accessed');
    res.status(200).send();
});

app.post('/api/visits/Wvisit', async (req, res) => {
    console.log('Visit API accessed');
    const data = collectNwriteData(req);

    res.status(200).send();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'test' ,'index.html'));
})


// Server Start


app.post('/api/event/button', (req: any, res: any) => {
    console.log();
    res.status(200).send()
})

app.get('/api/local/nudi', (req, res) => {
    const uid = getUId(); 
    res.json({ uid: uid }); 
    
});

app.post('/api/local/sudi', (req, res) => {
    console.log("Received UID from client:", req.body); 
    res.status(200).send(); 
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
