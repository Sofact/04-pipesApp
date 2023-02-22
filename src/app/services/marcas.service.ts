import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Marca } from '../administracion/pages/marcas/Marcas';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private urlEndpoint: string = 'http://localhost:8090/marcas/all';
  private urlSaveEndPoint: string = 'http://localhost:8090/parametros/saveParams';
  private urlDeleteEndPoint: string = 'http://localhost:8090/parametros/deleteParams';
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