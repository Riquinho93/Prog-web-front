import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable, of } from 'rxjs';
import { CarrinhoService } from '../carrinho.service';
import { Carrinho } from '../carrinho';
import { ProdutoCarrinho } from '../../produto/item-lista/produto-carrinho';

@Component({
  selector: 'carrinho-widget',
  templateUrl: './carrinho-widget.component.html',
  styleUrls: ['./carrinho-widget.component.css']
})
export class CarrinhoWidget implements OnInit {

   qtd:number = 0;
  public carrinho$: Observable<Carrinho>;
  produtosCarrinho : ProdutoCarrinho[];

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {

    this.carrinhoService.carrinhoObservable.subscribe( (carrinho: Carrinho) => {
      this.qtd = carrinho.qtdProduto;
    } );

  }

  ngOnInit() {
    let prod = JSON.parse(localStorage.getItem("carrinho"));
   }
  
}
