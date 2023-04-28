import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterDataComponent } from './pages/register-data/register-data.component';
import { LoginClientesComponent } from './pages/login-clientes/login-clientes.component';
import { DropdownModule } from 'primeng/dropdown';
import { RestaurarContraComponent } from './pages/restaurar-contra/restaurar-contra.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    RegisterDataComponent,
    LoginClientesComponent,
    RestaurarContraComponent
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    DropdownModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
