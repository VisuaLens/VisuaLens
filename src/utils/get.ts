// @ts-ignore
import app from '../app'
import {nanoid} from "nanoid";
import moment from "moment-timezone";
const uuid: any = require('uuid')
const time = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');
let Vcounter: number = 0



export function getDate(): any {
    return time
}

export function getSId() {
    const SId = nanoid(6)
    return SId
}

export function getUId() {
    const UId: number = uuid.v4();
    return UId;
}

export function getVId() {
    Vcounter++
    return Vcounter
}

// This function is used as the name emplies to get device informations

export async function getDevice(req: app.Request,) {

    const userAgent = req.headers['user-agent'];
    let os: any = 'Unknown'
    const ip: any = req.ip
    let browser: any = 'Unknown'

    function getOs() {
        if(userAgent.includes('Windows')) {
            os = 'Windows'
        } else if(userAgent.includes('Android')) {
            os = 'Android'
        } else if(userAgent.includes('iPhone')) {
            os = 'iPhone'
        }

        return os;
    }


    function getBrowser() {
        if(userAgent.includes('Chrome')) {
            browser = 'Chrome'
        } else if(userAgent.includes('Firefox')) {
            browser = 'Firefox'
        } else if(userAgent.includes('Safari')) {
            browser = 'Safari'
        }

        return browser;
    }

    getBrowser()
    getOs()

    // const ip = req.ip()
    const useragent = req.headers['user-agent'];

    const devices = {
        "devices": {
            "os": os,
            "browser": browser,
            "ip": ip,
            "useragent": useragent,
        }
    }

    return JSON.stringify(devices);
}


export async function getLocation() {
    return "doesn't work yet. Iplement yourself looser"
}


