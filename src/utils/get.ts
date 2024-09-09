// @ts-ignore
import app from '../index'
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

export async function getDevice(req: app.Request, res: app.Response) {

    const userAgent = req.headers['user-agent'];
    let os: any = 'Unknown'
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

    const response = (res)

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

    const ip = req.ip()
    const useragent = req.headers['user-agent'];

    const devices = {
        "devices": {
            "os": os,
            "browser": browser,
            "ip": ip,
            "useragent": useragent,
        }
    }

    console.log(devices)
    return JSON.stringify(devices);
}


