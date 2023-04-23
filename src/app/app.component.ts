import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig,
              private authService: AuthService         
    ) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.showContent=false;

        //this.showContent = false;
       this.showContent=this.isLoged();
        
    }
  
  nombre: string = 'Julian Jaimes';
  valor: number= 1000;
  display: boolean = true;
  loged: boolean = false;
  showContent: boolean = true;

  visibleSidebar2: any;

  visibleSidebar3: any;

  visibleSidebar4: any;

  visibleSidebar5: any;

  mostrarNombre (){
  
    console.log(this.nombre);
    
  }

  isLoged(){
  
   if( this.authService.isLogin()){
    return true;
  }else{
    return false;
  }
  }
}
