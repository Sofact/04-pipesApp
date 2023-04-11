import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Convenio } from '../shared/models/convenio';
import { ViewPerfil } from '../shared/models/ViewPerfil';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  urlEndPoint: string = 'http://localhost:8090/perfil/all';

  constructor(private http: HttpClient) { }

  getConveniobyId(id: number): Observable <ViewPerfil>{
  
    return this.http.get<ViewPerfil>(this.urlEndPoint+"/"+id).pipe(
      
        map(results => results as ViewPerfil)
      )
  }
}
