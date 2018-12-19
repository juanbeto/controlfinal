import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';

import { MatrizriesgoComponent } from './matriz_riesgo/matrizriesgo.component';
import { PoliticariesgoComponent } from './politica/politicariesgo.component';
import { ValoracionriesgoComponent } from './valoracion/valoracionriesgo.component';
import { SeguimientomonitoreoComponent } from './seguimiento/seguimientomonitoreo.component';
import { ContextoestrategicoComponent } from './contexto_estrategico/contextoestrategico.component';
import { IdentificacionriesgoComponent } from './identificacion_riesgo/identificacionriesgo.component';
import { AnalisisriesgoComponent } from './analisis_riesgos/analisisriesgo.component';
import { PoliticaComponent } from './politica/politica.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { UpdateComponent } from './identificacion_riesgo/identificacion_actualizar/update/update.component';


// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    
    ValoracionriesgoComponent,
    MatrizriesgoComponent,
    PoliticariesgoComponent,
    SeguimientomonitoreoComponent,
    ContextoestrategicoComponent,
    IdentificacionriesgoComponent,
    AnalisisriesgoComponent,
    PoliticaComponent,
    SeguimientoComponent,
      UpdateComponent
  ]
})
export class ButtonsModule { }
