import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DengluComponent} from "./page/denglu/denglu.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'denglu'
    },
    {
        path: 'denglu',
        component: DengluComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
