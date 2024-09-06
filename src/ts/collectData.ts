import * as constants from "node:constants";

const { MongoClient } = require('mongodb');
const moment = require('moment-timezone')

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export function collectNwriteData(req: any) {


    function getVisitData() {
        // Variables
        const time = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');

        const data = {
            "date": time,
            "ip": '' // hier soll die ip hin
        }

        // const ip = get.ip

        return data
    }

    let data: any = getVisitData()

    async function run() {
        try {
            await client.connect();
            const db = client.db('meineDatenbank');
            const collection = db.collection('meineSammlung');


            const result = await collection.insertOne(data);
            console.log("Dokument eingefügt:", result.insertedId);
        } finally {
            await client.close();
        }
        run().catch(console.dir);
    }
}
console.log('ich bin nicht gay')



