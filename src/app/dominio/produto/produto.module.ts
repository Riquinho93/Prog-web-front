import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProdutoRouting } from './produto.routing';
import { ProdutoService } from './produto.service';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { CategoriaService } from '../categoria/categoria.service';
import { ModalidadeService } from '../modalidade/modalidade.service';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { CarrinhoService } from '../carrinho/carrinho.service';


@NgModule({
    declarations: [
        ProdutoListaComponent,
        ProdutoFormularioComponent,
        ItemListaComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        ProdutoRouting
    ],
    providers: [
        // Serviços
        ProdutoService,
        CategoriaService,
        ModalidadeService
    ]
})

export class ProdutoModule { }