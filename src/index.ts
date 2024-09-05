import express from 'express';
import date from 'bun'
// import cors from 'cors';
import path from 'path';
import {collectNwriteData} from "./ts/collectData";
const moment = require('moment-timezone')
const app = express();



const time = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');



// Path to the JSON file
const visitData = path.join(__dirname, 'data/visits.json');

// JSON data to append
const data: any = {
    "User-Id": '01023',
    "Ip": '127.0.0.1',
    "date": time
};

console.log('Server is running');
app.use(express.json());
// app.use(cors()); // Enable CORS

// Helper function to read and write JSON data to a file

// APIs
app.post('/api/Wevent', (req, res) => {
    console.log('Event API accessed');
    res.status(200).send();
});

app.post('/api/Wvisit', async (req, res) => {
    console.log('Visit API accessed');
    collectNwriteData(req)

});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
