import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  num: number;
  cadena:string;
  holamundo: Array<string>;
  fecha: Date;
  cadena2:string;
  mensaje;
  

  constructor() { 

      this.num=7;
      this.cadena="Esta es una cadena";
      this.holamundo=['perro', 'gato'];
      this.mensaje = new Promise<string>((resolve)=>{

        setTimeout(()=> {
          resolve('un mensaje muy importante...');
        },2000);
      });

      this.fecha = new Date(2000,3,13);
      this.cadena2 = "Escuchad mis palabras, sed testigos de mi juramento ... La noche se avecina, ahora empieza mi guardia. No terminará hasta el día de mi muerte. No tomaré esposa, no poseeré tierras, no engendraré hijos. No llevaré corona, no alcanzaré la gloria. Viviré y moriré en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro. Soy el fuego que arde contra "
      
  }

  addholamundo(nuevoholamundo){

    this.holamundo.push(nuevoholamundo);
  }

  ngOnInit() {
  }

}
