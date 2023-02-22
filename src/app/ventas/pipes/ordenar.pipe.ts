import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor: string = 'sin valor'): Heroe[] {

    
    if(orderPor === 'sin valor'){
    
        return heroes;
    }else{

      heroes = heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1: -1);
      return heroes;
    }
  }

}
