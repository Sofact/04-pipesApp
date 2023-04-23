import { Component, OnInit } from '@angular/core';
import { ViewComisionService } from 'src/app/services/view-comision.service';
import { ViewComision } from 'src/app/shared/models/ViewComision';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  userId: string ='';

  viewComision: ViewComision = {

                                comId: 0,
                                comEstado: '',
                                comFecha: new Date(),
                                comFechaPago: new Date(),
                                comValor: 0,
                                proId: 0,
                                proDescripcion: '',
                                usuId: 0, 
                            }


  constructor(
                private viewComisionService: ViewComisionService
              ) { }

  ngOnInit(): void {

    this.userId = JSON.parse(localStorage.getItem("id") ?? '');

    this.viewComisionService.getLastComision(this.userId)
      .subscribe((resultado: ViewComision)=>{
      
        this.viewComision = resultado;
        console.log("ViewComision", this.viewComision);

      })

  }

  


}
