import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { audit } from '../../../../models/index_audit';
import { AuditService } from '../../../../services/audits/audit.service';

@Component({
  selector: 'app-audit-list-run',
  templateUrl: './audit-list-run.component.html',
  styleUrls: ['./audit-list-run.component.css']
})
export class AuditListRunComponent implements OnInit {
  public label_title: string;
  public label_id: string;
  public label_name: string;
  public label_objective: string;
  public label_date_begin: string;
  public label_date_end: string;

  public audits: audit;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _auditService: AuditService
  ) {
    this.label_title = 'Lista de Auditorias';
    this.label_id = '#';
    this.label_name = 'Nombre';
    this.label_objective= 'Objetivos';
    this.label_date_begin = 'Inicio';
    this.label_date_end = 'Final';

  }

  ngOnInit() {
    this.getAudits();
  }

  getAudits(){
    this._auditService.getAudits().subscribe(
      response =>{

        if(response.status == 'success'){
          this.audits = response.audits;
          console.log(this.audits);
        }
      },
      error=>{
          console.log(error);
      }
    );
  }


}
