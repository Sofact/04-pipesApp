import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewPagos } from '../shared/models/ViewPagos';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewPagosService {

  private urlEndpoint: string = 'http://localhost:8090/pagos/all';
  private urlEndpointTotal: string = 'http://localhost:8090/pagos/total';

  

  constructor(private http: HttpClient) { }

 

  getViewPagosById(id: number): Observable<ViewPagos[]>{

    return this.http.get<ViewPagos[]>(this.urlEndpoint+"/"+id).pipe(
      
        map( response => response as ViewPagos[])
      )
  }

  getViewPagos(): Observable<ViewPagos[]>{

    return this.http.get<ViewPagos[]>(this.urlEndpoint).pipe(

      map(result => result as ViewPagos[])
      )
  }

  getViewPagosTotal(): Observable<number>{
  
    return this.http.get<number>(this.urlEndpointTotal).pipe(
      
        map(result => result as number)
      )
  }
}
