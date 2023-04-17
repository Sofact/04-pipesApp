import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Marca } from '../administracion/pages/marcas/Marcas';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private urlEndpoint: string = URL_SERVICIOS+'marcas/all';
  private urlSaveEndPoint: string = URL_SERVICIOS+'parametros/saveParams';
  private urlDeleteEndPoint: string = URL_SERVICIOS+'parametros/deleteParams';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')


  constructor(private http: HttpClient) { }

  getAll(): Observable<Marca[]>{
  
    return this.http.get(this.urlEndpoint).pipe(
      map(response => response as Marca[])
      );
  }

  saveMarca(marca: Marca): Observable<Marca>{
  
   return this.http.post<Marca>(this.urlSaveEndPoint, marca, {headers: this.httpHeaders});
  
  }
}