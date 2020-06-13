import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    OnInit,
    QueryList,
    ViewChildren
} from '@angular/core';
import {HoutaishujuService} from "../../service/houtaishuju.service";
import {YonghuguanliComponent} from "../xitongguanli/yonghuguanli/yonghuguanli.component";
import {YeqianDirective} from "../../zujian/yeqian.directive";

@Component({
    selector: 'app-zhuye',
    templateUrl: './zhuye.component.html',
    styleUrls: ['./zhuye.component.css']
})
export class ZhuyeComponent implements AfterViewInit
{
    @ViewChildren(YeqianDirective) yeqianDirectives: QueryList<YeqianDirective>;
    yeqianshuju: { zujian: ComponentRef<any>, biaoti: string, leixing: any }[] = []
    dangqianyeqian: number;

    constructor(
        readonly houtaishujuService: HoutaishujuService,
        private readonly factoryResolver: ComponentFactoryResolver
    )
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
        let zujian = null
        switch (yiji + erji)
        {
            case '系统管理用户管理':
                zujian = YonghuguanliComponent
                break
            default:
                console.error('未处理的页签点击:' + yiji + erji)
                return
        }

        let yiyou = this.yeqianshuju
            .map((value, index) =>
            {
                return {
                    index,
                    name: value.leixing.name
                }
            })
            .filter(value => value.name === zujian.name)
            .pop();

        if (yiyou)
        {
            this.dangqianyeqian = yiyou.index
            return;
        }

        this.yeqianshuju.push({
            biaoti: erji,
            zujian: null,
            leixing: YonghuguanliComponent
        })
    }

    ngAfterViewInit(): void
    {
        this.yeqianDirectives.changes.subscribe(() =>
        {
            this.yeqianshuju.forEach(value =>
            {
                if (!value.zujian)
                {
                    let timeout = setTimeout(() =>
                    {
                        let ls = this.factoryResolver.resolveComponentFactory(value.leixing)
                        value.zujian = this.yeqianDirectives.last.viewContainerRef.createComponent(ls)
                        clearTimeout(timeout)
                    })
                }
            })
        })
    }

    guanbiyeqian(ls: number)
    {
        this.yeqianshuju[ls].zujian.destroy();
        this.yeqianshuju.splice(ls, 1)
    }
}
