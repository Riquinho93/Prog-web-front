import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { CartComponent } from './dominio/cart/cart.component';
import { LoginComponent } from './dominio/login/login.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'produto', loadChildren: './dominio/produto/produto.module#ProdutoModule'},
    { path: 'categoria', loadChildren: './dominio/categoria/categoria.module#CategoriaModule'},
    { path: 'modalidade', loadChildren: './dominio/modalidade/modalidade.module#ModalidadeModule'},
    { path: 'cart', component: CartComponent},
    { path: 'cart/login', loadChildren: './dominio/login/login.module#LoginModule'},
    { path: 'login', loadChildren: './dominio/login/login.module#LoginModule'}
];


@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    )],
    exports: [RouterModule]
  })

  export class AppRouting {}