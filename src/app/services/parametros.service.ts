import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tax } from '../administracion/pages/tax/tax';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  private urlEndpoint: string = URL_SERVICIOS+'parametros/taxes';
  private urlSaveEndPoint: string = URL_SERVICIOS+'parametros/saveParams';
  private urlDeleteEndPoint: string = URL_SERVICIOS+'parametros/deleteParams';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')

  constructor( private http: HttpClient) { }

  getParametros(): Observable<Tax[]>{

    return this.http.get<Tax[]>(this.urlEndpoint).pipe(
        map(response => response as Tax[])
      );
  }

  saveParametros(tax: Tax): Observable<Tax>{
  
     return this.http.post<Tax>(this.urlSaveEndPoint, tax, {headers: this.httpHeaders});
  } 

  deleteParametros(id: number): Observable<object>{
  
     return  this.http.delete(this.urlDeleteEndPoint+"/"+id);
  }
}
