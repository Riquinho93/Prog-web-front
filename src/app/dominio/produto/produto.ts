import { Categoria } from "../categoria/categoria";

export class Produto {
  id: number;
  nome: string;
  modalidade: string;
  descricao: string;
  preco: number;
  categoria: Categoria;
}