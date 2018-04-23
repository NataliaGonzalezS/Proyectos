import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {


 @Input() nombre:string;
 @Input() apellido:string;
 disabled:boolean;
 @Output() miEvento;

 
 constructor() {
   
   this.miEvento = new EventEmitter<string>();
    this.nombre ="Natalia";
    this.apellido = "Gonzalez";
    this.disabled =false;
   }
  
  ngOnInit() {
  }

  habilitarEdicion(){

    this.disabled = !this.disabled;
    this.miEvento.emit(`Se ha ${this.disabled ? 'deshabilitado':'habilitado'} la edicion`);
  }

  nombreCompleto(){

    return this.nombre+''+this.apellido;
  }

  cambiarNombreCompleto(nombreCompleto){

    let nombreYApellidos = nombreCompleto.split(" ");
    this.nombre = nombreYApellidos.shift();
    this.apellido = nombreYApellidos.join('');
  }
}