import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Codigo } from '../administracion/pages/codificacion/Codigo';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodigosService {


  private urlEndpoint: string = 'http://localhost:8090/codigos/all';
  private urlSaveEndpoint: string = 'http://localhost:8090/codigos/save';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')



  constructor( private http: HttpClient) { }

  getCodigos(): Observable<Codigo[]>{
  
    return this.http.get<Codigo[]>(this.urlEndpoint).pipe(
      
        map(response => response as Codigo[])
      );
  }

  saveCodigo(codigo: Codigo): Observable<Codigo>{
  
    return this.http.post<Codigo>(this.urlSaveEndpoint, codigo, {headers: this.httpHeaders});
   
   }
}
