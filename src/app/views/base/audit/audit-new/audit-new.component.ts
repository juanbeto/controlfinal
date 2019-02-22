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
  public _audit = new audit(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);


  constructor(    private _route: ActivatedRoute,
      private _router: Router,
      private _auditService: AuditService,) { }

  ngOnInit() {
  }

}
