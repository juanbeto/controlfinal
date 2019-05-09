import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ValoracionriesgoComponent } from './valoracion/valoracionriesgo.component';
import { ContextoestrategicoComponent } from './contexto_estrategico/contextoestrategico.component';
import { IdentificacionriesgoComponent } from './identificacion_riesgo/identificacionriesgo.component';

import { MatrizriesgoComponent } from './matriz_riesgo/matrizriesgo.component';
import { PoliticariesgoComponent } from './politica/politicariesgo.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AnalisisriesgoComponent } from './analisis_riesgos/analisisriesgo.component';

import { InsertRisksComponent } from './identificacion_riesgo/insert-risks/insert-risks.component';
import { RiskPoliticsComponent } from './politica_de_riesgo/risk-politics/risk-politics.component';
import { UploadfileComponent } from './politica_de_riesgo/uploadfile/uploadfile.component';
import { UpdateFactorsComponent } from './identificacion_riesgo/update-factors/update-factors.component';
import { InsertFactorsComponent } from './identificacion_riesgo/insert-factors/insert-factors.component';
import { UpdateComponent } from './identificacion_riesgo/identificacion_actualizar/update_Risks/update.component';

const routes: Routes = [

 
  {path:'risks/riesgo/', component: IdentificacionriesgoComponent, data: {
    title: 'Identificacion_Riesgo'
  }},
  {path:'risks/riesgo/insertFactor', component: InsertFactorsComponent, data: {
    title: 'Crear Factor'
  } },

  {path:'risks/riesgo/insert', component: InsertRisksComponent, data: {
    title: 'Nuevo'
  } },

  {path:'risks/riesgo/upload', component: UploadfileComponent, data: {
    title: 'Subir_Archivo'
  }},
  
  {path:'risks/riesgo/:id', component: UpdateComponent, data: {
    title: 'Editar'
  }},
  {path:'risks/riesgo/factor_update/:id', component: UpdateFactorsComponent, data: {
    title: 'Editar Factor'
  } },

  

  {path:'risks/riesgo/', component: IdentificacionriesgoComponent, data: {
    title: 'Identificacion_Riesgo'
  }},

 

  
  

  {
    path: '',
    data: {
      title: 'Riesgos'
    },
    children: [

      {
        path: 'politica',
        component: RiskPoliticsComponent,
        data: {
          title: 'Politica del Riesgo'
        }
    },
     
        {
          path: 'valoracion',
          component: ValoracionriesgoComponent,
          data: {
            title: 'Valoracion Riesgo'
          }
      },

      {
        path: 'contexto_estrategico',
        component: ContextoestrategicoComponent ,
        data: {
          title: 'contexto estrategico'
        }
    },

    {
      path: 'identificacion_riesgo',
      component: IdentificacionriesgoComponent ,
      data: {
        title: 'identificacion riesgo'
      }
  },

  {
    path: 'analisis_riesgo',
    component: AnalisisriesgoComponent ,
    data: {
      title: 'analisis de riesgo'
    }
},

{
  path: 'matriz_riesgo',
  component: MatrizriesgoComponent ,
  data: {
    title: 'matriz de riesgo'
  }
},

{
  path: 'politica_riesgo',
  component: PoliticariesgoComponent ,
  data: {
    title: 'politicade riesgo'
  }
},

{
  path: 'seguimiento_riesgo',
  component: SeguimientoComponent ,
  data: {
    title: 'seguimiento'
  }
}


     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
export const appRoutingProviders: any[] = [];
export const APP_ROUTING = RouterModule.forRoot(routes);