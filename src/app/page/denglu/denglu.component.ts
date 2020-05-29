import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-denglu',
    templateUrl: './denglu.component.html',
    styleUrls: ['./denglu.component.css']
})
export class DengluComponent implements OnInit
{
    dengluxinxi = {
        zhanghao: '',
        mima: ''
    }

    constructor()
    {
    }

    ngOnInit(): void
    {
    }

}
