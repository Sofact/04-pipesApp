import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ViewComision } from '../shared/models/ViewComision';

@Injectable({
  providedIn: 'root'
})
export class ViewComisionService {

  private urlEndpoint: string = 'http://localhost:8090/viewComision/all';
  private urlEndpointEstados: string = 'http://localhost:8090/viewComision/estado';
  private urlEndpointEstadosTotal: string = 'http://localhost:8090/viewComision/totalEstado';

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
  getViewComisionEstadoTotal(estado: string): Observable<number>{
    return this.http.get<number>(this.urlEndpointEstadosTotal+"/"+estado).pipe(

      map(response => response as number)

      );
  }
}
