import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";
import {juese, xitong, yonghu} from "./ctrl.jiekou";
import dengluRes = xitong.dengluRes;
import dengluReq = xitong.dengluReq;


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

    juese_chaxun(param: juese.chaxunReq)
    {
        return this.post<juese.chaxunRes>('/juese/chaxun', param)
    }

    yonghu_chaxun(req: yonghu.chaxunReq)
    {
        return this.post<yonghu.chaxunRes>('/yonghu/chaxun', req)
    }

    yonghu_chaxunjuese(req: yonghu.chaxunjueseReq)
    {
        return this.post<yonghu.chaxunjueseRes[]>('/yonghu/chaxunjuese', req)
    }

    yonghu_jihuo(req: yonghu.jihuoReq)
    {

        return this.post<yonghu.jihuoRes>('/yonghu/jihuo', req)
    }

    yonghu_shanchu(req: yonghu.shanchuReq)
    {
        return this.post<yonghu.shanchuRes>('/yonghu/shanchu', req)
    }

    yonghu_tianjia(req: yonghu.tianjiaReq)
    {
        return this.post<yonghu.tianjiaRes>('/yonghu/tianjia', req)
    }

    yonghu_xiugaijuese(param: yonghu.xiugaijueseReq)
    {
        return this.post<yonghu.xiugaijueseRes>('/yonghu/xiugaijuese', param)
    }
}
