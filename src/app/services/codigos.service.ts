import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Codigo } from '../administracion/pages/codificacion/Codigo';
import { map, Observable, Subject, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class CodigosService {


  private urlEndpoint: string = 'http://localhost:8090/codigos/all';
  private urlSaveEndpoint: string = 'http://localhost:8090/codigos/save';
  private urlUpdateEndpoint: string ='http://localhost:8090/codigos/update';

  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          .append('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');

         

  private params = new HttpParams()
          .set('codCodigo', '')
          .set('id', "1");

  private _refresh$ = new Subject<void>();


  constructor( private http: HttpClient,
                private authService: AuthService
                ) { }

  get refresh$(){
    return this._refresh$;
  }

  getCodigos(): Observable<Codigo[]>{
  
    return this.http.get<Codigo[]>(this.urlEndpoint).pipe(
      
        map(response => response as Codigo[]),
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  saveCodigo(codigo: Codigo): Observable<Codigo>{

  
    return this.http.post<Codigo>(this.urlSaveEndpoint, codigo, {headers: this.httpHeaders}).pipe(
      
      tap(() => {
        this._refresh$.next();
      })
    );
   
   }

   updateCodigo(codCodigo: string): Observable<Codigo>{

  
  
    return this.http.put<Codigo>(this.urlUpdateEndpoint+"/"+codCodigo,{headers: this.httpHeaders});
  }
}
