import { Produto } from "../produto";

export class ProdutoCarrinho {
  produto: Produto;
  quantidade: number;

  constructor (produto: Produto, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade;
  }
}