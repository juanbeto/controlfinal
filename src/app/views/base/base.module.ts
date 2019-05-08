// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
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
  MatTreeModule,MatFormFieldModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Forms Component




// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';


// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';


// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';


// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';


// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NgxEditorModule } from 'ngx-editor';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { ActivitieListComponent } from './activitie/activitie-list/activitie-list.component';
import { FormatDetailComponent } from './format/format-detail/format-detail.component';
import { AuditAppliedRunComponent } from './audit/audit-applied-run/audit-applied-run.component';
import { PlanningListComponent } from './planning/planning-list/planning-list.component';
import { ProgramDetailComponent } from './program/program-detail/program-detail.component';
//import { PlanningNewComponent } from './planning/planning-new/planning-new.component';
import { PlanningUpdateRunComponent } from './planning/planning-update-run/planning-update-run.component';
import { AreasDetailComponent } from './areas-detail/areas-detail.component';
import { ActivitieUpdateComponent } from './activitie/activitie-update/activitie-update.component';
import { ActivitieNewComponent } from './activitie/activitie-new/activitie-new.component';
import { PlanningListRunComponent } from './planning/planning-list-run/planning-list-run.component';
import { AuditListComponent } from './audit/audit-list/audit-list.component';
import { AuditDetailComponent } from './audit/audit-detail/audit-detail.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormatListComponent } from './format/format-list/format-list.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { AuditListRunComponent } from './audit/audit-list-run/audit-list-run.component';
import { AppComponent } from '../../app.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';
import { FormatNewComponent } from './format/format-new/format-new.component';
import { FormatUpdateComponent } from './format/format-update/format-update.component';
import { ProgramNewComponent } from './program/program-new/program-new.component';
import { ProgramUpdateComponent } from './program/program-update/program-update.component';
import { AuditNewComponent } from './audit/audit-new/audit-new.component';
import { AuditUpdateComponent } from './audit/audit-update/audit-update.component';
import { PlanningUpdateComponent } from './planning/planning-update/planning-update.component';
import { InformListComponent } from './inform/inform-list/inform-list.component';
import { InformEditComponent } from './inform/inform-edit/inform-edit.component';
import { InformDetailComponent } from './inform/inform-detail/inform-detail.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),NgxEditorModule,MatSelectModule
  ],
  declarations: [

    ActivitieListComponent,
    FormatDetailComponent,
    AuditAppliedRunComponent,
    PlanningListComponent,
    ProgramDetailComponent,

    AreasDetailComponent,
    ActivitieUpdateComponent,
    ActivitieNewComponent,
    PlanningListRunComponent,
    AuditListComponent,
    AuditDetailComponent,
    AreasDetailComponent,
    QuestionListComponent,
    FormatListComponent,
    ProgramListComponent,
    AuditListRunComponent,

    AreasDetailComponent,
    QuestionNewComponent,
    QuestionDetailComponent,
    QuestionUpdateComponent,
    QuestionListComponent,
    FormatListComponent,
    FormatDetailComponent,
    FormatNewComponent,
    FormatUpdateComponent,
    ProgramListComponent,
    ProgramNewComponent,
    ProgramUpdateComponent,
    ProgramDetailComponent,
    AuditListComponent,
    AuditNewComponent,
    AuditDetailComponent,
    AuditUpdateComponent,
    PlanningListComponent,
    ActivitieListComponent,
    ActivitieNewComponent,
    ActivitieUpdateComponent,
    InformListComponent,
    InformEditComponent,
    InformDetailComponent
  ],
  entryComponents: [ AreasDetailComponent ],
})
export class BaseModule { }
