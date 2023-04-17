import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario } from '../shared/models/Usuario';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  private urlEndpoint: string = URL_SERVICIOS+'usuario/all';
 
  constructor( private http: HttpClient) { }


  getUsuarioById(id: number): Observable<Usuario>{
  
    return this.http.get<Usuario>(this.urlEndpoint+"/"+id).pipe(
      
        map( response => response as Usuario)
      )
   }
}
