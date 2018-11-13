import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { CartComponent } from './dominio/cart/cart.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'produto', loadChildren: './dominio/produto/produto.module#ProdutoModule'},
    { path: 'categoria', loadChildren: './dominio/categoria/categoria.module#CategoriaModule'},
    { path: 'cart', component: CartComponent}
];



@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    )],
    exports: [RouterModule]
  })

  export class AppRouting {}