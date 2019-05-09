import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';
import { PlanListComponent } from './plan-list/plan-list.component';

const routes: Routes = [
  {
    path: '',
    
    data: {
      title: 'Plan de Mejoramiento'
    
  },
  children: [
    {
      path: 'planes_mejoramiento',
      component: PlanListComponent,
      data: {
        title: 'Planes de Mejoramiento'
      }
    }

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule {}
