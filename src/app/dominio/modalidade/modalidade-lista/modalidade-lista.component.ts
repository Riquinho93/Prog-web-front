import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Modalidade } from '../modalidade';
import { ModalidadeService } from '../../modalidade/modalidade.service';

@Component({
  selector: 'modalidade-lista',
  templateUrl: './modalidade-lista.component.html',
  styleUrls: ['./modalidade-lista.component.css']
})
export class ModalidadeListaComponent implements OnInit {

  modalidades: Modalidade[];
    teste: string = "valor da variavel";

    constructor(
      private modalidadeService: ModalidadeService,
      private router: Router
    ){}

    ngOnInit() {
        
      this.modalidadeService.buscarTodos()
      .subscribe(resposta => {
        this.modalidades = resposta
      });

    }

    excluir(modalidadeId: number, index: number) {
      this.modalidadeService.excluir(modalidadeId)
      .subscribe(resposta => {

        this.modalidades.splice(index, 1);

        console.log("modalidade excluído com sucesso");
        
        // retorna para a lista
        this.router.navigate(['/modalidade']);
      } );
    }

}