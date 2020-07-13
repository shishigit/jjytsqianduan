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
import {YeqianDirective} from "../../zujian/yeqian.directive";
import {YonghuguanliComponent} from "../xitongguanli/yonghuguanli/yonghuguanli.component";
import {JueseguanliComponent} from "../xitongguanli/jueseguanli/jueseguanli.component";
import {BumenguanliComponent} from "../xitongguanli/bumenguanli/bumenguanli.component";


@Component({
    selector: 'app-zhuye',
    templateUrl: './zhuye.component.html',
    styleUrls: ['./zhuye.component.css']
})
export class ZhuyeComponent implements AfterViewInit, OnInit
{
    @ViewChildren(YeqianDirective) yeqianDirectives: QueryList<YeqianDirective>;
    yeqianshuju: { zujian: ComponentRef<any>, biaoti: string, leixing: any }[] = []
    dangqianyeqian: number;
    yemianurl: {
        [key: string]: {
            [key: string]: {
                yemian: any,
                url: string[],
                xianshi: boolean
            }
        }
    } = {
        系统管理: {
            用户管理: {
                yemian: YonghuguanliComponent,
                url: [
                    '/yonghu/tianjia',
                    '/yonghu/chaxun',
                    '/yonghu/jihuo',
                    '/yonghu/shanchu',
                    '/yonghu/xiugaijuese',
                    '/yonghu/chaxunjuese',
                ],
                xianshi: false
            },
            角色管理: {
                yemian: JueseguanliComponent,
                url: [
                    '/juese/chaxun',
                    '/juese/jihuo',
                    '/juese/tianjia',
                    '/juese/xiugai',
                    '/juese/xiugaijiekou',
                    '/juese/chaxunjiekou',
                ],
                xianshi: false
            },
            部门管理: {
                yemian: BumenguanliComponent,
                url: ['/bumen/chaxun',],
                xianshi: false
            },
        }
    };
    yijiliebiao: string[] = []

    constructor(
        readonly houtaishujuService: HoutaishujuService,
        private readonly factoryResolver: ComponentFactoryResolver
    )
    {
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
        return Object.keys(this.yemianurl[yiji])
            .map(value =>
            {
                return {
                    biaoqian: value,
                    yemian: this.yemianurl[yiji][value].yemian
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

    chulicaidan()
    {
        this.houtaishujuService.yongyoujiekous
            .filter(value => value.jianquan === 'jianquan')
            .map(value => value.url)
            .forEach(value =>
            {
                for (let yijikey in this.yemianurl)
                {
                    for (let erjikey in this.yemianurl[yijikey])
                    {
                        if (!this.yemianurl[yijikey].hasOwnProperty(erjikey)) continue;
                        let ls = this.yemianurl[yijikey][erjikey]
                        if (ls.url.includes(value)) ls.xianshi = true
                    }
                }
            })

        for (let yijikey in this.yemianurl)
        {
            for (let erjikey in this.yemianurl[yijikey])
            {
                if (!this.yemianurl[yijikey].hasOwnProperty(erjikey)) continue;
                if (!this.yemianurl[yijikey][erjikey].xianshi) delete this.yemianurl[yijikey][erjikey]
            }

            if (Object.keys(this.yemianurl[yijikey]).length === 0)
            {
                delete this.yemianurl[yijikey]
            }
        }

        this.yijiliebiao = Object.keys(this.yemianurl)

    }

    ngOnInit(): void
    {
        this.chulicaidan()
    }
}
