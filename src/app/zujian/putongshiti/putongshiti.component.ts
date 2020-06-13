import {Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
    selector: 'app-putongshiti',
    templateUrl: './putongshiti.component.html',
    styleUrls: ['./putongshiti.component.css']
})
export class PutongshitiComponent implements OnInit
{
    // 是否显示添加按钮
    @Input() xianshiTianjiaAnniu: boolean = true

    // 查询数据的URL
    @Input() chaxunurl: string

    // 数据表头
    @Input() biaotoumoban: string[]

    // 数据表头
    @Input() shujumoban: string[]

    // 总条数
    zongshu: number;

    // 当前页码
    dangqianyema: number = 1;

    // 表格数据
    biaogeshuju = [];

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

    /**
     * 检查属性
     */
    shuxingok()
    {
        if (!this.chaxunurl)
        {
            console.error('没有设定查询URL')
            return false
        }
        return true
    }

    /**
     * 获取数据
     */
    huoqushuju()
    {
        this.httpService
            .post(this.chaxunurl, null)
            .subscribe(value =>
            {
                [this.biaogeshuju, this.zongshu] = value as any
                console.log(this.biaogeshuju)
            })
    }

    /**
     * 页码改变回调
     */
    yemagaibian()
    {
        this.huoqushuju()
    }
}
