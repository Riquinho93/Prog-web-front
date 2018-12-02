import { Categoria } from "../categoria/categoria";
import { Modalidade } from "../Modalidade/modalidade";

export class Produto {
  id: number;
  nome: string;
  modalidade: Modalidade;
  descricao: string;
  preco: number;
  categoria: Categoria;
}