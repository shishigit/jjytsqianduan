import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";
import {xitong, yonghu} from "./ctrl.jiekou";
import tianjiaRes = yonghu.tianjiaRes;
import jihuoRes = yonghu.jihuoRes;
import chaxunRes = yonghu.chaxunRes;
import dengluRes = xitong.dengluRes;
import tianjiaReq = yonghu.tianjiaReq;
import jihuoReq = yonghu.jihuoReq;
import chaxunReq = yonghu.chaxunReq;
import dengluReq = xitong.dengluReq;
import shanchuReq = yonghu.shangchuReq;
import shanchuRes = yonghu.shangchuRes;


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

    xitong_denglu(req: dengluReq)
    {
        return this.post<dengluRes[]>('/xitong/denglu', req)
    }

    yonghu_chaxun(req: chaxunReq)
    {
        return this.post<chaxunRes>('/yonghu/chaxun', req)
    }

    yonghu_jihuo(req: jihuoReq)
    {

        return this.post<jihuoRes>('/yonghu/jihuo', req)
    }

    yonghu_tianjia(req: tianjiaReq)
    {
        return this.post<tianjiaRes>('/yonghu/tianjia', req)
    }

    yonghu_shanchu(req: shanchuReq)
    {
        return this.post<shanchuRes>('/yonghu/shanchu', req)
    }
}
