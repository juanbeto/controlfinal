import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ValoracionriesgoComponent } from './valoracion/valoracionriesgo.component';
import { ContextoestrategicoComponent } from './contexto_estrategico/contextoestrategico.component';
import { IdentificacionriesgoComponent } from './identificacion_riesgo/identificacionriesgo.component';

import { MatrizriesgoComponent } from './matriz_riesgo/matrizriesgo.component';
import { PoliticariesgoComponent } from './politica/politicariesgo.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AnalisisriesgoComponent } from './analisis_riesgos/analisisriesgo.component';
import { UpdateComponent } from './identificacion_riesgo/identificacion_actualizar/update/update.component';

const routes: Routes = [

  {path:'risks/riesgo/:id', component: UpdateComponent, data: {
    title: 'Editar'
  }},

  {path:'risks/riesgo/', component: IdentificacionriesgoComponent, data: {
    title: 'Identificacion_Riesgo'
  }},


  

  {
    path: '',
    data: {
      title: 'Risks'
    },
    children: [
     
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