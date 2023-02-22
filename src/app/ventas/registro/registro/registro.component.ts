import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  date1!: Date;
  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>
  sexo: String[]=['Hombre', 'Mujer'];

  miFormulario: FormGroup = this.fb.group(
    {
      email: ['info@gmail.com', [Validators.required, Validators.email]],
      nombre: [' ', [Validators.required]],
      cedula: [' ', [ Validators.minLength(6)]],
      celular: [' ',[ Validators.minLength(10)]],
      date: [' ',[ Validators.required]]
      
    }
  );

constructor( private fb: FormBuilder,
              private router: Router) { }

              ngOnInit() {
                let today = new Date();
                let month = today.getMonth();
                let year = today.getFullYear();
                let prevMonth = (month === 0) ? 11 : month -1;
                let prevYear = (prevMonth === 11) ? year - 1 : year;
                let nextMonth = (month === 11) ? 0 : month + 1;
                let nextYear = (nextMonth === 0) ? year + 1 : year;
                this.minDate = new Date();
                this.minDate.setMonth(prevMonth);
                this.minDate.setFullYear(prevYear);
                this.maxDate = new Date();
                this.maxDate.setMonth(nextMonth);
                this.maxDate.setFullYear(nextYear);
        
                let invalidDate = new Date();
                invalidDate.setDate(today.getDate() - 1);
                this.invalidDates = [today,invalidDate];
            }
login(){

  console.log(this.miFormulario.value);
  this.router.navigateByUrl('comision');
  
}


}
