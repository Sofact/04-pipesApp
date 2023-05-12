import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewPagos } from '../shared/models/ViewPagos';
import { map, Observable, Subject } from 'rxjs';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ViewPagosService {

  private urlEndpoint: string = URL_SERVICIOS+'pagos/all';
  private urlEndpointTotal: string = URL_SERVICIOS+'pagos/total';
  private urlEndpointTotalId: string = URL_SERVICIOS+'pagos/totalId';
  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          .append('Access-Control-Allow-Origin', 'http://208.109.37.247:80')
  

  constructor(private http: HttpClient) { }

 

  getViewPagosById(id: number): Observable<ViewPagos[]>{

    return this.http.get<ViewPagos[]>(this.urlEndpoint+"/"+id, {headers: this.httpHeaders}).pipe(
      
        map( response => response as ViewPagos[])
      )
  }

  getViewPagos(): Observable<ViewPagos[]>{

    return this.http.get<ViewPagos[]>(this.urlEndpoint, {headers: this.httpHeaders}).pipe(

      map(result => result as ViewPagos[])
      )
  }

  getViewPagosTotal(): Observable<number>{
  
    return this.http.get<number>(this.urlEndpointTotal, {headers: this.httpHeaders}).pipe(
      
        map(result => result as number)
      )
  }

  getViewPagosTotalId(id: number): Observable<number>{
  
    return this.http.get<number>(this.urlEndpointTotalId+"/"+id, {headers: this.httpHeaders}).pipe(
      
        map(result => result as number)
      )
  }
}
