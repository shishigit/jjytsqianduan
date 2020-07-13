import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {http_bumen} from "../../../service/http.jiekou";

@Component({
    selector: 'app-bumenguanli',
    templateUrl: './bumenguanli.component.html',
    styleUrls: ['./bumenguanli.component.css']
})
export class BumenguanliComponent implements OnInit
{
    chaxunxinxi = {
        mingcheng: ''
    }

    tianjiaxinxi: http_bumen.tianjiaReq = {
        mingcheng: '',
        beizhu: ''
    }

    xianshitianjia = false
    biaogeshuju = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];

    constructor(
        private httpService: HttpService
    )
    {
    }

    ngOnInit(): void
    {
        this.huoqushuju()
    }

    huoqushuju()
    {
        this.httpService.bumen_chaxun({}).subscribe(value =>
        {
            //todo
        })
    }

    quedingtianjian()
    {
        this.httpService.bumen_tianjia(this.tianjiaxinxi)
            .subscribe(value =>
            {
                this.xianshitianjia = false
                this.huoqushuju()
            })
    }

    quxiaotianjia()
    {
        this.xianshitianjia = false
    }
}
