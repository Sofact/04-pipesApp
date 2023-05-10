import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pagos } from '../shared/models/Pagos';
import { AuthService } from './auth.service';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PagosService {



  constructor( private http: HttpClient,
              ) { }

                
  private urlEndpoint: string = URL_SERVICIOS+'pagos/user';
  private urlEndpointSave: string = URL_SERVICIOS+'pagos/save';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          

  getPagosUsuario(id: number): Observable<Pagos[]>{

    return this.http.get<Pagos[]>(this.urlEndpoint+"/"+id).pipe(
      
        map(response => response as Pagos[])
      )
  
  } 

  savePagos(pagos: Pagos){

    return this.http.post(this.urlEndpointSave, pagos, {headers: this.httpHeaders});

  }
}
