import {Injectable} from '@angular/core';
import {http_xitong} from "./http.jiekou";
import dengluRes = http_xitong.dengluRes;

const sessionStorageKey = {}

@Injectable({
    providedIn: 'root'
})
export class HoutaishujuService
{
    yongyoujiekous: Array<dengluRes> = [];

    constructor()
    {
    }
}
