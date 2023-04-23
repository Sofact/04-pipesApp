import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-clientes',
  templateUrl: './login-clientes.component.html'
})
export class LoginClientesComponent  {


  code:string | null='';

  miFormulario: FormGroup = this.fb.group(
    {
      email: ['test@test', [Validators.required, Validators.email]],
      password: ['admin123', [Validators.required, Validators.minLength(6)]],
    }
  );

constructor( private fb: FormBuilder,
             private authService: AuthService,
             private route: ActivatedRoute,
              private router: Router) {

                this.code =this.route.snapshot.paramMap.get('code');
/*
              console.log("Estamos bien");
                if(this.authService.isLogin()){
                  console.log("islogin");
                  this.router.navigate(['/registro/'+this.code]);
                }else{
                  console.log("No login");
                  this.router.navigate(['loginCliente/'+this.code]);

                 
                }
                */
              }
              
login(){

  if(this.code){

      this.authService.login(this.miFormulario.value.email, this.miFormulario.value.password)
      .subscribe(
        
        (resp: any) => {

        
        console.log(resp);
        if(!resp.error && resp){
          console.log("Ingreso al submit::::", resp);
          this.router.navigate(['/registro/'+this.code]);

        }else{
          if(resp.error.error == 'Unauthorized'){
          
            console.log("unauthorized")
          }
        }
        
          })

  }else{
        this.authService.login(this.miFormulario.value.email, this.miFormulario.value.password)
        .subscribe(
          
          (resp: any) => {

          
          console.log(resp);
          if(!resp.error && resp){
            console.log("Ingreso al submit::::", resp);
            this.router.navigate(['/userDashboard']);

          }else{
            if(resp.error.error == 'Unauthorized'){
            
              console.log("unauthorized")
            }
          }
          
        })
  }
  
}



}
