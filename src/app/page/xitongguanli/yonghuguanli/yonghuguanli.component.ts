import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";

@Component({
    selector: 'app-yonghuguanli',
    templateUrl: './yonghuguanli.component.html',
    styleUrls: ['./yonghuguanli.component.css']
})
export class YonghuguanliComponent implements OnInit
{
    biaogeshuju = [];
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
        this.httpService
            .post('/yonghu/chaxun', null)
            .subscribe(value =>
            {
                this.biaogeshuju = value[0]
            })
    }

    chuangjianyonghu()
    {
        this.xianshitianjia = true
    }
}
