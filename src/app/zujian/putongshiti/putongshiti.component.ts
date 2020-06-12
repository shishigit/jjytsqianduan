import {Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
    selector: 'app-putongshiti',
    templateUrl: './putongshiti.component.html',
    styleUrls: ['./putongshiti.component.css']
})
export class PutongshitiComponent implements OnInit
{
    listOfData = [
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

    @Input() xianshiTianjiaAnniu: boolean = true
    @Input() chaxunurl: string

    constructor(
        private readonly httpService: HttpService,
    )
    {
    }

    ngOnInit(): void
    {
        if (!this.shuxingok()) return
        this.huoqushuju()
    }

    shuxingok()
    {
        if (!this.chaxunurl)
        {
            console.error('没有设定查询URL')
            return false
        }
        return true
    }

    huoqushuju()
    {
        this.httpService
            .post(this.chaxunurl, null)
            .subscribe(value =>
            {
                console.log(value)
            })
    }
}
