import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ImageModule } from 'primeng/image';

import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableComponent } from './table/table.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { CustomerService } from './customer.service';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { PoliticaComponent } from './politica/politica.component';

@NgModule({
  declarations: [
    MenuComponent,
    TableComponent,
    HomeComponent,
    HomeAdminComponent,
    PoliticaComponent
  ],
  imports: [

    PrimeNgModule,
    PanelMenuModule,
    MultiSelectModule,
    FormsModule,
    ProgressBarModule,
    HttpClientModule,
    CommonModule,
    ImageModule
  ],
  exports:[
    MenuComponent,
    TableComponent,
    PrimeNgModule,
    PanelMenuModule,
    MultiSelectModule,
    FormsModule,
    ProgressBarModule,
    HttpClientModule
  ],
  providers:[
  
    CustomerService,
    DatePipe
  ]
})
export class SharedModule { }
