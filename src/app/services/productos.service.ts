import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Producto } from '../administracion/pages/productos/productos/Producto';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { URL_SERVICIOS } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlEndPoint: string = URL_SERVICIOS+'productos/all';
  private urlSaveEndPoint: string = URL_SERVICIOS+'productos/save';
  private urlEndpointDelete: string = URL_SERVICIOS+'productos/op';

  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')
          .append('Access-Control-Allow-Origin', 'http://208.109.37.247:80')



  private _refresh$ = new Subject<void>();
   

  constructor( private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getProductos(): Observable<Producto[]>{
  
    return this.http.get<Producto[]>(this.urlEndPoint).pipe(
      
        map(response => response as Producto[])
        );
  }

  SaveProductos(producto: Producto): Observable<Producto>{
  
    return this.http.post<Producto>(this.urlSaveEndPoint, producto, {headers: this.httpHeaders}).pipe(
      
        tap(() => {
          this._refresh$.next();
        })
      )
    
  }

  DeleteProductos( proId: number): Observable<number>{

    console.log("entro al borrador", proId);

    return this.http.delete(this.urlEndpointDelete + "/" + proId).pipe(
      
        map( respuesta => respuesta as number),
        tap(() => {
          this._refresh$.next();
        })
      )
  
  }
}
