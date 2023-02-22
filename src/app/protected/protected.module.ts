import { NgModule } from '@angular/core';


import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";





@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        ProtectedRoutingModule,
        SharedModule
    ]
})
export class ProtectedModule { }
