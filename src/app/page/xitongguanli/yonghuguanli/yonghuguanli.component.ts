import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {http_yonghu} from "../../../service/http.jiekou";

@Component({
    selector: 'app-yonghuguanli',
    templateUrl: './yonghuguanli.component.html',
    styleUrls: ['./yonghuguanli.component.css']
})
export class YonghuguanliComponent implements OnInit
{
    biaogeshuju: http_yonghu.chaxunRes = {yonghu: [], zongshu: 0};

    tianjiaxinxi = {
        zhanghao: ''
    }
    chaxunxinxi = {
        zhanghao: ''
    }

    xianshitianjia = false
    dangqianyema = 1
    jueseqingkuang: http_yonghu.chaxunjueseRes[] = []
    shezhijueseyonghuid: number
    xianshijuese = false

    constructor(
        readonly httpService: HttpService
    )
    {
    }

    ngOnInit(): void
    {
        this.huoqushuju()
    }

    huoqushuju()
    {
        this.httpService.yonghu_chaxun(
            {
                zhanghao: this.chaxunxinxi.zhanghao,
                pageindex: this.dangqianyema
            })
            .subscribe(value =>
            {
                this.biaogeshuju = value
            })
    }


    jihuogaibian(id: number, jihuo: boolean)
    {
        this.httpService.yonghu_jihuo({id, jihuo: !jihuo}).subscribe()
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

    juesegaibian(id: number, yongyou: boolean)
    {
        this.httpService.yonghu_xiugaijuese({
            yonghuid: this.shezhijueseyonghuid,
            yongyou: !yongyou,
            jueseid: id
        }).subscribe()
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
