import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  colorLetra:string;
  centrado:boolean;
  mostrar:boolean;
  items:Array<string>;
  mascota:string;

  constructor() {

    this.colorLetra='blue';
    this.centrado=true;
    this.mostrar=true;
    this.items=["Item1","Item2","Item3"];
    this.mascota="perro";
    
   }


  ngOnInit() {
  }


  getStyle(){

    return{

      color:'white',
      backgroundColor:'green'
    };
  }

  mover(){

    this.centrado=!this.centrado;
    
  }

  cambiarMostrar(){

    this.mostrar = !this.mostrar;
  }

}
