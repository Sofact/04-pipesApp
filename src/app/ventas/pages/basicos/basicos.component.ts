import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {

 nombreLower: string ='Julian';
 nombreUpper:string = 'JULIAN';
 nombreCompleto: string = 'jULIAn JaimEs';

 activeIndex1: number = 0;

 activeIndex2: number = 0;

 scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));
 
 fecha: Date= new Date();


}
