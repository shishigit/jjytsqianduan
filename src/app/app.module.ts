import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DengluComponent} from './page/denglu/denglu.component';
import {
    NzAvatarModule, NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule, NzMenuModule,
    NzNotificationModule, NzTabsModule
} from "ng-zorro-antd";
import {NzCardModule} from 'ng-zorro-antd/card';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ZhuyeComponent } from './page/zhuye/zhuye.component';
import { YonghuguanliComponent } from './page/xitongguanli/yonghuguanli/yonghuguanli.component';

@NgModule({
    declarations: [
        AppComponent,
        DengluComponent,
        ZhuyeComponent,
        YonghuguanliComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NzButtonModule,
        NzCardModule,
        NzAvatarModule,
        NzIconModule,
        NzInputModule,
        FormsModule,
        NzNotificationModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzMenuModule,
        NzTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
