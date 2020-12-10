import { Route } from '@angular/compiler/src/core'
import {NgModule} from '@angular/core'
import {Routes,RouterModule, ROUTES} from '@angular/router'

const routes :Routes = [
    {
        path:'home',
        loadChildren:() => import ('./modules/guest/guest.module').then(m => m.GuestModule)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    },
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RoutesModule {}