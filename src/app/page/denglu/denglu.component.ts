import {Component} from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
    selector: 'app-denglu',
    templateUrl: './denglu.component.html',
    styleUrls: ['./denglu.component.css']
})
export class DengluComponent
{
    constructor(
        private readonly httpService: HttpService
    )
    {
    }

    dengluxinxi = {
        zhanghao: '',
        mima: ''
    }

    denglu()
    {
        this.httpService.post('/xitong/denglu', this.dengluxinxi).subscribe()
    }
}
