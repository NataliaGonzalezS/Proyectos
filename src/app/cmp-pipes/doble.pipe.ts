import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, args:number, args2:number=0): any {

    
    return value*args+args2;
  }

}


