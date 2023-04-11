import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pagos } from '../shared/models/Pagos';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagosService {



  constructor( private http: HttpClient,
              ) { }

                
  private urlEndpoint: string = 'http://localhost:8090/pagos/user';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          

  getPagosUsuario(id: number): Observable<Pagos[]>{

    return this.http.get<Pagos[]>(this.urlEndpoint+"/"+id).pipe(
      
        map(response => response as Pagos[])
      )
  
  } 
}
