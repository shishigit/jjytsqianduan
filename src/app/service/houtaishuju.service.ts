import {Injectable} from '@angular/core';
import {http_xitong} from "./http.jiekou";
import {YonghuguanliComponent} from "../page/xitongguanli/yonghuguanli/yonghuguanli.component";
import {JueseguanliComponent} from "../page/xitongguanli/jueseguanli/jueseguanli.component";
import {BumenguanliComponent} from "../page/xitongguanli/bumenguanli/bumenguanli.component";
import dengluRes = http_xitong.dengluRes;

const sessionStorageKey = {
    yongyoujiekous: 'yongyoujiekous'
}
const yemianurl = {
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
            ]
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
            ]
        },
        部门管理: {
            yemian: BumenguanliComponent,
            url: ['/bumen/chaxun',]
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
            .forEach(value =>
            {
                switch (value.url)
                {
                    case '/yonghu/tianjia':
                    case '/yonghu/chaxun':
                    case '/yonghu/jihuo':
                    case '/yonghu/shanchu':
                    case '/yonghu/xiugaijuese':
                    case '/yonghu/chaxunjuese':
                        yemianurl.系统管理.用户管理[value.url] = value
                        break
                    case '/juese/chaxun':
                    case '/juese/jihuo':
                    case '/juese/tianjia':
                    case '/juese/xiugai':
                    case '/juese/xiugaijiekou':
                    case '/juese/chaxunjiekou':
                        yemianurl.系统管理.角色管理[value.url] = value
                        break
                    case '/bumen/chaxun':
                        yemianurl.系统管理.部门管理[value.url] = value
                        break
                    default:
                        console.error('未处理的请求：', JSON.stringify(value))
                }
            })

        for (let yijikey in yemianurl)
        {
            for (let erjikey in yemianurl[yijikey])
            {
                if (!yemianurl[yijikey].hasOwnProperty(erjikey)) continue;
                if (Object.keys(yemianurl[yijikey][erjikey]).length === 0)
                {
                    delete yemianurl[yijikey][erjikey]
                }
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
