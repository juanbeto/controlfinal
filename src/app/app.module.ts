import { BrowserModule } from '@angular/platform-browser';
import{HttpModule}from "@angular/http";
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,MatFormFieldModule, MatOptionModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';






import { PlanningNewComponent } from './views/base/planning/planning-new/planning-new.component';
import { PlanningUpdateComponent } from './views/base/planning/planning-update/planning-update.component';
import { PlanningUpdateRunComponent } from './views/base/planning/planning-update-run/planning-update-run.component';
import { AreasDetailComponent } from './views/base/areas-detail/areas-detail.component';
import { LoginService } from './services/login.service';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewMatrizCausesComponent } from './views/buttons/identificacion_riesgo/new-matriz-causes/new-matriz-causes.component';
import { FactorViewCalificationComponent } from './views/buttons/identificacion_riesgo/factor-view-calification/factor-view-calification.component';
import { FactorCalificationComponent } from './views/buttons/identificacion_riesgo/factor-calification/factor-calification.component';
import { InsertRisksComponent } from './views/buttons/identificacion_riesgo/insert-risks/insert-risks.component';
import { PlanNewComponent } from './views/Planes_Mejoramiento/plan-new/plan-new.component';
import { UsersListComponent } from './views/login/users/users-list/users-list.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModalModule,
    HttpClientModule,
    MatCheckboxModule ,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpModule,
    MatSelectModule,
    MatOptionModule,
    NgbModule.forRoot()

  ],
  declarations: [


    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    PlanningNewComponent,
    PlanningUpdateComponent,
    PlanningUpdateRunComponent,
    NewMatrizCausesComponent,
    FactorViewCalificationComponent,
    FactorCalificationComponent,
    PlanNewComponent,
    UsersListComponent


  ],
  providers: [LoginService,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  entryComponents: [ FactorCalificationComponent, FactorViewCalificationComponent,
    NewMatrizCausesComponent, PlanningNewComponent, PlanningUpdateComponent,
     PlanningUpdateRunComponent,PlanNewComponent  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
