import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure:false
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let res=[];

    for(let holamundo of value){

      if (holamundo.match('^.*'+args+'.*$')) {
        res.push(holamundo);
      }
    }

    return res;
  }

}
