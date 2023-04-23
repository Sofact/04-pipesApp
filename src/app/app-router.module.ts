import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';

import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { ComisionComponent } from './configuracion/comision/comision.component';
import { GruposComponent } from './configuracion/grupos/grupos.component';
import { ObjetivosComponent } from './configuracion/objetivos/objetivos.component';
import { ComisionAfiliadoComponent } from './configuracion/comision-afiliado/comision-afiliado.component';
import { ComisionProductoComponent } from './configuracion/comision-producto/comision-producto.component';
import { ComisionMarcaComponent } from './configuracion/comision-marca/comision-marca.component';
import { ComisionLineaComponent } from './configuracion/comision-linea/comision-linea.component';
import { VentasComponent } from './ventas/pages/basicos/ventas/ventas.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { PerfilComponent } from './ventas/pages/basicos/perfil/perfil.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { TaxComponent } from './administracion/pages/tax/tax.component';
import { CodificacionComponent } from './administracion/pages/codificacion/codificacion.component';
import { RegistroComponent } from './ventas/registro/registro/registro.component';
import { DashboardComponent } from './usuario/dashboard/dashboard.component';
import { VentasUsuarioComponent } from './ventas/pages/ventas-usuario/ventas-usuario.component';
import { PagosComponent } from './pagos/pagos.component';
import { PresentacionComponent } from './administracion/pages/codificacion/presentacion/presentacion.component';
import { AppMainComponent } from './app.main/app.main.component';

const routes: Routes = [


  {
    path:'auth',
    //component: LoginComponent
    loadChildren: () => import ('./auth/auth.module').then ( m => m.AuthModule)
  },
 
  { path: '', component: AppMainComponent,
  children: [
    {
      path:'dashboard',
      loadChildren: () => import ('./protected/protected.module').then ( m => m.ProtectedModule)
    },
  
    { path: 'basicos', component: BasicosComponent },  
    { path: 'perfil', component: PerfilComponent },
    { path: 'numeros', component: NumerosComponent },
    { path: 'no-comunes', component: NoComunesComponent },
    { path: 'ordenar', component: OrdenarComponent },
    { path: 'comision', component: ComisionComponent },
    { path: 'comisionAfiliado', component: ComisionAfiliadoComponent },
    { path: 'comisionProducto', component: ComisionProductoComponent },
    { path: 'comisionMarca', component: ComisionMarcaComponent },
    { path: 'comisionLinea', component: ComisionLineaComponent },
    { path: 'grupos', component: GruposComponent },
    { path: 'objetivos', component: ObjetivosComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'parametros', component: AdministracionComponent, 
    data: {
        reuseComponent: true
      }
    },
    { path: 'presentacion', component: PresentacionComponent },
    { path: 'codificacion', component: CodificacionComponent },
    { path: 'tax',component: AdministracionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'userDashboard', component: DashboardComponent },
    { path: 'ventasUsuario/:id/:nombre', component: VentasUsuarioComponent },
    { path: 'pagos',component: PagosComponent },
    { path: 'registro/:code',component: RegistroComponent }
    
  ]
  
  },
  { path: '**', redirectTo: '' }
/*  {
    path:'dashboard',
    loadChildren: () => import ('./protected/protected.module').then ( m => m.ProtectedModule)
  },*/
 /*
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: 'comision',
    component: ComisionComponent
  },
  {
    path: 'comisionAfiliado',
    component: ComisionAfiliadoComponent
  },
  {
    path: 'comisionProducto',
    component: ComisionProductoComponent
  },
  {
    path: 'comisionMarca',
    component: ComisionMarcaComponent
  },
  {
    path: 'comisionLinea',
    component: ComisionLineaComponent
  },
  
  {
    path: 'grupos',
    component: GruposComponent
  },
  {
    path: 'objetivos',
    component: ObjetivosComponent
  },
  {
    path: 'ventas',
    component: VentasComponent
  },
  {
    path: 'parametros',
    component: AdministracionComponent,
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'presentacion',
    component: PresentacionComponent
  },
  {
    path: 'codificacion',
    component: CodificacionComponent
  },
  {
    path: 'tax',
    component: AdministracionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'userDashboard',
    component: DashboardComponent
  },
  {
    path: 'ventasUsuario/:id/:nombre',
    component: VentasUsuarioComponent
  },
  {
    path: 'pagos',
    component: PagosComponent
  },

  {
    path: '**',
    redirectTo: ''
  }*/
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot( routes,{onSameUrlNavigation: 'reload'})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
