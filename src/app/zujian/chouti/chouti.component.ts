import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-chouti',
    templateUrl: './chouti.component.html',
    styleUrls: ['./chouti.component.css']
})
export class ChoutiComponent implements OnInit
{
    // 显示与否
    @Input() xianshiyufou: boolean = false

    // 标题
    @Input() biaoti: string = '默认标题'

    // 宽度
    @Input() kuandu: number = 300

    // 确定点击
    @Output() quedingdianji = new EventEmitter()

    // 取消点击
    @Output() quxiaodianji = new EventEmitter()

    // 是否显示取消按钮
    @Input() xianshiquxiao = true

    constructor()
    {
    }

    ngOnInit(): void
    {
    }
}
