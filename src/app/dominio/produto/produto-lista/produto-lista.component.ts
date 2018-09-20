import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../../produto/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

    produtos: Produto[];
    teste: string = "valor da variavel";

    constructor(
      private produtoService: ProdutoService,
      private router: Router
    ){}

    ngOnInit() {
        
      this.produtoService.buscarTodos()
      .subscribe(resposta => {
        console.log(resposta)
        this.produtos = resposta
      });

    }

    excluir(produtoId: number) {
      this.produtoService.excluir(produtoId)
      .subscribe(resposta => {
        console.log("Produto excluído com sucesso");
        // retorna para a lista
        this.router.navigate(['/produto']);
      } );
    }

}
