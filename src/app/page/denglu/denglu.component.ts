import {Component} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {HoutaishujuService} from "../../service/houtaishuju.service";

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
        private readonly houtaishujuService: HoutaishujuService
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
            .subscribe(async value =>
            {
                this.houtaishujuService.yongyoujiekous = value
                await this.route.navigateByUrl('zhuye')
            })
    }
}
