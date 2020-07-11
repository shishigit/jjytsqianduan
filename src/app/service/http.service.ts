import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";
import {xitong, yonghu} from "./ctrl.jiekou";
import tianjia = yonghu.tianjia;
import jihuo = yonghu.jihuo;
import chaxun = yonghu.chaxun;


@Injectable({
    providedIn: 'root'
})
export class HttpService
{
    constructor(
        private readonly httpClient: HttpClient,
        private notification: NzNotificationService
    )
    {
    }

    private readonly houtai = '/houtai'


    private post<T>(url: string, body: any | null)
    {
        return this.httpClient
            .post<T>(this.houtai + url, body)
            .pipe(
                catchError(err =>
                {
                    if (err instanceof HttpErrorResponse)
                    {
                        if (err.status === 600)
                        {
                            this.notification.info('提示', err.error)
                            throw err
                        }
                    }
                    throw err
                })
            )
    }

    xitong_denglu(dengluxinxi: { mima: string; zhanghao: string })
    {
        return this.post<xitong.denglu>('/xitong/denglu', dengluxinxi)
    }

    yonghu_chaxun()
    {
        return this.post<chaxun>('/yonghu/chaxun', null)
    }

    yonghu_jihuo(param: { jihuo: boolean; id: number })
    {

        return this.post<jihuo>('/yonghu/jihuo', param)
    }

    yonghu_tianjia(tianjiaxinxi: { zhanghao: string })
    {
        return this.post<tianjia>('/yonghu/tianjia', tianjiaxinxi)
    }
}
