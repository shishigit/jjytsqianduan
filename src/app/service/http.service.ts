import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";
import {http_juese, http_xitong, http_yonghu} from "./ctrl.jiekou";
import dengluRes = http_xitong.dengluRes;
import dengluReq = http_xitong.dengluReq;


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

    juese_chaxun(param: http_juese.chaxunReq)
    {
        return this.post<http_juese.chaxunRes>('/juese/chaxun', param)
    }

    yonghu_chaxun(req: http_yonghu.chaxunReq)
    {
        return this.post<http_yonghu.chaxunRes>('/yonghu/chaxun', req)
    }

    yonghu_chaxunjuese(req: http_yonghu.chaxunjueseReq)
    {
        return this.post<http_yonghu.chaxunjueseRes[]>('/yonghu/chaxunjuese', req)
    }

    yonghu_jihuo(req: http_yonghu.jihuoReq)
    {

        return this.post<http_yonghu.jihuoRes>('/yonghu/jihuo', req)
    }

    yonghu_shanchu(req: http_yonghu.shanchuReq)
    {
        return this.post<http_yonghu.shanchuRes>('/yonghu/shanchu', req)
    }

    yonghu_tianjia(req: http_yonghu.tianjiaReq)
    {
        return this.post<http_yonghu.tianjiaRes>('/yonghu/tianjia', req)
    }

    yonghu_xiugaijuese(param: http_yonghu.xiugaijueseReq)
    {
        return this.post<http_yonghu.xiugaijueseRes>('/yonghu/xiugaijuese', param)
    }
}
