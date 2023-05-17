import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Municipio } from '../shared/models/Municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  
  private urlEndpoint: string = URL_SERVICIOS+'municipio/all';

    private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          .append('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');

  constructor( private http: HttpClient, ) { }

  getMunicipios(): Observable<Municipio[]>{
  
    return this.http.get<Municipio[]>(this.urlEndpoint);
  }
}
