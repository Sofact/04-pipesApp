import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';
import { ViewCodigos } from '../shared/models/ViewCodigos';

@Injectable({
  providedIn: 'root'
})
export class ViewCodigosService {

  private urlEndpoint: string = URL_SERVICIOS+'viewCodigos/all';

  private _refresh$ = new Subject<void>();

  constructor( private http: HttpClient) { }

  getViewCodigos():Observable<ViewCodigos[]>{
  
    return this.http.get<ViewCodigos[]>(this.urlEndpoint).pipe(
      
      map(response => response as ViewCodigos[]),
      tap(() => {
        this._refresh$.next();
      })
      );
  }
  
}
