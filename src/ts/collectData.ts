// This file is used to collect and merge the data collected by multiple functions in the /utils/ directory.
// after it fetched all the data it will write it into a MongoDB Database



import * as constants from "node:constants";
import {getDate, getDevice, getSId, getUId, getVId} from "../utils/get";

// const { MongoClient } = require('mongodb');
const moment = require('moment-timezone')

// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export function collectNwriteData(req: any) {


    function getVisitData() {
        // Variables
        const time = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');
        const device = getDevice(req);


        const data = {
            visits: [
                {
                    "VId": getVId(),
                    "UId": getUId(),
                    "SId": getSId(),
                    "date": getDate(),
                    "device": device
                },
            ],

        }

        // const ip = get.ip

        return data
    }

    let data: any = getVisitData()

    // async function run() {

    return data
}



