import { NgModule } from '@angular/core';

//Prime NG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
 
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
    CascadeSelectModule,
    DropdownModule,
    InputNumberModule

  ]
})
export class PrimeNgModule { }
