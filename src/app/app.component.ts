import { Component, OnInit } from '@angular/core';
import { ModalidadeService } from './dominio/modalidade/modalidade.service';
import { Modalidade } from './dominio/Modalidade/modalidade';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'World Shop';
  modalidades: Modalidade[];

  constructor(
    public modalidadeService: ModalidadeService,
    public router: Router
  ) {}

  ngOnInit(){
    this.modalidadeService.buscarTodos()
    .subscribe(retorno => {
      this.modalidades = retorno
   });
  }

  
  listarPorModalidade(modalidade: Modalidade) {
    window.location.reload();
    this.router.navigate([`/produto/modalidade/${modalidade.id}`]);
  }
}