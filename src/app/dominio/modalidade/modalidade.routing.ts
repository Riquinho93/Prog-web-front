import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ModalidadeListaComponent } from './modalidade-lista/modalidade-lista.component';
import {ModalidadeFormularioComponent } from './modalidade-formulario/modalidade-formulario.component';

const modalidadeRoutes: Routes = [
    { path: '', component: ModalidadeListaComponent},
    { path: 'visualizar/:id', component: ModalidadeFormularioComponent},
    { path: 'novo', component: ModalidadeFormularioComponent},
    { path: 'alterar/:id', component: ModalidadeFormularioComponent},
];


@NgModule({
    imports: [RouterModule.forChild(modalidadeRoutes)],
    exports: [RouterModule]
  })

  export class ModalidadeRouting {}