import { Component } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Carrinho } from '../carrinho/carrinho';
import {Produto} from '../produto/produto';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  produto:Produto;
  produtos: any[];
  public cart = [];
  public precoTotal: number;
  public qtdProduto: number;
  private carrinhoService:CarrinhoService;

  constructor(private produtoService:ProdutoService,  carrinhoService: CarrinhoService) {}

  removeProduto(produto) { }

  

  ngOnInit() {  }

  
  
}