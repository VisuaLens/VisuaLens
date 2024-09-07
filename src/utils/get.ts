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

export function getDevice(req: app.Request) {
    const os = req.userAgent?.os || "unknown";
    const browser = req.userAgent?.browser || "unknown";
    const ip = req.ip || "unknown";
    const useragent = req.userAgent?.useragent || "unknown";

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
