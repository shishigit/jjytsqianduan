import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, tap} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";

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

    post(url: string, body: any)
    {
        return this.httpClient
            .post(this.houtai + url, body)
            .pipe(
                tap<Response>(x =>
                {
                    if (x.status === 600)
                    {
                        this.notification.info(
                            '提示',
                            'dddddddddd'
                        )
                    }
                }),
                filter<Response>(value => value.status !== 600)
            )
    }
}
