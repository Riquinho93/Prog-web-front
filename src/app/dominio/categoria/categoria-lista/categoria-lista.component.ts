import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from '../categoria';
import { CategoriaService } from '../../categoria/categoria.service';

@Component({
  selector: 'categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

    categorias: Categoria[];
    teste: string = "valor da variavel";

    constructor(
      private categoriaService: CategoriaService,
      private router: Router
    ){}

    ngOnInit() {
        
      this.categoriaService.buscarTodos()
      .subscribe(resposta => {
        this.categorias = resposta
      });

    }

    excluir(categoriaId: number, index: number) {
      this.categoriaService.excluir(categoriaId)
      .subscribe(resposta => {

        this.categorias.splice(index, 1);

        console.log("categoria excluído com sucesso");
        
        // retorna para a lista
        this.router.navigate(['/categoria']);
      } );
    }

}