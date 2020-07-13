import {Component} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
    selector: 'app-denglu',
    templateUrl: './denglu.component.html',
    styleUrls: ['./denglu.component.css']
})
export class DengluComponent
{
    constructor(
        private readonly httpService: HttpService,
        private readonly route: Router,
    )
    {
    }

    dengluxinxi = {
        zhanghao: 'admin',
        mima: environment.production ? '' : 'mima'
    }

    denglu()
    {
        this.httpService.xitong_denglu(this.dengluxinxi)
            .subscribe(async () => await this.route.navigateByUrl('zhuye'))
    }
}
