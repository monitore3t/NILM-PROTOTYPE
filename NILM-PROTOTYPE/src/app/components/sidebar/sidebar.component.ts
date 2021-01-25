import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  name: String = "Consumo Electrodomésticos";
  
  constructor() { }

  ngOnInit(): void {
  }

  cambioElemento(a: String)
  {
    if(a == "1"){
       this.name = "Consumo Electrodomésticos";
    } else{
       this.name = "Potencia Total";
    }

  }

}
