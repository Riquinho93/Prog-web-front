import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ModalidadeRouting } from './modalidade.routing';
import { ModalidadeService } from './modalidade.service';
import { ModalidadeListaComponent } from './modalidade-lista/modalidade-lista.component';
import { ModalidadeFormularioComponent } from './modalidade-formulario/modalidade-formulario.component';


@NgModule({
    declarations: [
        ModalidadeListaComponent,
        ModalidadeFormularioComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        ModalidadeRouting
    ],
    providers: [
        // Serviços
        ModalidadeService
    ]
})

export class ModalidadeModule { }