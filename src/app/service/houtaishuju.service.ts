import {Injectable} from '@angular/core';
import {http_xitong} from "./http.jiekou";
import {YonghuguanliComponent} from "../page/xitongguanli/yonghuguanli/yonghuguanli.component";
import {JueseguanliComponent} from "../page/xitongguanli/jueseguanli/jueseguanli.component";
import denglu = http_xitong.dengluRes;

@Injectable({
    providedIn: 'root'
})
export class HoutaishujuService
{
    set yongyoujiekous(ls: Array<denglu>)
    {
        sessionStorage.setItem('yongyoujiekous', JSON.stringify(ls))
    }

    get zuocecaidan()
    {
        let ls = {
            系统管理: {
                用户管理: {
                    yemian: YonghuguanliComponent
                },
                角色管理: {
                    yemian: JueseguanliComponent
                },
            }
        };

        (JSON.parse(sessionStorage.getItem('yongyoujiekous')) as Array<denglu>)
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
                        ls.系统管理.用户管理[value.url] = value
                        break
                    case '/juese/chaxun':
                    case '/juese/jihuo':
                    case '/juese/tianjia':
                    case '/juese/xiugai':
                        ls.系统管理.角色管理[value.url] = value
                        break
                    default:
                        console.error('未处理的请求：', JSON.stringify(value))
                }
            })

        for (let yijikey in ls)
        {
            for (let erjikey in ls[yijikey])
            {
                if (!ls[yijikey].hasOwnProperty(erjikey)) continue;
                if (Object.keys(ls[yijikey][erjikey]).length === 0)
                {
                    delete ls[yijikey][erjikey]
                }
            }

            if (Object.keys(ls[yijikey]).length === 0)
            {
                delete ls[yijikey]
            }
        }

        return ls;
    }

    constructor()
    {
    }
}
