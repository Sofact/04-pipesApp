import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Producto } from '../administracion/pages/productos/productos/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlEndPoint: string = 'http://localhost:8090/productos/all';
  private urlSaveEndPoint: string = 'http://localhost:8090/productos/save';

  private httpHeaders = new HttpHeaders()
          .append('Content-Type', 'Application/json')

  constructor( private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
  
    return this.http.get<Producto[]>(this.urlEndPoint).pipe(
      
        map(response => response as Producto[])
        );
  }

  SaveProductos(producto: Producto): Observable<Producto>{
  
    return this.http.post<Producto>(this.urlSaveEndPoint, producto, {headers: this.httpHeaders});
    
  }
}
