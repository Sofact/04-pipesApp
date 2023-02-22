import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComisionAfiliadoComponent } from '../configuracion/comision-afiliado/comision-afiliado.component';
import { ComisionLineaComponent } from '../configuracion/comision-linea/comision-linea.component';
import { ComisionMarcaComponent } from '../configuracion/comision-marca/comision-marca.component';
import { ComisionProductoComponent } from '../configuracion/comision-producto/comision-producto.component';
import { ComisionComponent } from '../configuracion/comision/comision.component';
import { GruposComponent } from '../configuracion/grupos/grupos.component';
import { ObjetivosComponent } from '../configuracion/objetivos/objetivos.component';
import { BasicosComponent } from '../ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from '../ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from '../ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from '../ventas/pages/ordenar/ordenar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  
   {
    path: '',
    children: [
      { path: '', component:DashboardComponent}
    ]
  },
  {
    path:'basicos',
    //component: LoginComponent
    loadChildren: () => import ('../ventas/ventas.module').then ( m => m.VentasModule)
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
    path: 'objetivos',
    component: ObjetivosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
    
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
