import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group(
      {
        email: ['asdf@qgsd.com', [Validators.required, Validators.email]],
        password: ['asdfsdfa', [Validators.required, Validators.minLength(6)]],
      }
    );

  constructor( private fb: FormBuilder,
               private authService: AuthService,
                private router: Router) { }

  login(){
  
    console.log(this.miFormulario.value);
    this.router.navigateByUrl('comision');

    this.authService.login()
    .subscribe(response =>this.router.navigateByUrl('/userDashboard'));
    
  }

  

}
