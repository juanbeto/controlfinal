import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuditService } from '../../../../services/audits/audit.service';
import { PlanningService } from '../../../../services/audits/planning.service';
import { FormatService } from '../../../../services/audits/format.service';
import { audit } from '../../../../models/audit';
import { auditprogram } from '../../../../models/auditprogram';
import { auditformat } from '../../../../models/auditformat';


@Component({
  selector: 'app-audit-applied-run',
  templateUrl: './audit-applied-run.component.html',
  styleUrls: ['./audit-applied-run.component.css']
})
export class AuditAppliedRunComponent implements OnInit {

  public _audit: audit;
  public plannings: auditprogram;
  public label_id: string;
  public label_id_program:string;
  public label_title: string;
  public label_name: string;
  public label_id_user_manager: string;
  public label_id_user_resposible: string;
  public label_begin: string;
  public label_end: string;
  public label_scope: string;
  public label_name_process: string;



  public format = new auditformat(null,null,null,null,'_AuditPlan');

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _formatService: FormatService,
    private _auditService: AuditService,
    private _planningService: PlanningService
  ) {
    this.label_title = 'Lista de Auditorias';
    this.label_id = '#';
    this.label_name = 'Nombre';
    this.label_id_program = 'Inicio';
    this.label_id_user_resposible = 'Responsables del proceso';
    this.label_id_user_manager = 'Auditor';
    this.label_begin = 'Inicio';
    this.label_end = 'Periodo';
    this.label_name_process = 'Proceso';

    this.label_name_process = 'Nombre del proceso';

    this._audit = new audit(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);;
    this.getFormat();
    this.getAudit();
   }

  ngOnInit() {

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
          response =>{

            if(response.status == 'success'){
              this._audit = response.audit;
              console.log(this._audit);
              this.getPlannings();
            }
          },
          error=>{
              console.log(error);
          }
        );
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
