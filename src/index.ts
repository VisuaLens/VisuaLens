
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
const uri = "mongodb+srv://theowimber:zSkOtFpI8Wk0X7x7@testmongodb.hvh0x.mongodb.net/?retryWrites=true&w=majority&appName=testmongodb"
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
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


app.post('/api/event/button', (req: any, res: any) => {
    console.log();
    res.status(200).send()
})
let uid: number = getUId();


app.get('/api/local/getuid', (req: any, res: any) => {
    
    const data: object = {
        "uid": uid
    }
    const jsondata = JSON.stringify(data)
    
    res.send(jsondata)
    res.status(200).send()
})

async function writeUIDtoDB() {
    // connect to mongodb 
    const client = new MongoClient(uri)
    const struid = uid.toString()
    await client.connect
    const db = client.db("main")
    const visiscollection = db.collection("visits")
    const testdata = {
        "fortnite": [
            "testdata", {
              "testdata": "",
              "testdata2": "duhuansognbliblablob",
              "uid": uid,
        },
        "events", {
            "testevent": "bli bla blub",
            "testbuttonpress": "button bla pressed"
        }
    ]}
    await visiscollection.insertOne(testdata)
        // const result = await usersCollection.insertOne({ name: "Max", age: 30 });
}

app.post('/api/local/sendandsaveuid', (req: any, res: any) => {
    uid = req.body;
    writeUIDtoDB()
    res.status(200).send()
})
 