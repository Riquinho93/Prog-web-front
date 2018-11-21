import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';
import { CarrinhoService } from '../../carrinho/carrinho.service';
import { ProdutoCarrinho } from './produto-carrinho';

@Component({
  selector: 'item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit {

  produtos: Produto[];

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
    let produtos = localStorage.getItem("produtos") ?
    JSON.parse(localStorage.getItem("produtos")) :
    [];

    let item = {
        produto: produto,
        index: produtos.length ,
        quantidade: 1,
        valorUnitario: 0,
        promocao: 0
      }
      var teste = true;

      for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].produto.id == item.produto.id) {
          if (produtos[i].quantidade > 1 ){
            if(produtos[i].produto.precoPromocao >0){
              produtos[i].produto.preco = (produtos[i].produto.precoPromocao * produtos[i].quantidade);
              produtos[i].valorUnitario = produtos[i].produto.precoPromocao ;
            }else{
              produtos[i].produto.preco = produtos[i].produto.preco * produtos[i].quantidade;
              produtos[i].valorUnitario = produtos[i].produto.preco ;
            }
          }else{
            if(produtos[i].produto.precoPromocao >0){
              produtos[i].produto.preco = produtos[i].produto.precoPromocao * ( produtos[i].quantidade+1);
              produtos[i].valorUnitario = produtos[i].produto.precoPromocao ;
            }else{
              produtos[i].produto.preco = produtos[i].produto.preco * (produtos[i].quantidade);
              produtos[i].valorUnitario = produtos[i].produto.preco ;
            }
          }
          //produtos[i].promocao = item.produto.precoPromocao;
          localStorage.setItem("produtos", JSON.stringify(produtos));
          teste = false;
        }
      }

      if (teste) {
        produtos.push(item);
      }


localStorage.setItem("produtos", JSON.stringify(produtos));
//this.appComponent.atualizaNumero();

      // RECEITINHA
      // adicionar +1 na quantidade do 'itemEncontrado'
      // inserir objeto com quantidade atualizada novamente na lista
      // inserir novamente no localstorage lista atualizada
    //  console.log('item encontrado', itemEncontrado);

      //produtosCarrinho.push(produto);
      //localStorage.setItem('carrinho', JSON.stringify(produto));
  //  }
    


    //localStorage.setItem('carrinho', JSON.stringify(produtoCarrinho));
  }

}