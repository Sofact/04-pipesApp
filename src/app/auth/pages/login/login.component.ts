import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent {



  miFormulario: FormGroup = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }
    );

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               
                private router: Router) {
                
                  if(this.authService.isLogin()){
                    console.log("islogin");
                    this.router.navigate(['./basicos']);
                  }else{
                    console.log("No login");
                    
                   // this.router.navigate(['/userDashboard']);
                  }
                }

  login(){
  

    
    this.authService.login(this.miFormulario.value.email, this.miFormulario.value.password)
    .subscribe(
      
      (resp: any) => {

      
      console.log(resp);
      if(!resp.error && resp){
        console.log("Ingreso al submit::::", resp);

        if( this.isAdmin()){

          this.router.navigate(['/dashboard']);
        }else{
          Swal.fire( 'Atención','Usted no esta autorizado para acceder a este recurso, comuniquese con el Administrador', 'warning');
        }
       
        

      }else{
        if(resp.error.error == 'Unauthorized'){
          Swal.fire( 'Atención','El correo o contraseña ingresados son incorrectos <br><a href="/auth/restaurar">Olvidaste tu contraseña?</a>', 'warning');
          console.log("unauthorized")
        }
      }
      
        })

    
    
  }

  isAdmin(){
    console.log("ingreso a is admin", localStorage.getItem("role"));
  
    if(localStorage.getItem("role") == '1'){

      return true
    }else{
      return false;
    }
   
  }

}
