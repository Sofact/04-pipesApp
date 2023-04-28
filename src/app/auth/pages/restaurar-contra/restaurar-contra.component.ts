import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurar-contra',
  templateUrl: './restaurar-contra.component.html'
})
export class RestaurarContraComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group(
    {
      email: ['test@test', [Validators.required, Validators.email]],
      password: ['admin123', [Validators.required, Validators.minLength(6)]],
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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

login(){


  
  this.authService.login(this.miFormulario.value.email, this.miFormulario.value.password)
  .subscribe(
    
    (resp: any) => {

    
    console.log(resp);
    if(!resp.error && resp){
      console.log("Ingreso al submit::::", resp);
      this.router.navigate(['/dashboard']);

    }else{
      if(resp.error.error == 'Unauthorized'){
        Swal.fire( 'Error','El correo o contraseña ingresados son incorrectos <br><a href="#">Olvidaste tu contraseña?</a>', 'error');
        console.log("unauthorized")
      }
    }
    
      })

  
  
}


}
