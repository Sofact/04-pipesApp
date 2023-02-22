import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  miFormUsuario: FormGroup = this.fb.group(
    {
      email: ['asdf@qgsd.com', [Validators.required, Validators.email]],
      password: ['asdfsdfa', [Validators.required, Validators.minLength(6)]],
    }
  );
  constructor( private fb: FormBuilder,
                private router: Router) { }

  ngOnInit(): void {
  }

  login(){
  
    console.log(this.miFormUsuario.value);
    this.router.navigateByUrl('/dashboard');
    
  }

}
