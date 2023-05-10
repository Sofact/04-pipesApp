import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { Comision } from '../shared/models/Comision';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  private urlSaveEndpoint: string = URL_SERVICIOS+'comision/test';
  private urlUpdateEndpoint: string = URL_SERVICIOS+'comision/update';
  private httpHeaders = new HttpHeaders()
            .append('Content-Type', 'Application/json')
            .append('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
  
            constructor( private http: HttpClient) { }

            updateComision(nombre: string | null, fecha: string | null){

                console.log("Ingresando al update comision",this.urlUpdateEndpoint);

              //  return this.http.get<any>("http://localhost:8090/productos/all", {headers: this.httpHeaders});
              return this.http.post<any>(this.urlUpdateEndpoint+"/"+nombre+"/"+fecha, {headers: this.httpHeaders});
            }    

            getCodigos(): Observable<string>{
  
              return this.http.get<string>(this.urlSaveEndpoint).pipe(
                
                  map(response => response as string),
                 
                );
            }
          
}
