import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraficoPastelComponent } from './grafico-pastel/grafico-pastel.component';
import { GraficoTotalComponent } from './grafico-total/grafico-total.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    SidebarComponent, 
    GraficoPastelComponent, GraficoTotalComponent
  ],
  exports: [
    NavbarComponent, 
    SidebarComponent,
    GraficoPastelComponent,
    GraficoTotalComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
