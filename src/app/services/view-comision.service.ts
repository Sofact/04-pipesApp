import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ViewComision } from '../shared/models/ViewComision';
import { URL_SERVICIOS } from '../config/config';
import { ViewPagosGrouped } from '../shared/models/ViewPagosGrouped';

@Injectable({
  providedIn: 'root'
})
export class ViewComisionService {

  private urlEndpoint: string = URL_SERVICIOS+'viewComision/all';
  private urlEndpointEstados: string = URL_SERVICIOS+'viewComision/estado';
  private urlEndpointEstadosTotal: string = URL_SERVICIOS+'viewComision/totalEstado';
  private urlEndpointLastCom: string = URL_SERVICIOS+'viewComision/lastComision';

  constructor( private http: HttpClient) { }

  getViewComision(): Observable<ViewComision[]>{
    return this.http.get<ViewComision[]>(this.urlEndpoint).pipe(
      
      map(response => response as ViewComision[])
      
      );
  }

  getViewComisionEstado(estado: string): Observable<ViewComision[]>{
    return this.http.get<ViewComision[]>(this.urlEndpointEstados+"/"+estado).pipe(

      map(response => response as ViewComision[])

      );
  }

  getViewComisionEstadoId(estado: string, usuId: number): Observable<ViewPagosGrouped[]>{
    return this.http.get<ViewPagosGrouped[]>(this.urlEndpointEstados+"/"+estado+"/"+usuId).pipe(

      map(response => response as ViewPagosGrouped[])

      );
  }

  getViewComisionEstadoTotal(estado: string, usuId: number): Observable<number>{
    return this.http.get<number>(this.urlEndpointEstadosTotal+"/"+estado+"/"+usuId).pipe(

      map(response => response as number)

      );
  }

  getViewComisionEstadoTotalSolo(estado: string): Observable<number>{
    return this.http.get<number>(this.urlEndpointEstadosTotal+"/"+estado).pipe(

      map(response => response as number)

      );
  }

  getLastComision(usuId: string): Observable<ViewComision>{
    return this.http.get<ViewComision>(this.urlEndpointLastCom+"/"+usuId).pipe(

      map(response => response as ViewComision)

      );
  }
}
