import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {yonghu} from "../../../service/ctrl.jiekou";
import chaxunReq = yonghu.chaxunReq;

@Component({
    selector: 'app-yonghuguanli',
    templateUrl: './yonghuguanli.component.html',
    styleUrls: ['./yonghuguanli.component.css']
})
export class YonghuguanliComponent implements OnInit
{
    chaxunxinxi: chaxunReq = {
        zhanghao: ''
    }

    tianjiaxinxi = {
        zhanghao: ''
    }

    biaogeshuju: chaxunReq[] = [];
    xianshitianjia = false

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
        this.httpService.yonghu_chaxun(this.chaxunxinxi)
            .subscribe(value =>
            {
                this.biaogeshuju = value.yonghu
            })
    }

    chuangjianyonghu()
    {
        this.xianshitianjia = true
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

    shangchu(id: number)
    {
        this.httpService
            .yonghu_shanchu({id})
            .subscribe(value =>
            {
                this.huoqushuju()
            })
    }
}
