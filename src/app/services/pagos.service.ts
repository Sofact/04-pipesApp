import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pagos } from '../shared/models/Pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private urlEndpoint: string = 'http://localhost:8090/pagos/user';


  constructor( private http: HttpClient) { }

  getPagosUsuario(id: number): Observable<Pagos[]>{

    return this.http.get<Pagos[]>(this.urlEndpoint+"/"+id).pipe(
      
        map(response => response as Pagos[])
      )
  
  } 
}
