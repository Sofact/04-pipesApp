import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ViewPagosGrouped } from '../shared/models/ViewPagosGrouped';

@Injectable({
  providedIn: 'root'
})
export class ViewPagosgroupedService {

  private urlEndpoint: string = 'http://localhost:8090/pagosGroup/all';


  constructor( private http: HttpClient) { }

  getViewPagosGrouped(): Observable<ViewPagosGrouped[]>{
  
    return this.http.get<ViewPagosGrouped[]>(this.urlEndpoint).pipe(
      
        map( response => response as ViewPagosGrouped[])

      )
  }

  getViewPagosGroupedByEstado(estado: string): Observable<ViewPagosGrouped[]>{
  
    return this.http.get<ViewPagosGrouped[]>(this.urlEndpoint+"/pendiente").pipe(
      
        map(result => result as ViewPagosGrouped[])
      )
  }
}
