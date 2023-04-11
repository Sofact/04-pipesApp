import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  private urlSaveEndpoint: string = 'http://localhost:8090/comision/save';
  private httpHeaders = new HttpHeaders()
            .append('Content-Type', 'Application/json')
  
            constructor( private http: HttpClient) { }

        
}
