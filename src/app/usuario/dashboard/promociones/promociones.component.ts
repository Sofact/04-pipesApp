import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  continuar(){

    console.log("Continuar");
    this.router.navigate(['/userDashboard']);
  }

}
