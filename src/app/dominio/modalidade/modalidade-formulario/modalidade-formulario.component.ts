import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Modalidade } from '../modalidade';
import { ModalidadeService } from '../modalidade.service';

@Component({
  selector: 'modalidade-lista',
  templateUrl: './modalidade-formulario.component.html',
  styleUrls: ['./modalidade-formulario.component.css']
})
export class ModalidadeFormularioComponent implements OnInit {

  modalidades: Modalidade[];
  modalidade: Modalidade;
  modalidadeForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private modalidadeService: ModalidadeService
  ) { }

  ngOnInit() {

    this.modalidade = new Modalidade();

    /* Obter o `ID` passado por parâmetro na URL */
    this.modalidade.id = this.route.snapshot.params['id'];

    /* Altera o título da página */
    this.titulo = (this.modalidade.id == null) 
    ? 'Nova Modalidade' 
    : 'Alterar Modalidade';

    /* Reactive Forms */
    this.modalidadeForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.maxLength(50)])
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.modalidade.id != null) {
      this.modalidadeService.buscarPeloId(this.modalidade.id)
        .subscribe(retorno => {

          // Atualiza o formulário com os valores retornados
          this.modalidadeForm.patchValue(retorno);

        });
    }

  }

  salvar(modalidade: Modalidade) {
    if (this.modalidadeForm.invalid) {
      console.log("Erro no formulário");
    } 
    else {
      this.modalidadeService.salvar(modalidade)
      .subscribe(response => {
        console.log("Curso salvo com sucesso");

        // retorna para a lista
        this.router.navigate(['/modalidade']);
      },
      (error) => {
        console.log("Erro no back-end");
      });

    }
  }
  
}