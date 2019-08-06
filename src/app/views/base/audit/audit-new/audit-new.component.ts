import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormControl} from '@angular/forms';
import { audit } from '../../../../models/index_audit';
import { user } from '../../../../models/adminuser';
import { AuditService } from '../../../../services/audits/audit.service';
import { PlanningService } from '../../../../services/audits/planning.service';
import { ActivitiesService } from '../../../../services/audits/activities.service';
import { UserService } from '../../../../services/admin/user.service';

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
  public audit_min: number;
  public status: string;
  public status_message: string;
  public _audit = new audit(null,null,null,null,null,null,null,null,null,null,null,null,null,null,'0',null,null,null,Date.now(),null,null,null, null);
  public list_user = new Array<user>();
  public global1: boolean;
  //@Input() public programa: program;

  constructor(    private _route: ActivatedRoute,
      private _router: Router,
      private _auditService: AuditService,
      private _userService: UserService) {
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
        this.audit_min = 0;
        this.global1 = false;
      }

  ngOnInit() {
    this.getListUsers();
    for(var i=0;i<5;i++){
      this.list_user[i] = new user(1,'pedro', null, null);
    }
  }


  getListUsers(){
    this._userService.getUsers().subscribe(
      response  => {
        this.list_user = response.users;
      },
      error     => {
        console.log(<any>error);
      }
    );
  }

checkValue(a:any){

      if(this.global1!=false){
          this._audit.GLOBAL='1';
      }else{
        this._audit.GLOBAL='0';
      }
}

  onSubmit(_audit: audit){
    console.log(_audit);
    this._route.params.subscribe(
      params => {
        let id = +params['idprogram'];
        _audit.ID_PROGRAM =id;
        _audit.APPROVED = '1';
        _audit.MECI = '';
        _audit.NUMERALS = '';
        _audit.CLOSED = '0';
        this._auditService.create(_audit, this.list_user).subscribe(
          response => {
            console.log(response);
            this._audit = response.audit;
            this._router.navigate(['base/audits/audit/'+this._audit.ID]);
          },
          error => {
            console.log(<any>error);
          }
        );
      }
    );
  }
}
