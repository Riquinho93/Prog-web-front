import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import {CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';

const categoriaRoutes: Routes = [
    { path: '', component: CategoriaListaComponent},
    { path: 'visualizar/:id', component: CategoriaFormularioComponent},
    { path: 'novo', component: CategoriaFormularioComponent},
    { path: 'alterar/:id', component: CategoriaFormularioComponent},
];


@NgModule({
    imports: [RouterModule.forChild(categoriaRoutes)],
    exports: [RouterModule]
  })

  export class CategoriaRouting {}