import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { audit } from '../../../../models/index_audit';
import { AuditService } from '../../../../services/audits/audit.service';
import { PlanningService } from '../../../../services/audits/planning.service';
import { ActivitiesService } from '../../../../services/audits/activities.service';

@Component({
  selector: 'app-audit-new',
  templateUrl: './audit-new.component.html',
  styleUrls: ['./audit-new.component.css']
})
export class AuditNewComponent implements OnInit {

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
  public _audit = new audit(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'nul1l',Date.now(),null,null,null);

  //@Input() public programa: program;

  constructor(    private _route: ActivatedRoute,
      private _router: Router,
      private _auditService: AuditService,) {
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
  }




  onSubmit(_audit: audit){
    this._route.params.subscribe(
      params => {
        let id = +params['idprogram'];
        _audit.ID_PROGRAM =id;
        _audit.APPROVED = '1';
        _audit.GLOBAL = '1';
        _audit.MECI = '';
        _audit.NUMERALS = '';
        _audit.CLOSED = '0';
        this._auditService.create(_audit).subscribe(
          response => {
            console.log(response);
            this._audit = response.audit;
            console.log(this._audit);
            this._router.navigate(['base/audits/audit/'+this._audit.ID]);
          },
          error => {
            console.log(<any>error);
          }
        );
      }
  }
}
