import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";
import {http_bumen, http_juese, http_xitong, http_yonghu} from "./http.jiekou";
import dengluRes = http_xitong.dengluRes;
import dengluReq = http_xitong.dengluReq;

@Injectable({
    providedIn: 'root'
})
export class HttpService
{
    private readonly houtai = '/houtai'

    constructor(
        private readonly httpClient: HttpClient,
        private notification: NzNotificationService
    )
    {
    }

    juese_chaxun(param: http_juese.chaxunReq)
    {
        return this.post<http_juese.chaxunRes>('/juese/chaxun', param)
    }

    juese_chaxunjiekou(param: http_juese.chaxunjiekouReq)
    {
        return this.post<http_juese.chaxunjiekouRes[]>('/juese/chaxunjiekou', param)
    }

    juese_jihuo(param: http_juese.jihuoReq)
    {
        return this.post<http_juese.jihuoRes>('/juese/jihuo', param)
    }

    juese_tianjia(param: http_juese.tianjiaReq)
    {
        return this.post<http_juese.tianjiaRes>('/juese/tianjia', param)
    }

    juese_xiugai(param: http_juese.xiugaiReq)
    {
        return this.post<http_juese.xiugaiRes>('/juese/xiugai', param)
    }

    xitong_denglu(req: dengluReq)
    {
        return this.post<dengluRes>('/xitong/denglu', req)
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

    yonghu_tianjia(req: http_yonghu.tianjiaReq)
    {
        return this.post<http_yonghu.tianjiaRes>('/yonghu/tianjia', req)
    }

    yonghu_xiugaijuese(param: http_yonghu.xiugaijueseReq)
    {
        return this.post<http_yonghu.xiugaijueseRes>('/yonghu/xiugaijuese', param)
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

    juese_xiugaijiekou(param: http_juese.xiugaijiekouReq)
    {
        return this.post<http_juese.xiugaijiekouRes>('/juese/xiugaijiekou', param)
    }

    xitong_huoququanxian(param: http_xitong.huoququanxianReq)
    {
        return this.post<http_xitong.huoququanxianRes[]>('/xitong/huoququanxian', param)
    }

    bumen_chaxun(param: http_bumen.chaxunReq)
    {
        return this.post<http_bumen.chaxunRes[]>('/bumen/chaxun', param)
    }

    bumen_tianjia(param: http_bumen.tianjiaReq)
    {
        return this.post<http_bumen.tianjiaRes>('/bumen/chaxun', param)
    }
}
