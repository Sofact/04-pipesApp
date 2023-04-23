import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginClientesComponent } from './pages/login-clientes/login-clientes.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  
  {
    path: '', 
    component:MainComponent,
    children: [
      
      { path: 'login', component: LoginComponent },
      { path: 'loginCliente/:code', component: LoginClientesComponent },
      { path: 'loginCliente', component: LoginClientesComponent },
      { path: 'registro', component: RegisterComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
