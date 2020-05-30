import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DengluComponent} from "./page/denglu/denglu.component";
import {ZhuyeComponent} from "./page/zhuye/zhuye.component";

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
