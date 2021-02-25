import { Component, OnInit } from '@angular/core';
import { Elemento } from '../../interfaces/interfaces';
import { ElementService } from '../../services/element.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-electrodomesticos',
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.css']
})
export class ElectrodomesticosComponent implements OnInit {

  dispositivos: Elemento[] = [];
  dato1: string = "000"
  elementos: any[] = [];
  fecha: any;

  constructor(private elementService: ElementService, private db: AngularFirestore) { }

  ngOnInit(): void {

    this.elementService.getElementos()
    .subscribe( dispositivos => {
      this.dispositivos = dispositivos;
    });

    this.db.collection('nilm-prototype').valueChanges()
    .pipe(
      map( (resp: Elemento[]) => resp.map( ({banderaCon, banderaDes, consumo, copPotencia, desconexion, duracion, name, potencia, tiempo}) => ({ banderaCon, banderaDes, consumo, copPotencia, desconexion, duracion, name, value :potencia, tiempo}) ))
    )
    .subscribe( elementos => {

      this.elementos = elementos;
      
      this.dur(elementos);

      this.con(elementos);

    });

  }
  
  con(item){
    for (let index = 0; index < item.length; index++) {

      var fe = new Date();
      var unixTimeCon = item[index].tiempo.seconds;
      var dateCon = new Date(unixTimeCon*1000);

      var unixTimeDes = item[index].desconexion.seconds;
      var dateDes = new Date(unixTimeDes*1000);

      var hora = dateDes.getHours() - dateCon.getHours();

      var min = dateDes.getMinutes() - dateCon.getMinutes();

      var seg = dateDes.getSeconds() - dateCon.getSeconds();

      var time = new Date(fe.getFullYear(),fe.getMonth(),fe.getDate(),hora,min,seg);

      var total = time.getHours() + (time.getMinutes()/60) + (time.getSeconds()/3600);

      item[index].consumo = total*(item[index].copPotencia/1000);
      
    }
  }

  dur(item){

    for (let index = 0; index < item.length; index++) {

      var fe = new Date();
      var unixTimeCon = item[index].tiempo.seconds;
      var dateCon = new Date(unixTimeCon*1000);

      var unixTimeDes = item[index].desconexion.seconds;
      var dateDes = new Date(unixTimeDes*1000);

      var hora = dateDes.getHours() - dateCon.getHours();

      var min = dateDes.getMinutes() - dateCon.getMinutes();

      var seg = dateDes.getSeconds() - dateCon.getSeconds();

      item[index].duracion = new Date(fe.getFullYear(),fe.getMonth(),fe.getDate(),hora,min,seg);
    
    }
  }

}
