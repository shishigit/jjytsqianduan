import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpService
{
    constructor(private readonly httpClient: HttpClient)
    {
    }

    post(url: string, body: any)
    {
        return this.httpClient.post(url, body)
    }
}
