import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { ItemListaComponent } from './item-lista/item-lista.component';


const produtoRoutes: Routes = [
    { path: '', component: ProdutoListaComponent},
   { path: 'lista', component: ItemListaComponent},
    { path: 'visualizar/:id', component: ProdutoFormularioComponent},
    { path: 'novo', component: ProdutoFormularioComponent},
    { path: 'alterar/:id', component: ProdutoFormularioComponent},
    { path: 'modalidade/:modalidadeId', component: ItemListaComponent},
];


@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
  })

  export class ProdutoRouting {}