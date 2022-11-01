import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../models/ubigeo.model';

const baseUrl = 'http://localhost:8090/rest/util';

@Injectable({
  providedIn: 'root'
})

export class UbigeoService {
  constructor(private http: HttpClient) {}

  listarDepartamento(): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + '/listaDepartamentos');
  }

  listaProvincias(paramDep: any): Observable<string[]> {
    return this.http.get<string[]>(baseUrl + '/listaProvincias/' + paramDep);
  }

  listaDistritos(paramDep: any, paramProv: any): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(baseUrl + '/listaDistritos/' + paramDep + '/' + paramProv);
  }
}
