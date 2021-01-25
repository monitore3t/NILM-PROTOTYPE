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

  constructor(private elementService: ElementService, private db: AngularFirestore) { }

  ngOnInit(): void {

    this.elementService.getElementos()
    .subscribe( dispositivos => {
      this.dispositivos = dispositivos;
    });

    this.db.collection('nilm-prototype').valueChanges()
    .pipe(
      map( (resp: Elemento[]) => resp.map( ({name, potencia, tiempo}) => ({ name, value: potencia, tiempo}) ))
    )
    .subscribe( elementos => {

      this.elementos = elementos;
      
    });
  }

}
