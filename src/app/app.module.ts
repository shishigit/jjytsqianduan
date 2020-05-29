import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DengluComponent} from './page/denglu/denglu.component';
import {NzAvatarModule, NzButtonModule, NzIconModule, NzInputModule} from "ng-zorro-antd";
import {NzCardModule} from 'ng-zorro-antd/card';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        DengluComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzButtonModule, NzCardModule, NzAvatarModule, NzIconModule, NzInputModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
