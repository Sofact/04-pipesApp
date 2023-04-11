import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ventas-usuario',
  templateUrl: './ventas-usuario.component.html'
})
export class VentasUsuarioComponent implements OnInit {

  usuario: string | null='';
  usuId: string | null ='';

  constructor( private _router: ActivatedRoute ) {
  
    this.usuario = this._router.snapshot.paramMap.get('nombre'); 
    this.usuId =this._router.snapshot.paramMap.get('id');


  }

  ngOnInit(): void {
  }

}
