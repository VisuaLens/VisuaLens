// @ts-ignore
import app from '../index'
const uuid: any = require('uuid')
let Vcounter: number = 0


export function getIp(req: app.Request): string {
    return req.ip;
}

export function getDate(): any {

}

export function getSId() {
    const
}

export function getUId() {
    const UId: number = uuid.v4();
    return UId;
}

export function getVId() {
    Vcounter++
    return Vcounter
}
