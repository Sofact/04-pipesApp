import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Cliente } from '../shared/models/Cliente';
import { AuthService } from './auth.service';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndpoint: string = URL_SERVICIOS+'cliente/all';
  private urlSaveEndpoint: string = URL_SERVICIOS+'cliente/save';
  private httpHeaders = new HttpHeaders()
            .append('Content-Type', 'Application/json')
            .append('Authorization', `Bearer $this.authService.token}`)

  constructor( private http: HttpClient,
                private authService: AuthService
    ) { }

  getClientes(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.urlEndpoint).pipe(
      
        map(response => response as Cliente[])
      )
  
  }

  saveCliente(cliente: Cliente): Observable<Cliente>{
  
    return this.http.post<Cliente>(this.urlSaveEndpoint, cliente, {headers: this.httpHeaders})
  }
}
