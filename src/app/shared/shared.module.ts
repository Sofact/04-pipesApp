import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableComponent } from './table/table.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { CustomerService } from './customer.service';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent,
    TableComponent
  ],
  imports: [

    PrimeNgModule,
    PanelMenuModule,
    MultiSelectModule,
    FormsModule,
    ProgressBarModule,
    HttpClientModule,
    CommonModule
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
