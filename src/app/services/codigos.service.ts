import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Codigo } from '../administracion/pages/codificacion/Codigo';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodigosService {


  private urlEndpoint: string = '/codigos/all';
  private urlSaveEndpoint: string = '/codigos/save';
  private urlUpdateEndpoint: string ='/codigos/update';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');




  constructor( private http: HttpClient) { }

  getCodigos(): Observable<Codigo[]>{
  
    return this.http.get<Codigo[]>(this.urlEndpoint).pipe(
      
        map(response => response as Codigo[])
      );
  }

  saveCodigo(codigo: Codigo): Observable<Codigo>{
  
    return this.http.post<Codigo>(this.urlSaveEndpoint, codigo, {headers: this.httpHeaders});
   
   }

   updateCodigo(code: string): Observable<Codigo>{
  
    return this.http.put<Codigo>(this.urlUpdateEndpoint+"/"+code, {headers: this.httpHeaders});
  }
}
