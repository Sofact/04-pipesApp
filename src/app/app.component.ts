import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
  
  nombre: string = 'Julian Jaimes';
  valor: number= 1000;
  display: boolean = true;
  loged: boolean = false;

  visibleSidebar2: any;

  visibleSidebar3: any;

  visibleSidebar4: any;

  visibleSidebar5: any;

  mostrarNombre (){
  
    console.log(this.nombre);
    
  }
}
