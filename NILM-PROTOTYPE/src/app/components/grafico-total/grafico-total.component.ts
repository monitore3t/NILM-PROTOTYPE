import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-grafico-total',
  templateUrl: './grafico-total.component.html',
  styleUrls: ['./grafico-total.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraficoTotalComponent  {

  @Input() results: any[] = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  animations: boolean = false;
  
  
  percentageFormatting(c) {
    return Math.round(c);
  }
  colorScheme = "vivid";

  constructor() {}

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
