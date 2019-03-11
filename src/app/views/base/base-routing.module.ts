import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitieListComponent } from './activitie/activitie-list/activitie-list.component';
import { FormatDetailComponent } from './format/format-detail/format-detail.component';
import { AuditAppliedRunComponent } from './audit/audit-applied-run/audit-applied-run.component';
import { PlanningListComponent } from './planning/planning-list/planning-list.component';
import { ProgramDetailComponent } from './program/program-detail/program-detail.component';
import { AuditDetailComponent } from './audit/audit-detail/audit-detail.component';
import { AreasDetailComponent } from './areas-detail/areas-detail.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { FormatListComponent } from './format/format-list/format-list.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { AuditListRunComponent } from './audit/audit-list-run/audit-list-run.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';
import { FormatNewComponent } from './format/format-new/format-new.component';
import { FormatUpdateComponent } from './format/format-update/format-update.component';
import { ProgramNewComponent } from './program/program-new/program-new.component';
import { ProgramUpdateComponent } from './program/program-update/program-update.component';
import { AuditListComponent } from './audit/audit-list/audit-list.component';
import { AuditNewComponent } from './audit/audit-new/audit-new.component';
import { AuditUpdateComponent } from './audit/audit-update/audit-update.component';
import { InformListComponent } from './inform/inform-list/inform-list.component';
import { InformEditComponent } from './inform/inform-edit/inform-edit.component';
import { InformDetailComponent } from './inform/inform-detail/inform-detail.component';













const routes: Routes = [


  {path:'audits/areas', component: AreasDetailComponent },
  {path:'audits/question', component: QuestionListComponent },
  {path:'audits/question-new', component: QuestionNewComponent, data: {
    title: 'Nueva Pregunta'
  }},
  {path:'audits/question/:id', component: QuestionDetailComponent },
  {path:'audits/question-update/:id', component: QuestionUpdateComponent },

  {path:'audits/format', component: FormatListComponent },
  {path:'audits/format-new', component: FormatNewComponent },
  {path:'audits/format/:id', component: FormatDetailComponent },
  {path:'audits/format-update/:id', component: FormatUpdateComponent , data: {
    title: 'Editar'
  }},

  {path:'audits/program', component: ProgramListComponent },
  {path:'audits/program-new', component: ProgramNewComponent },
  {path:'audits/program/:id', component: ProgramDetailComponent, data: {
    title: 'Programa'
  } },
  {path:'audits/program-update/:id', component: ProgramUpdateComponent },

  {path:'audits/audit', component: AuditListComponent },
  {path:'audits/:idprogram/audit-new', component: AuditNewComponent },
  {path:'audits/audit/:id', component: AuditDetailComponent },
  {path:'audits/audit-update/:id', component: AuditUpdateComponent },

  {path:'audits/list-run', component: AuditListRunComponent },
  {path:'audits/list-run-applied/:id', component: AuditAppliedRunComponent },

  {path:'audits/inform', component: InformListComponent },
  {path:'audits/inform/inform-edit/:id', component: InformEditComponent },
  {path:'audits/inform/inform-detail/:id', component: InformDetailComponent },


  {
    path: '',
    data: {
      title: 'Audits'
    },
    children: [
      {
        path: 'areas',
        component: AreasDetailComponent,
        data: {
          title: 'areas'
        }
      },

      {
        path: 'question',
        component: QuestionListComponent,
        data: {
          title: 'Preguntas'
        }
      },


      {
        path: 'formatos',
        component: FormatListComponent,
        data: {
          title: 'Formatos'
        }
      },




      {
        path: 'planeacion',
        component: PlanningListComponent,
        data: {
          title: 'Planeacion'
        }
      },
      {
        path: 'programas',
        component: ProgramListComponent,
        data: {
          title: 'Programas'
        }
      },
      {
        path: 'auditoria',
        component: AuditListRunComponent,
        data: {
          title: 'Auditoria'
        }
      },
      {
        path: 'inform',
        component: InformListComponent,
        data: {
          title: 'informes'
        }
      },








    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
export const appRoutingProviders: any[] = [];
export const APP_ROUTING = RouterModule.forRoot(routes);
