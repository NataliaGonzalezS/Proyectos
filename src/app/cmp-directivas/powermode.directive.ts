import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPowermode]'
})
export class PowermodeDirective {

  @HostBinding('style.color')color:string;
  @HostBinding('style.marginTop')margen:string;
  @HostBinding('style.marginLeft')margen2:string;
  colores:Array<string>;
 

  constructor() {
    this.margen="10px";
    this.margen2="0px";
    this.color="blue";
    this.colores=['green','purple','black'];
   }

   @HostListener("input")cambiarcolor(){
     let random=Math.floor(Math.random()*this.colores.length);
    this.color=this.colores[random];

    this.margen="50px";
    this.margen2="10px";
    setTimeout(()=>{

      this.margen="10px";
      this.margen2="0px";

    },100);
    
   }

  
}
