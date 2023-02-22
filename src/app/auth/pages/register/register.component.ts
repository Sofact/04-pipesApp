import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
  
})
export class RegisterComponent {

  miFormularioRegistro: FormGroup = this.fb.group(
    {
      nombreReg: ['', [Validators.required, Validators.minLength(4)]],
      emailReg: ['', [Validators.required, Validators.email]],
      passwordReg: ['', [Validators.required, Validators.minLength(6)]],
    }
  )
  constructor(private fb: FormBuilder,
              private router: Router) { }

  login(){
  
    
    console.log(this.miFormularioRegistro.valid);
    this.router.navigateByUrl('/auth/login');
  }

}
