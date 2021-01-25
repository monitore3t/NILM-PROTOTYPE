import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-pastel',
  templateUrl: './grafico-pastel.component.html',
  styleUrls: ['./grafico-pastel.component.css']
})
export class GraficoPastelComponent {

  @Input() results: any[] = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  explodeSlices: boolean = true;
  animations: boolean = true;
  labels: boolean = true;
  colorScheme = "forest";
  legend: boolean = true;
  legendTitle: string = 'Electrodomésticos'; 
  arcWidth: 0.5;

  constructor() {
    
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
