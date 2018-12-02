import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Modalidade } from './modalidade';

@Injectable()
export class ModalidadeService {

    private URL:string = "http://localhost:8888";

    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Modalidade[]> {
        return this.http
            .get<Modalidade[]>(`${this.URL}/modalidade`);
    }

    buscarPeloId(id: number): Observable<Modalidade> {
        return this.http
            .get<Modalidade>(`${this.URL}/modalidade/${id}`)
            .pipe(
                map(response => response)
            );
    }

    salvar(modalidade: Modalidade): Observable<Modalidade> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        if (modalidade.id) {
            return this.http
                .put<Modalidade>(
                    `${this.URL}/modalidade`, 
                    JSON.stringify(modalidade), 
                    httpOptions
                );
        } else {
            return this.http
                .post<Modalidade>(`${this.URL}/modalidade`, JSON.stringify(modalidade), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/modalidade/${id}`);
    }

}