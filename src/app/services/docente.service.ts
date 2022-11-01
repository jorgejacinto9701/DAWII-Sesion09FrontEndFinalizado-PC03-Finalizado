import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente.model';

const baseUrl = 'http://localhost:8090/rest/crudDocente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
 
  constructor(private http:HttpClient) { }
 
  consultaDocente(nombre :string): Observable<any>{
      return this.http.get(baseUrl + "/listaDocentePorNombreLike/" + nombre)
  }

  registraDocente(docente :Docente): Observable<any>{
      return this.http.post(baseUrl + "/registraDocente", docente);
  }

  actualizaDocente(docente :Docente): Observable<any>{
    return this.http.put(baseUrl + "/actualizaDocente", docente);
  }

}
