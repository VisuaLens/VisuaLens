import express from 'express';

import date from 'bun'; // Ist das korrekt? Stelle sicher, dass du 'bun' richtig verwendest.
// import cors from 'cors';
import path from 'path';
import { collectNwriteData } from './ts/collectData';
import {getEvents} from "./utils/getEvents";
const moment = require('moment-timezone');
const app = express();

const time = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');

// Pfad zur JSON-Datei
const visitData = path.join(__dirname, 'data/visits.json');

// JSON-Daten zum Anhängen
const data: any = {
    'User-Id': '01023',
    'Ip': '127.0.0.1',
    'date': time,
};

console.log('Server is running');
app.use(express.json());
// app.use(cors()); // Enable CORS

// APIs
app.post('/api/Wevent', (req, res) => {
    console.log('Event API accessed');
    res.status(200).send();
});

app.post('/api/Wvisit', async (req, res) => {
    console.log('Visit API accessed');
    const data = collectNwriteData(req);

    res.status(200).send();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

getEvents()
// Server Start
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


app.post('/api/event/button', (req: any, res: any) => {
    const eventBody = req.body
    console.log(eventBody);
    res.status(200).send()
})

// Exportiere die Request-Variable für den Wvisit-Endpunkt
export {app};
