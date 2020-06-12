import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DengluComponent} from "./page/denglu/denglu.component";
import {ZhuyeComponent} from "./page/zhuye/zhuye.component";
import {CeshipageComponent} from "./page/ceshipage/ceshipage.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'denglu'
    },
    {
        path: 'denglu',
        component: DengluComponent
    },
    {
        path: 'zhuye',
        component: ZhuyeComponent
    },
    {
        path: 'ceshipage',
        component: CeshipageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
