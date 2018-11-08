import { Component } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
//import { Subscription } from 'rxjs/Subscription';
import { CarrinhoService } from '../carrinho.service';
import { Carrinho } from '../carrinho';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  public cart = [];
  public totalPreco: number;
  public qtdProduto: number;
  //public cartSubscription: Subscription;

  constructor(private produtoService:ProdutoService,  private carrinhoService: CarrinhoService) {}

  removeProduto(produto) {
    this.carrinhoService.removeFromCart(produto)
  }

  checkout() {
    alert('Sorry! Checkout will be coming soon!')
  }

  getTotalPreco() {
    let totalCusto: Array<number> = []
    let quantidade: Array<number> = []
    let intPreco: number
    let intQuantidade: number
    this.cart.forEach((item, i) => {
      intPreco = parseInt(item.preco)
      intQuantidade = parseInt(item.quantidade)
      totalCusto.push(intPreco)
      quantidade.push(intQuantidade)
    })

    this.totalPreco = totalCusto.reduce((acc, item) => {
      return acc += item
    }, 0)
    this.qtdProduto = quantidade.reduce((acc, item) => {
      return acc += item
    }, 0)
  }

  ngOnInit() {
    this.carrinhoService = this.cartStore.getState().subscribe(res => {
      this.cart = res.produtos
      this.getTotalPreco()
    })
  }

  ngOnDestroy() {
    this.carrinhoService.unsubscribe()
  }
  
}