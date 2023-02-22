import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

    transform( volador : boolean): string{
    
        return (volador) ? 'vuela' : 'no vuela'; 
      
    }
}