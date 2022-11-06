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
 
  consultaPorNombre(filtro:string):Observable<Docente[]>{
      return  this.http.get<Docente[]>(baseUrl +"/listaDocentePorNombreLike/"+filtro); 
  }  

  inserta(obj:Docente):Observable<any>{
      return this.http.post(baseUrl + "/registraDocente", obj);
  }

  actualiza(obj:Docente):Observable<any>{
      return this.http.put(baseUrl + "/actualizaDocente", obj);
  }

  elimina(idDocente:number):Observable<any>{
      return this.http.delete(baseUrl + "/eliminaDocente/"+ idDocente);
  }

}
