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

  qtd: number = 0;
  public carrinho$: Observable<Carrinho>;
  produtosCarrinho: ProdutoCarrinho[];

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    //  this.quantidadeItem();
    let pro = JSON.parse(localStorage.getItem("carrinho")).length;
    this.qtd = pro;
  }

  quantidadeItem() {
    let qtdade = localStorage.getItem('carrinho') ?
      JSON.parse(localStorage.getItem("carrinho")) :
      [];

    let prod = 0;
    for (let i = 0; i < qtdade.length; i++) {
      prod += this.produtosCarrinho[i].quantidade;
    }
    console.log(this.qtd);
    this.qtd = prod;
  }



}
