import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HoutaishujuService
{
    yongyoujiekous: Array<{
        id: number
        method: 'post' | 'get' | 'all'
        url: string
        fenzu: string
        shuoming: string
        qiyong: boolean
        jianquan: 'niming' | 'denglu' | 'jianquan'
    }>

    constructor()
    {
    }
}
