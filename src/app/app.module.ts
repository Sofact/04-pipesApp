import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';



import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main/app.main.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CalendarModule } from 'primeng/calendar';
import Swal from 'sweetalert2';



//cambiar el idioma global de la app
import {LOCALE_ID} from '@angular/core';
import localEs from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { registerLocaleData } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { ComisionComponent } from './configuracion/comision/comision.component';
import { GruposComponent } from './configuracion/grupos/grupos.component';
import { ObjetivosComponent } from './configuracion/objetivos/objetivos.component';

import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

import { ComisionAfiliadoComponent } from './configuracion/comision-afiliado/comision-afiliado.component';
import { ComisionProductoComponent } from './configuracion/comision-producto/comision-producto.component';
import { ComisionMarcaComponent } from './configuracion/comision-marca/comision-marca.component';
import { ComisionLineaComponent } from './configuracion/comision-linea/comision-linea.component';
import { ComisionConvenioComponent } from './configuracion/comision-convenio/comision-convenio.component';
import { ComisionResumenComponent } from './configuracion/comision-resumen/comision-resumen.component';
import { ComisionValidarComponent } from './configuracion/comision-validar/comision-validar.component';
import { ComisionPagosComponent } from './configuracion/comision-pagos/comision-pagos.component';
import { DashboardComponent } from './usuario/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { AdministracionComponent } from './administracion/administracion.component';
import { TaxComponent } from './administracion/pages/tax/tax.component';
import { MarcasComponent } from './administracion/pages/marcas/marcas.component';
import { CodificacionComponent } from './administracion/pages/codificacion/codificacion.component';
import { GeneradorComponent } from './administracion/pages/codificacion/generador/generador.component';
import { ProductosComponent } from './administracion/pages/productos/productos/productos.component';

import { TableComponent } from './administracion/pages/productos/table/table.component';
import { TablePendientesComponent } from './usuario/dashboard/table-pendientes/table-pendientes.component';
import { TablePagadoComponent } from './usuario/dashboard/table-pagado/table-pagado.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { TableClientesComponent } from './ventas/pages/numeros/table-clientes/table-clientes.component';
import { VentasUsuarioComponent } from './ventas/pages/ventas-usuario/ventas-usuario.component';
import { PerfilComponent } from './ventas/pages/ventas-usuario/perfil/perfil.component';
import { TableVentasUsuarioComponent } from './ventas/pages/ventas-usuario/table-ventas-usuario/table-ventas-usuario.component';
import { TablePagosUsuarioComponent } from './ventas/pages/ventas-usuario/table-pagos-usuario/table-pagos-usuario.component';
import { PagosComponent } from './pagos/pagos.component';
import { PendientesComponent } from './pagos/pendientes/pendientes.component';
import { HistorialComponent } from './pagos/historial/historial.component';
import { PresentacionComponent } from './administracion/pages/codificacion/presentacion/presentacion.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { TopbarComponent } from './shared/topbar/topbar/topbar.component';
import { PerfilClienteComponent } from './usuario/dashboard/perfil-cliente/perfil-cliente.component';



registerLocaleData( localEs );
registerLocaleData( localFr );

@NgModule({
    declarations: [
        AppComponent,
        AppMainComponent,
        TopbarComponent,
        ComisionComponent,
        AdministracionComponent,
        CodificacionComponent,
        GeneradorComponent,
        TaxComponent,
        MarcasComponent,
        GruposComponent,
        ObjetivosComponent,
        ProductosComponent,
        TableComponent,
        ComisionAfiliadoComponent,
        ComisionProductoComponent,
        ComisionMarcaComponent,
        ComisionLineaComponent,
        ComisionConvenioComponent,
        ComisionResumenComponent,
        ComisionValidarComponent,
        ComisionPagosComponent,
        DashboardComponent,
        PerfilComponent,
        PresentacionComponent,
        TablePendientesComponent,
        TablePagadoComponent,
        NumerosComponent,
        TableClientesComponent,
        VentasUsuarioComponent,
        TableVentasUsuarioComponent,
        TablePagosUsuarioComponent,
        PagosComponent,
        PendientesComponent,
        HistorialComponent,
        PerfilClienteComponent
        
    ],
    exports: [
        SharedModule
    ],
    providers: [authInterceptorProviders
       // { provide: LOCALE_ID, useValue: 'es-CO' }
    ],
    bootstrap: [AppComponent],
    imports: [
        AutoCompleteModule,
        CalendarModule,
        CheckboxModule,
        CommonModule,
        ImageModule,
        RouterModule.forRoot([]),
        BrowserModule,
        BrowserAnimationsModule,
        AppRouterModule,
        SliderModule,
        VentasModule,
        ScrollPanelModule,
        SplitterModule,
        PrimeNgModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        CheckboxModule
    ]
}
)
export class AppModule { }
