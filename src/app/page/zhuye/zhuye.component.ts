import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HoutaishujuService} from "../../service/houtaishuju.service";
import {YonghuguanliComponent} from "../xitongguanli/yonghuguanli/yonghuguanli.component";

@Component({
    selector: 'app-zhuye',
    templateUrl: './zhuye.component.html',
    styleUrls: ['./zhuye.component.css']
})
export class ZhuyeComponent implements OnInit
{
    @ViewChild("ceshi", {static: true, read: ViewContainerRef}) container: ViewContainerRef;

    constructor(
        readonly houtaishujuService: HoutaishujuService,
        private readonly factoryResolver: ComponentFactoryResolver
    )
    {
    }

    ngOnInit(): void
    {
        let ls = this.factoryResolver.resolveComponentFactory(YonghuguanliComponent)
        let ls1 = this.container.createComponent(ls)
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
}
