import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";
import tianjia = yonghu.tianjia;


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

    yonghu_tianjia(tianjiaxinxi: { zhanghao: string })
    {
        return this.post<tianjia>('/yonghu/tianjia', tianjiaxinxi)
    }

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
}
