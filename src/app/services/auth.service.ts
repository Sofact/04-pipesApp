import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndpoint: string = 'http://localhost:8090/login';

  private httpHeaders = new HttpHeaders()
  .append('Content-Type', 'Application/json')
  .append('Access-Control-Allow-Origin', 'localhost:4200')
  .append('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');


  constructor( private http: HttpClient) { }

  login ():Observable<String>{
  
    return this.http.post<String>(this.urlEndpoint,  {headers: this.httpHeaders}).pipe(
      
      tap(() => {
        console.log('logeado');
      })
    );
  }
}
