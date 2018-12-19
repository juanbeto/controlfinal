import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { audit, auditprogram } from '../../../../models/index_audit';
import { AuditService } from '../../../../services/audits/audit.service';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
  @Input() public _audit: audit;

  public label_title: string;
  public label_id: string;
  public label_id_program: string;
  public label_name: string;
  public label_objective: string;
  public label_id_user_manager: string;
  public label_id_user_resposible: string;
  public label_date_begin: string;
  public label_date_end: string;
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
  public audits: audit;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _auditService: AuditService
    ) {
      this.label_title = 'Lista de Auditorias';
      this.label_id = '#';
      this.label_name = 'Nombre';
      this.label_id_program = 'Inicio';
      this.label_objective= 'Objetivos';
      this.label_id_user_manager = 'Alcance';
      this.label_id_user_resposible = 'Responsables';
      this.label_date_begin = 'Inicio';
      this.label_date_end = 'Final';
      this.label_scope = 'Observaciones';
      this.label_name_process = 'Habilitado';
      this.label_criteria = 'Eliminado';
      this.label_observations = 'Periodo de Ejecución';
      this.label_approved = 'Periodo de Ejecución';
      this.label_global = 'Periodo de Ejecución';
      this.label_numerals = 'Periodo de Ejecución';
      this.label_meci = 'Periodo de Ejecución';
      this.actions = 'Acciones';
    }

    ngOnInit() {
      console.log('audit.list component cargado correctamente');
    }

    delete(id){
      this._auditService.delete(id).subscribe(
        response => {
          //this.getAudits();
          this.status = 'success';
          this.status_message = 'La auditoria se eliminó correctamente.';
        },
        error=>{
          console.log(error);
          this.status = 'error';
          this.status_message = 'El error al borrar la auditoria. Intente nuevamente!!.';
        }
      );
    }

}
