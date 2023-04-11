import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndpoint: string = 'http://localhost:8090/api/auth/signin';
  username: string= '';
  password: string= '';

  private httpHeaders = new HttpHeaders()
  .append('Content-Type', 'Application/json')
  .append('Access-Control-Allow-Origin', 'localhost:4200')
  .append('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');

  
  token:any = '';
  user:any = null;
 


  constructor( private http: HttpClient,
               private router: Router) { }

  loadLocalStorage(){
  
    if(localStorage.getItem("token") && localStorage.getItem("user")){
    
      this.token = localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user") ?? '');
    }else{
    
      this.token='';
      this.user=null;
    }
  }
  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  public getUser(): string | null {
    return localStorage.getItem("user");
  }

  public getId(): string | null {
    return localStorage.getItem("id");
  }

  login(username:string, password: string){
  
//let url = URL_SERVICIOS+'/login';
console.log("los valores a enviar", username, password);

    return this.http.post(this.urlEndpoint, {username, password}).pipe(
      
        map( (auth:any) =>{

          console.log("El acces tokken:::", auth);
          if(auth.accessToken){
            console.log("logeuad0");
            return this.storeLocalStorageToken(auth);
          }else{
            console.log("no logueado");
            return of(undefined);
          }
        }), 
        catchError(error => {

          console.log(error);
          return of(error);
          
        })
      )
  }


  logout(){
    
    this.token='';
    this.user=null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/auth/login'],{
      queryParams: {}
    });
  }
  
  storeLocalStorageToken(auth: any){

    if(auth.accessToken){
      localStorage.setItem("token", auth.accessToken);
      localStorage.setItem("user",  JSON.stringify( auth.email));
      localStorage.setItem("id", JSON.stringify( auth.id));
      this.token = auth.access_token;
      this.user = auth.user;
      return true;
    }else{
      return false;
    }
  
  }
  isLogin(){

    return localStorage.getItem("token") !== null;
  }
}
