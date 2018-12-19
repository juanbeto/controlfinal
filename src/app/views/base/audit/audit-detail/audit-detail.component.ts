import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditplanning, auditactivities, auditformat, audit } from '../../../../models/index_audit';
import { FormatService } from '../../../../services/audits/format.service';
import { AuditService } from '../../../../services/audits/audit.service';
import { PlanningService } from '../../../../services/audits/planning.service';
import { ActivitiesService } from '../../../../services/audits/activities.service';

@Component({
  selector: 'app-audit-detail',
  templateUrl: './audit-detail.component.html',
  styleUrls: ['./audit-detail.component.css']
})
export class AuditDetailComponent implements OnInit {

  public label_title: string;
  public label_id: string;
  public label_id_program: string;
  public label_name: string;
  public label_objective: string;
  public label_id_user_manager: string;
  public label_id_user_resposible: string;
  public label_begin: string;
  public label_end: string;
  public label_scope: string;
  public label_name_process: string;
  public label_criteria: string;
  public label_observations: string;
  public label_approved: string;
  public label_global: string;
  public label_numerals: string;
  public label_meci: string;
  public actions: string;

  public status: string;
  public status_message: string;
  public _audit = new audit(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  public activities: auditactivities;
  public plannings: auditplanning;

  public format = new auditformat(null,null,null,null,'_PlanAuditIntern');

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _formatService: FormatService,
    private _auditService: AuditService,
    private _planningService: PlanningService,
    private _activitiesService: ActivitiesService
  ) {
    this.label_title = 'Lista de Auditorias';
    this.label_id = '#';
    this.label_name = 'Nombre';
    this.label_id_program = 'Inicio';
    this.label_objective= 'Objetivos';
    this.label_id_user_manager = 'Alcance';
    this.label_id_user_resposible = 'Responsables';
    this.label_begin = 'Inicio';
    this.label_end = 'Periodo';
    this.label_scope = 'Alcance';
    this.label_name_process = 'Nombre del proceso';
    this.label_criteria = 'Criterio';
    this.label_observations = 'Observaciones';
    this.label_approved = 'Aprobado';
    this.label_global = 'Global';
    this.label_numerals = 'Numerales';
    this.label_meci = 'MECI';
    this.actions = 'Acciones';
  }

  ngOnInit() {
    console.log('audit.detail component cargado correctamente');
    this.getFormat();
    this.getAudit();
  }

  getFormat(){
    this._formatService.getFormatBy(this.format).subscribe(
      response=>{
        this.format = response.formats[0];
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  getAudit(){
    this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this._auditService.getAudit(id).subscribe(
          response => {
            if(response.status == 'success'){
              this._audit = response.audit;
              console.log(this._audit);
              this.getActivities();
              this.getPlannings();
            }else{
              this._router.navigate(['audits/program']);
            }
          },
          error => {
            console.log(<any>error);
          }
        );
      }
    );
  }

  getActivities(){
    this._activitiesService.getActivitiesByAudit(this._audit.ID).subscribe(
      response =>{
        if(response.status == 'success'){
          this.activities = response.activities;
        }
      },
      error=>{
          console.log(error);
      }
    );
  }

  getPlannings(){
    this._planningService.getPlanningsByAudit(this._audit.ID).subscribe(
      response =>{
        if(response.status == 'success'){
          this.plannings = response.plannings;
        }
      },
      error=>{
          console.log(error);
      }
    );
  }

}
