import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, Observer, Subject, BehaviorSubject } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';
import { Carrinho } from './carrinho';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';


@Injectable()
export class CarrinhoService {

    private qtd: number = 0;

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

}