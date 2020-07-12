import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {http_juese} from "../../../service/http.jiekou";

@Component({
    selector: 'app-jueseguanli',
    templateUrl: './jueseguanli.component.html',
    styleUrls: ['./jueseguanli.component.css']
})
export class JueseguanliComponent implements OnInit
{

    biaogeshuju: http_juese.chaxunRes = {
        juese: [],
        zongshu: 0
    };
    chaxunxinxi: http_juese.chaxunReq = {
        mingcheng: ''
    }
    jiekouqingkuang: http_juese.chaxunjiekouRes[] = []
    shezhijiekoujueseid: number
    tianjiaxinxi = {
        mingcheng: '',
        shuoming: ''
    }
    xianshijiekou = false
    xianshitianjia = false

    constructor(
        readonly httpService: HttpService
    )
    {
    }

    huoqushuju()
    {
        this.httpService.juese_chaxun(this.chaxunxinxi)
            .subscribe(value =>
            {
                this.biaogeshuju = value
            })
    }

    jihuogaibian(id: number, jihuo: boolean)
    {
        this.httpService.juese_jihuo({id, jihuo: !jihuo})
            .subscribe(() =>
            {
                this.huoqushuju()
            })
    }

    jiekougaibian(id: number, yongyou: boolean)
    {
        this.httpService.yonghu_xiugaijuese({
            yonghuid: this.shezhijiekoujueseid,
            yongyou: !yongyou,
            jueseid: id
        }).subscribe()
    }


    ngOnInit(): void
    {
        this.huoqushuju()
    }

    quedingtianjian()
    {
        if (this.tianjiaxinxi['id'])
            this.httpService.juese_xiugai(this.tianjiaxinxi as any)
                .subscribe(() =>
                {
                    this.huoqushuju()
                    this.xianshitianjia = false
                    this.tianjiaxinxi = {
                        mingcheng: '',
                        shuoming: ''
                    }
                })
        else
            this.httpService.juese_tianjia(this.tianjiaxinxi)
                .subscribe(() =>
                {
                    this.huoqushuju()
                    this.xianshitianjia = false
                    this.tianjiaxinxi = {
                        mingcheng: '',
                        shuoming: ''
                    }
                })
    }

    quxiaotianjia()
    {
        this.xianshitianjia = false
        this.tianjiaxinxi = {
            shuoming: '',
            mingcheng: ''
        }
    }

    shezhijiekou(id: number)
    {
        this.httpService.juese_chaxunjiekou({id})
            .subscribe(value =>
            {
                this.shezhijiekoujueseid = id
                this.jiekouqingkuang = value
                this.xianshijiekou = true
            })
    }

    xiugaijuese(id: any)
    {
        let juese = this.biaogeshuju.juese.filter(value => value.id === id).pop()
        this.tianjiaxinxi = {...juese}
        this.xianshitianjia = true
    }
}
