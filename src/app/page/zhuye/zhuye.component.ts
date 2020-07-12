import {AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, QueryList, ViewChildren} from '@angular/core';
import {HoutaishujuService} from "../../service/houtaishuju.service";
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

    caidandianji(erji: { biaoqian: string, yemian: any })
    {
        let yiyou = this.yeqianshuju
            .map((value, index) =>
            {
                return {
                    index,
                    name: value.zujian.componentType.name
                }
            })
            .filter(value => value.name === erji.yemian.name)
            .pop();


        if (yiyou)
        {
            this.dangqianyeqian = yiyou.index
            return;
        }

        this.yeqianshuju.push({
            biaoti: erji.biaoqian,
            zujian: null,
            leixing: erji.yemian
        })

        this.dangqianyeqian = this.yeqianshuju.length
    }

    erjiliebiao(yiji: string)
    {
        return Object.keys(this.houtaishujuService.zuocecaidan[yiji])
            .map(value =>
            {
                return {
                    biaoqian: value,
                    yemian: this.houtaishujuService.zuocecaidan[yiji][value].yemian
                }
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
