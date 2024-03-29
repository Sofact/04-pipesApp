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

  async solicitarCamara() {
    try {
      // Obtén acceso a los dispositivos multimedia
      const dispositivos = await navigator.mediaDevices.getUserMedia({ video: true });
  
      // La cámara está activa, haz algo aquí
      console.log('Cámara activa:', dispositivos);

      this.abrirCamara();
    } catch (error) {
      // No se pudo obtener acceso a la cámara
      console.error('No se pudo obtener acceso a la cámara:', error);
    }
  }
  async abrirCamara() {
    try {
      // Obtén acceso a los dispositivos multimedia
      const dispositivos = await navigator.mediaDevices.getUserMedia({ video: true });
  
      // Obtén el elemento HTML donde se mostrará la vista previa de la cámara
      const video = document.getElementById('video') as HTMLVideoElement;
  
      // Asigna la referencia de la cámara al elemento HTML
      video.srcObject = dispositivos;
  
      // Reproduce la vista previa de la cámara
      video.play();
    } catch (error) {
      // No se pudo obtener acceso a la cámara
      console.error('No se pudo obtener acceso a la cámara:', error);
    }
  }
  

}
