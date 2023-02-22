import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
                private router: Router) { }

  login(){
  
    console.log(this.miFormulario.value);
    this.router.navigateByUrl('comision');
    
  }

  

}
