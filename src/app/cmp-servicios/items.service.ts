
import {LogService} from './log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ItemsService {

  emitirEvento;
  items:Array<string>;
  constructor(private logService: LogService) {

    this.items =['Item1', 'Item2', '  Item3'];
    this.emitirEvento=new EventEmitter<string>();

   }

  guardarItem(item){
    this.logService.mostrarEnConsola('Se ha guardado el item: '+item);
    this.items.push(item);
  }

  getItems(){

    return this.items;
  }

  emitirMensaje(mensaje){
    this.emitirEvento.emit(mensaje);
  }

  
 
}
