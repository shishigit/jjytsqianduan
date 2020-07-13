import {Injectable} from '@angular/core';
import {http_xitong} from "./http.jiekou";
import {YonghuguanliComponent} from "../page/xitongguanli/yonghuguanli/yonghuguanli.component";
import {JueseguanliComponent} from "../page/xitongguanli/jueseguanli/jueseguanli.component";
import {BumenguanliComponent} from "../page/xitongguanli/bumenguanli/bumenguanli.component";
import dengluRes = http_xitong.dengluRes;

const sessionStorageKey = {
    yongyoujiekous: 'yongyoujiekous'
}

const yemianurl: {
    [key: string]: {
        [key: string]: {
            yemian: any,
            url: string[],
            xianshi: boolean
        }
    }
} = {
    系统管理: {
        用户管理: {
            yemian: YonghuguanliComponent,
            url: [
                '/yonghu/tianjia',
                '/yonghu/chaxun',
                '/yonghu/jihuo',
                '/yonghu/shanchu',
                '/yonghu/xiugaijuese',
                '/yonghu/chaxunjuese',
            ],
            xianshi: false
        },
        角色管理: {
            yemian: JueseguanliComponent,
            url: [
                '/juese/chaxun',
                '/juese/jihuo',
                '/juese/tianjia',
                '/juese/xiugai',
                '/juese/xiugaijiekou',
                '/juese/chaxunjiekou',
            ],
            xianshi: false
        },
        部门管理: {
            yemian: BumenguanliComponent,
            url: ['/bumen/chaxun',],
            xianshi: false
        },
    }
};

@Injectable({
    providedIn: 'root'
})
export class HoutaishujuService
{
    set yongyoujiekous(ls: Array<dengluRes>)
    {
        sessionStorage.setItem(sessionStorageKey.yongyoujiekous, JSON.stringify(ls))
    }

    get zuocecaidan()
    {
        (JSON.parse(sessionStorage.getItem(sessionStorageKey.yongyoujiekous)) as Array<dengluRes>)
            .filter(value => value.jianquan === 'jianquan')
            .map(value => value.url)
            .forEach(value =>
            {
                for (let yijikey in yemianurl)
                {
                    for (let erjikey in yemianurl[yijikey])
                    {
                        if (!yemianurl[yijikey].hasOwnProperty(erjikey)) continue;
                        let ls = yemianurl[yijikey][erjikey]
                        if (ls.url.includes(value)) ls.xianshi = true
                    }
                }
            })

        for (let yijikey in yemianurl)
        {
            for (let erjikey in yemianurl[yijikey])
            {
                if (!yemianurl[yijikey].hasOwnProperty(erjikey)) continue;
                if (!yemianurl[yijikey][erjikey].xianshi) delete yemianurl[yijikey][erjikey]
            }

            if (Object.keys(yemianurl[yijikey]).length === 0)
            {
                delete yemianurl[yijikey]
            }
        }

        return yemianurl;
    }

    constructor()
    {
    }
}
