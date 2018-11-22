import { Component } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Carrinho } from '../carrinho/carrinho';
import {Produto} from '../produto/produto';
import { ProdutoCarrinho } from '../produto/item-lista/produto-carrinho';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  produto:Produto;
  produtos: any[];
  public cart = [];
  public precTotal: number = 0;
  public qtdProduto: number;

  produtosCarrinho : ProdutoCarrinho[];

  constructor(private produtoService:ProdutoService,  carrinhoService: CarrinhoService) {}
  
  removeProduto(index: number) { 
    this.produtosCarrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.produtosCarrinho))
  }

  valorTotalCarrinho() {
    let total = 0;
    this.produtosCarrinho.forEach(itemCarrinho => {
      console.log(itemCarrinho)
      total += (itemCarrinho.quantidade * itemCarrinho.produto.preco);
    })
    this.precTotal = total
    return total;

    // buscar lista produtos armazenada na localStorage
    // encontrar produto desejado dentro da lista
    // remover da lista
    // armazenar lista atualizada na localStorage
    //              ___
    //       ____ <(ô.ô)>
    //     /|       \_/
    //    / |  __  | |
    //      |_|  |_|_|
  }

  ngOnInit() {
    this.produtosCarrinho = new Array();
    this.listarProdutosCarrinho();  
    this.valorTotalCarrinho();
  }
  
  listarProdutosCarrinho (){
    this.produtosCarrinho = JSON.parse(localStorage.getItem('carrinho'));
    if(this.produtosCarrinho){
      console.log('caiu na condicao, não pode')
      this.qtdProduto = this.produtosCarrinho.length;
    }
  }
  
}