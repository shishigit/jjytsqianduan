import {Component} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {environment} from "../../../environments/environment";

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
        zhanghao: 'admin',
        mima: environment.production ? '' : 'mima'
    }

    denglu()
    {
        this.httpService.post('/xitong/denglu', this.dengluxinxi)
            .subscribe(value =>
            {
                console.log(value)
            })
    }
}
