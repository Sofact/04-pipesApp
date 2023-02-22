import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterDataComponent } from './pages/register-data/register-data.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    RegisterDataComponent
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
