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
  public qtdProduto: number=0;

  produtosCarrinho : ProdutoCarrinho[];

  constructor(private produtoService:ProdutoService,  carrinhoService: CarrinhoService) {}
  
  removeProduto(index: number) { 
    this.produtosCarrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.produtosCarrinho))
    this.atualizarProduto();
    this.listarProdutosCarrinho();
  }

  atualizarProduto(){
    this.valorTotalCarrinho();
//    this.quantidades();
  }

  // quantidades(){
  //   let car: ProdutoCarrinho;
  //   this.qtdCart = car.quantidade;
  //   return this.qtdCart;
  // }

  valorTotalCarrinho() {
    let total = 0;
    this.produtosCarrinho.forEach(itemCarrinho => {
      console.log(itemCarrinho)
      total += (itemCarrinho.quantidade * itemCarrinho.produto.preco);
    })
    this.precTotal = total
    return total;

  }

  ngOnInit() {
    this.produtosCarrinho = new Array();
    this.listarProdutosCarrinho();  
    this.valorTotalCarrinho();
  }
  
  listarProdutosCarrinho (){
    //pegando os produtos
    this.produtosCarrinho = JSON.parse(localStorage.getItem('carrinho'));
    if(this.produtosCarrinho){
      this.qtdProduto = this.produtosCarrinho.length;
    }
  }

}