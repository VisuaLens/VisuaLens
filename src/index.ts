import express from 'express';
import date from 'bun'; // Ist das korrekt? Stelle sicher, dass du 'bun' richtig verwendest.
// import cors from 'cors';
import path from 'path';
import { collectNwriteData } from './ts/collectData';
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
    console.log(data)
    res.status(200).send();
});

// Server Start
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

// Exportiere die Request-Variable für den Wvisit-Endpunkt
export {app};
