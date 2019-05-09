import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanNewComponent } from './plan-new/plan-new.component';
import { PlanUpdateComponent } from './plan-update/plan-update.component';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule
  ],
  declarations: [ ChartJSComponent, PlanListComponent,  PlanUpdateComponent ]
})
export class ChartJSModule { }
