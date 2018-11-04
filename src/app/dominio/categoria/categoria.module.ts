import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CategoriaRouting } from './categoria.routing';
import { CategoriaService } from './categoria.service';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';


@NgModule({
    declarations: [
        CategoriaListaComponent,
        CategoriaFormularioComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        CategoriaRouting
    ],
    providers: [
        // Serviços
        CategoriaService
    ]
})

export class CategoriaModule { }