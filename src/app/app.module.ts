import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DengluComponent} from './page/denglu/denglu.component';
import {
    NZ_CONFIG,
    NzAvatarModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCheckboxModule,
    NzConfig,
    NzDividerModule,
    NzDrawerModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzNotificationModule,
    NzTableModule,
    NzTabsModule
} from "ng-zorro-antd";
import {NzCardModule} from 'ng-zorro-antd/card';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ZhuyeComponent} from './page/zhuye/zhuye.component';
import {YonghuguanliComponent} from './page/xitongguanli/yonghuguanli/yonghuguanli.component';
import {YeqianDirective} from './zujian/yeqian.directive';
import {CeshipageComponent} from './page/ceshipage/ceshipage.component';
import {TruefalsePipe} from './zujian/truefalse.pipe';
import {ChoutiComponent} from './zujian/chouti/chouti.component';
import {JueseguanliComponent} from './page/xitongguanli/jueseguanli/jueseguanli.component';
import {BumenguanliComponent} from './page/xitongguanli/bumenguanli/bumenguanli.component';

const ngZorroConfig: NzConfig = {
    table: {
        nzBordered: true,
        nzSimple: true
    }
};

@NgModule({
    declarations: [
        AppComponent,
        DengluComponent,
        ZhuyeComponent,
        YonghuguanliComponent,
        YeqianDirective,
        CeshipageComponent,
        TruefalsePipe,
        ChoutiComponent,
        JueseguanliComponent,
        BumenguanliComponent,
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
        NzTabsModule,
        NzTableModule,
        NzDividerModule,
        NzDrawerModule,
        NzFormModule,
        NzCheckboxModule
    ],
    providers: [{provide: NZ_CONFIG, useValue: ngZorroConfig}],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
