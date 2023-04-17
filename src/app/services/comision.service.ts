import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  private urlSaveEndpoint: string = URL_SERVICIOS+'comision/save';
  private httpHeaders = new HttpHeaders()
            .append('Content-Type', 'Application/json')
  
            constructor( private http: HttpClient) { }

        
}
