import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform( text : string, enMayusculas: boolean= true): string{
    
        return (enMayusculas) ? text.toUpperCase() : text.toLowerCase(); 
      
    }
}