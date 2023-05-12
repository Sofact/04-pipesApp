import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Convenio } from '../shared/models/convenio';
import { ViewPerfil } from '../shared/models/ViewPerfil';
import { URL_SERVICIOS } from '../config/config';
import { MapConvenio } from '../shared/models/MapConvenio';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  private urlEndPoint: string = URL_SERVICIOS+'perfil/all';
  private urlEndPointConvenio: string = URL_SERVICIOS+'convenio/all';
  private urlSaveEndPoint: string = URL_SERVICIOS+'convenio/save';
  private urlEndpointDelete: string = URL_SERVICIOS+'convenio/del';

  private httpHeaders = new HttpHeaders()
  .append('Content-Type', 'Application/json')
  .append('Access-Control-Allow-Origin', 'http://208.109.37.247:80')


  constructor(private http: HttpClient) { }

  getConveniobyId(id: number): Observable <ViewPerfil>{
  
    return this.http.get<ViewPerfil>(this.urlEndPoint+"/"+id).pipe(
      
        map(results => results as ViewPerfil)
        
      )
  }

  getConvenios(): Observable <Convenio[]>{
  
    return this.http.get<Convenio[]>(this.urlEndPointConvenio).pipe(
      
        map(results => results as Convenio[])
      )
  }

  
  SaveConvenio(convenio: MapConvenio): Observable<MapConvenio>{

    console.log(convenio);
  
    return this.http.post<MapConvenio>(this.urlSaveEndPoint, convenio, {headers: this.httpHeaders}).pipe(
      
       map(results => results as MapConvenio)
      )
    
  }

  
  DeleteConvenio( covId: number): Observable<number>{

    console.log("entro al borrador", covId);

    return this.http.delete(this.urlEndpointDelete + "/" + covId).pipe(
      
        map( respuesta => respuesta as number)
      )
  
  }

}
