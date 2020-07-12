import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {http_juese, http_yonghu} from "../../../service/http.jiekou";

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
        zhanghao: ''
    }
    jueseqingkuang: http_yonghu.chaxunjueseRes[] = []
    shezhijueseyonghuid: number
    tianjiaxinxi = {
        zhanghao: ''
    }
    xianshijuese = false
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
        this.httpService.yonghu_jihuo({id, jihuo: !jihuo}).subscribe()
    }

    juesegaibian(id: number, yongyou: boolean)
    {
        this.httpService.yonghu_xiugaijuese({
            yonghuid: this.shezhijueseyonghuid,
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
        this.httpService.yonghu_tianjia(this.tianjiaxinxi)
            .subscribe(() =>
            {
                this.huoqushuju()
                this.xianshitianjia = false
                this.tianjiaxinxi = {
                    zhanghao: ''
                }
            })
    }

    quxiaotianjia()
    {
        this.xianshitianjia = false
        this.tianjiaxinxi = {
            zhanghao: ''
        }
    }

    shezhijuese(id: number)
    {
        this.httpService.yonghu_chaxunjuese({id})
            .subscribe(value =>
            {
                this.shezhijueseyonghuid = id
                this.jueseqingkuang = value
                this.xianshijuese = true
            })
    }

}
