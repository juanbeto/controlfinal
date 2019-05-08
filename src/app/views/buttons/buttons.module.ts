import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { RisksService } from '../../services/risks/risks.service';
import { InsertFuncionaryComponent } from './analisis_riesgos/insert-funcionary/insert-funcionary.component';
import { CalificationComponent } from './analisis_riesgos/calification/calification.component';


// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';


// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { RiskPoliticsComponent } from './politica_de_riesgo/risk-politics/risk-politics.component';
import { UploadfileComponent } from './politica_de_riesgo/uploadfile/uploadfile.component';
import { InsertFactorsComponent } from './identificacion_riesgo/insert-factors/insert-factors.component';
import { UpdateFactorsComponent } from './identificacion_riesgo/update-factors/update-factors.component';
import { UpdateComponent } from './identificacion_riesgo/identificacion_actualizar/update_Risks/update.component';
import { NewMatrizCausesComponent } from './identificacion_riesgo/new-matriz-causes/new-matriz-causes.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule,MatCardModule, MatList } from '@angular/material';
import { FactorCalificationComponent } from './identificacion_riesgo/factor-calification/factor-calification.component';
import { FactorViewCalificationComponent } from './identificacion_riesgo/factor-view-calification/factor-view-calification.component';
import { FactorCalificationDetailComponent } from './identificacion_riesgo/factor-calification/factor-calification-detail/factor-calification-detail.component';
import { InsertRisksComponent } from './identificacion_riesgo/insert-risks/insert-risks.component';
import { NewCausesComponent } from './identificacion_riesgo/insert-risks/new-causes/new-causes.component';
import { NewConsecuencesComponent } from './identificacion_riesgo/insert-risks/new-consecuences/new-consecuences.component';
import { CalificarProbabilidadComponent } from './valoracion/calificar-probabilidad/calificar-probabilidad.component';


// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule, 
   
  
    AlertModule.forRoot(),
    ModalModule.forRoot()
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
      UpdateComponent,
      InsertFuncionaryComponent,
      CalificationComponent,
      RiskPoliticsComponent,
      UploadfileComponent,
      InsertFactorsComponent,
      UpdateFactorsComponent,
      FactorCalificationDetailComponent,
      InsertRisksComponent,
      NewCausesComponent,
      NewConsecuencesComponent,
      CalificarProbabilidadComponent 
      
     
  ],
  entryComponents: [FactorCalificationDetailComponent,UpdateFactorsComponent, InsertFactorsComponent,CalificarProbabilidadComponent,InsertRisksComponent,NewCausesComponent,NewConsecuencesComponent
   
  ],
 
 
})
export class ButtonsModule { }
