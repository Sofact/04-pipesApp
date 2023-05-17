import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promocioneshome',
  templateUrl: './promocioneshome.component.html',
  styleUrls: ['./promocioneshome.component.css']
})
export class PromocioneshomeComponent implements OnInit {

 
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  continuar(){

    console.log("Continuar");
    this.router.navigate(['/home']);
  }

}
