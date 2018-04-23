import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: any, args:string , args2:any): any {

   // let exp=new RegExp(args, "gi");
   // value = value.replace(exp,args2 );

    let res = value;
    for(let i of args){

      let exp = new RegExp(i,"g");
      res = res.replace(exp, '*'.repeat(i.length));
    }

    return res;
    //return value;
  }

}
