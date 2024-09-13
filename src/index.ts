
import cors from 'cors';
import express from 'express';
import path from 'path';
import { collectNwriteData } from './ts/collectData';
import {getEvents} from "./utils/getEvents";
import {getUId} from "./utils/get";
const moment = require('moment-timezone');
const app = express();
export {app};

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
    console.log(getEvents(req));
    res.status(200).send()
})


app.get('/api/local/getuinfo', (req: any, res: any) => {
    const uid: number = getUId();
    let localV: number = 0
    const data: object = {
        "uid": uid,
        "localVisit": localV
    }
    const jsondata = JSON.stringify(data)
    res.send(jsondata)
    res.status(200).send()
})

