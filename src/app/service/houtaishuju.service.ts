import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HoutaishujuService
{
    set yongyoujiekous(ls: Array<any>)
    {
        sessionStorage.setItem('yongyoujiekous', JSON.stringify(ls))
    }

    get zuocecaidan()
    {
        let ls = {
            系统管理: {
                用户管理: {}
            }
        };

        (JSON.parse(sessionStorage.getItem('yongyoujiekous')) as Array<{
            id: number
            method: 'post' | 'get' | 'all'
            url: string
            fenzu: string
            shuoming: string
            qiyong: boolean
            jianquan: 'niming' | 'denglu' | 'jianquan'
        }>)
            .filter(value => value.jianquan === 'jianquan')
            .forEach(value =>
            {
                switch (value.url)
                {
                    case '/yonghu/tianjia':
                        ls.系统管理.用户管理[value.url] = value
                        break
                    default:
                        console.log('未处理的请求：', JSON.stringify(value))
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
