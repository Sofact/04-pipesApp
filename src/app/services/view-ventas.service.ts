import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewVentas } from '../shared/models/ViewVentas';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewVentasService {

  private urlEndpoint: string = 'http://localhost:8090/viewVentas/all';
  private urlEndpointTotal: string = 'http://localhost:8090/viewVentas/total';

  constructor( private http: HttpClient) { }

  getViewVentas(): Observable<ViewVentas[]>{
  
    return this.http.get<ViewVentas[]>(this.urlEndpoint).pipe(
      
        map(response => response as ViewVentas[])
      )
  }

  getViewVentasByUser(id: number): Observable<ViewVentas[]>{
  
    return this.http.get<ViewVentas[]>(this.urlEndpoint+"/"+id).pipe(

        map(response => response as ViewVentas[])
      )
  }

  getViewVentasTotalByUser(id: number): Observable<number>{
  
    return this.http.get<number>(this.urlEndpointTotal+"/"+id).pipe(

        map(response => response as  number)
      )
  }
}

