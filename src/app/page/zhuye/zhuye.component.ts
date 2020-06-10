import {Component, OnInit} from '@angular/core';
import {HoutaishujuService} from "../../service/houtaishuju.service";

@Component({
    selector: 'app-zhuye',
    templateUrl: './zhuye.component.html',
    styleUrls: ['./zhuye.component.css']
})
export class ZhuyeComponent implements OnInit
{

    constructor(
        readonly houtaishujuService: HoutaishujuService
    )
    {
    }

    ngOnInit(): void
    {

    }

    yijiliebiao()
    {
        return Object.keys(this.houtaishujuService.zuocecaidan)
    }

    erjiliebiao(yiji: string)
    {
        return Object.keys(this.houtaishujuService.zuocecaidan[yiji])
    }
}
