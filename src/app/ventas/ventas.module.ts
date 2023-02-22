import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { CalendarModule } from 'primeng/calendar';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { TabViewModule } from 'primeng/tabview';
import { ResumenComponent } from './pages/basicos/resumen/resumen.component';
import { VentasComponent } from './pages/basicos/ventas/ventas.component';
import { PerfilComponent } from './pages/basicos/perfil/perfil.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { SharedModule } from "../shared/shared.module";
import { RegistroComponent } from './registro/registro/registro.component';


@NgModule({
    declarations: [
        NumerosComponent,
        NoComunesComponent,
        BasicosComponent,
        OrdenarComponent,
        MayusculasPipe,
        VuelaPipe,
        OrdenarPipe,
        ResumenComponent,
        VentasComponent,
        PerfilComponent,
        RegistroComponent
    ],
    exports: [
        NumerosComponent,
        NoComunesComponent,
        BasicosComponent,
        OrdenarComponent,
        TabViewModule,
        ResumenComponent
    ],
    imports: [
        CalendarModule,
        PrimeNgModule,
        TabViewModule,
        VentasRoutingModule,
        SharedModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
        
    ]
})
export class VentasModule { }
