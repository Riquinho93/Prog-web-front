import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';
import { Categoria } from '../categoria/categoria';
import { CategoriaService } from '../categoria/categoria.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { ProdutoCarrinho } from '../produto/item-lista/produto-carrinho';
import { Carrinho } from '../carrinho/carrinho';

@Component({
  selector: 'boxe-lista',
  templateUrl: './boxe.component.html',
  styleUrls: ['./boxe.component.css']
})
export class BoxeComponent implements OnInit {

  produtos: Produto[];
  carrinho: ProdutoCarrinho[];

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService : CarrinhoService,
    private router: Router
  ){}

  ngOnInit() {
      
    this.produtoService.buscarTodos()
    .subscribe(resposta => {
      this.produtos = resposta
    });

  }

  adicionarProduto(produto: Produto){
    //pega a string do local storage e transforma em obj
    this.carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (!this.carrinho) {
      //tenho de resetar o objeto pois se o json estiver vazio ele vira null, e eu não posso dar push em algo null
        this.carrinho = [];
        //inicia o obj itemCarrinho com 1 na quantidade e manda para o carrinho
        this.carrinho.push(new ProdutoCarrinho(produto, 1));
        //sobe o objeto para o local storage transformando ele em string no formato JSON
        localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
    } else {
      //find ele volta uma referencia para algo que vc está pesquisando
        let itemEncontrado = this.carrinho.find((itemCarrinho) =>
            itemCarrinho.produto.id == produto.id
        );
        if(itemEncontrado){// verifica se existe algum itemEncontrado
            itemEncontrado.quantidade += 1;//se sim adiciona um
        } else {
          //se nao sobe um novo item para o carrinho
            this.carrinho.push(new ProdutoCarrinho(produto, 1));
        }
        //independente do resultado tem de subir para o carrinho
        localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    }
  }
}