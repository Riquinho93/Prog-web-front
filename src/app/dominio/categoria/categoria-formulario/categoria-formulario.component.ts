import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'categoria-lista',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {

  categoria: Categoria;
  categoriaForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {

    this.categoria = new Categoria();

    /* Obter o `ID` passado por parâmetro na URL */
    this.categoria.id = this.route.snapshot.params['id'];

    /* Altera o título da página */
    this.titulo = (this.categoria.id == null) 
    ? 'Nova Categoria' 
    : 'Alterar Categoria';

    /* Reactive Forms */
    this.categoriaForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.maxLength(50)])
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.categoria.id != null) {
      this.categoriaService.buscarPeloId(this.categoria.id)
        .subscribe(retorno => {

          // Atualiza o formulário com os valores retornados
          this.categoriaForm.patchValue(retorno);

        });
    }

  }

  salvar(categoria: Categoria) {
    if (this.categoriaForm.invalid) {
      console.log("Erro no formulário");
    } 
    else {
      this.categoriaService.salvar(categoria)
      .subscribe(response => {
        console.log("Curso salvo com sucesso");

        // retorna para a lista
        this.router.navigate(['/categoria']);
      },
      (error) => {
        console.log("Erro no back-end");
      });
    }
  }

}