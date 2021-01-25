import { Component, OnInit } from '@angular/core';
import { Elemento } from '../../interfaces/interfaces';
import { ElementService } from '../../services/element.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})

export class TotalComponent implements OnInit {
  
  dispositivos: Elemento[] = [];
  
  elementos: any[] = [];

  tot: Number = 0;

  constructor(private elementService: ElementService, private db: AngularFirestore) { }

  ngOnInit(): void {

    this.elementService.getElementos()
    .subscribe( dispositivos => {
      this.dispositivos = dispositivos;
    });

    this.db.collection('nilm-prototype').valueChanges()
    .pipe(
      map( (resp: Elemento[]) => resp.map( ({name, potencia}) => ({ name, value: potencia}) ))
    )
    .subscribe( elementos => {

      this.elementos = elementos;
      
      for (let index = 0; index < this.elementos.length; index++) {
        const element = this.elementos[index].value;
        this.tot = this.tot + element;
      }

    });
  }

}
