import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, Observer, Subject, BehaviorSubject } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';
import { Carrinho } from './carrinho';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';
import { ProdutoCarrinho } from '../produto/item-lista/produto-carrinho';


@Injectable()
export class CarrinhoService {

    private qtd: number = 0;
    produto:Produto;
    public cart = [];
    public precTotal: number = 0;
    public qtdProduto: number;
    public diminuir = this.qtdProduto - 1;
    public aumentar = this.qtdProduto + 1;

    produtosCarrinho : ProdutoCarrinho[];


    private produtos: Produto[] = [];
    private carrinhoSubject = new Subject<Carrinho>();

    carrinhoObservable = this.carrinhoSubject.asObservable();


    public constructor(){}

    adicionarProduto(produto: Produto){
        console.log("adicionarProduto");
        this.produtos.push(produto);
        this.carrinhoSubject.next(<Carrinho> {qtdProduto: this.produtos.length, produtos: this.produtos});
    }

    excluirProduto(id: number){
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
    

}