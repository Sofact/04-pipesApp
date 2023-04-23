import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from '../shared/models/Usuario';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  private urlEndpoint: string = URL_SERVICIOS+'api/auth/signup';

  private httpHeaders = new HttpHeaders()
  .append('Content-Type', 'Application/json')

 
  constructor( private http: HttpClient) { }


  saveUser(user: User): Observable<User>{
  
    return this.http.post<User>(this.urlEndpoint, user, {headers: this.httpHeaders}).pipe(
      
        map( response => response as User)
      )
   }
}
