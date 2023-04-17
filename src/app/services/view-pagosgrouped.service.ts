import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ViewPagosGrouped } from '../shared/models/ViewPagosGrouped';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ViewPagosgroupedService {

  private urlEndpoint: string = URL_SERVICIOS+'pagosGroup/all';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          .append('Access-Control-Allow-Origin', 'http://208.109.37.247:80')



  constructor( private http: HttpClient) { }

  getViewPagosGrouped(): Observable<ViewPagosGrouped[]>{
  
    return this.http.get<ViewPagosGrouped[]>(this.urlEndpoint, {headers: this.httpHeaders}).pipe(
      
        map( response => response as ViewPagosGrouped[])

      )
  }

  getViewPagosGroupedByEstado(estado: string): Observable<ViewPagosGrouped[]>{
  
    return this.http.get<ViewPagosGrouped[]>(this.urlEndpoint+"/pendiente", {headers: this.httpHeaders}).pipe(
      
        map(result => result as ViewPagosGrouped[])
      )
  }
}
