import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Convenio } from '../shared/models/convenio';
import { ViewPerfil } from '../shared/models/ViewPerfil';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  urlEndPoint: string = URL_SERVICIOS+'perfil/all';
  urlEndPointConvenio: string = URL_SERVICIOS+'convenio/all';


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
}
