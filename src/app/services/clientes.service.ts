import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Cliente } from '../shared/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndpoint: string = 'http://localhost:8090/cliente/all';
  private urlSaveEndpoint: string = 'http://localhost:8090/cliente/save';
  private httpHeaders = new HttpHeaders()
            .append('Content-Type', 'Application/json')

  constructor( private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.urlEndpoint).pipe(
      
        map(response => response as Cliente[])
      )
  
  }

  saveCliente(cliente: Cliente): Observable<Cliente>{
  
    return this.http.post<Cliente>(this.urlSaveEndpoint, cliente, {headers: this.httpHeaders})
  }
}
