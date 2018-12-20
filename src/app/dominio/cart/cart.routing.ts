import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';

const cartRoutes: Routes = [

    { path: 'login', loadChildren: '../login/login.module#LoginModule'}
];


@NgModule({
    imports: [RouterModule.forChild(cartRoutes)],
    exports: [RouterModule]

    // imports: [RouterModule.forRoot(
    //     cartRoutes,
    //     { enableTracing: false }
    // )],
    // exports: [RouterModule]
  })

  export class CartRouting {}