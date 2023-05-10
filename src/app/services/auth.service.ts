import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';
import { User } from '../shared/models/User';

const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndpoint: string = URL_SERVICIOS+'api/auth/signin';
  private urlEndpointUp: string = URL_SERVICIOS+'api/auth/signup';
  username: string= '';
  password: string= '';

  private httpHeaders = new HttpHeaders()
  .append('Content-Type', 'Application/json')
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

  public getRole(): string | null {
    return localStorage.getItem("role");
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
  
  logoutClientes(){
    
    this.token='';
    this.user=null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/auth/loginCliente'],{
      queryParams: {}
    });
  }

  
  saveUser(user: User): Observable<User>{
  
    let username= user.username;
    let email = user.email;
    let password= user.password;
    let convId = user.convId;
    let munId= user.munId;
    let cliBanco = user.cliBanco;
    let cliTipoCuenta = user.cliTipoCuenta;
    let cliNumCuenta = user.cliNumCuenta;

    console.log("le convId::", convId);

    return this.http.post<User>(this.urlEndpointUp, {username, password, email, convId, munId, cliBanco, cliTipoCuenta, cliNumCuenta}).pipe(
      
        map( response => response as User)
      )
   }
  
  storeLocalStorageToken(auth: any){

    if(auth.accessToken){
      console.log("local::", auth);
      localStorage.setItem("token", auth.accessToken);
      localStorage.setItem("user",  JSON.stringify( auth.email));
      localStorage.setItem("id", JSON.stringify( auth.id));
      localStorage.setItem("role", JSON.stringify( auth.roles));
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
