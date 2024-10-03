// This file is used to collect and merge the data collected by multiple functions in the /utils/ directory.
// after it fetched all the data it will write it into a MongoDB Database



import * as constants from "node:constants";
import {getDate, getDevice, getSId, getUId, getVId} from "../utils/get";

// const { MongoClient } = require('mongodb');
const moment = require('moment-timezone')

// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



export async function collectNwriteData(req: any) {

    
    async function getVisitData() {
        // Variables
        const time = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');
        const device = await getDevice(req);


        const data = {
            visits: [
                {
                    "VId": getVId(),
                    "UId": getUId(),
                    "SId": getSId(),
                    "date": getDate(),
                    "device":  device
                },
            ],

        }

        // const ip = get.ip

        return data
    }

    async function CollectNWriteDataToDB() {
        let data: object = await getVisitData()

            




    }


    let data: any = await getVisitData()
    const JSONdata = JSON.stringify(data)
    // async function run() {
    console.log(JSONdata)
    return JSONdata
}



