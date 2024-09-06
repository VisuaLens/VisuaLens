// @ts-ignore
import app from '../index'
let Vcounter: number = 0


export function getIp(req: app.Request): string {
    return req.ip;
}

export function getDate(): any {

}

export function getSId() {

}

export function getUId() {

}

export function getVId() {
    Vcounter++
    return Vcounter
}