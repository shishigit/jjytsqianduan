import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HoutaishujuService} from "../../service/houtaishuju.service";

@Component({
    selector: 'app-zhuye',
    templateUrl: './zhuye.component.html',
    styleUrls: ['./zhuye.component.css']
})
export class ZhuyeComponent implements OnInit
{
    @ViewChild("dynamicContainer", {read: ViewContainerRef}) container: ViewContainerRef;

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

    caidandianji(yiji: string, erji: string)
    {

    }

    tabs = ['Tab 1', 'Tab 2'];

    closeTab(tab: string): void
    {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
    }
}
