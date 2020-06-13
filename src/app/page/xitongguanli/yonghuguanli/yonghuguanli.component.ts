import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";

@Component({
    selector: 'app-yonghuguanli',
    templateUrl: './yonghuguanli.component.html',
    styleUrls: ['./yonghuguanli.component.css']
})
export class YonghuguanliComponent implements OnInit, AfterViewInit
{
    biaogeshuju = [];

    constructor(
        readonly httpService: HttpService
    )
    {
        this.huoqushuju()
    }

    ngOnInit(): void
    {
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

    ngAfterViewInit(): void
    {
    }
}
