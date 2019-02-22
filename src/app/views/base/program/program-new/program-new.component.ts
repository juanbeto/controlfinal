import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditprogram } from '../../../../models/index_audit';
import { ProgramService } from '../../../../services/audits/program.service';

@Component({
  selector: 'app-program-new',
  templateUrl: './program-new.component.html',
  styleUrls: ['./program-new.component.css']
})
export class ProgramNewComponent implements OnInit {


  public label_title: string;
  public label_id: string;
  public label_begin: string;
  public label_end: string;
  public label_objectives: string;
  public label_scope: string;
  public label_responsabilities: string;
  public label_approved: string;
  public label_resource: string;
  public label_observation: string;
  public label_enable: string;
  public label_is_delete: string;
  public label_periodo: string;

  public status: string;
  public status_message: string;
  public programs: auditprogram;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _programService: ProgramService
  ) {
    this.label_title = 'Nueva Programación';
    this.label_id= '#';
    this.label_begin= 'Inicio';
    this.label_end= 'Final';
    this.label_objectives= 'Objetivos';
    this.label_scope= 'Alcance';
    this.label_responsabilities= 'Responsables';
    this.label_approved= 'Aprobado';
    this.label_resource= 'Recursos';
    this.label_observation= 'Observaciones';
    this.label_enable= 'Habilitado';
    this.label_is_delete= 'Eliminado';
    this.label_periodo = 'Periodo de Ejecución';
  }

  ngOnInit() {
      this.programs = new auditprogram(null, null, null,'','','','1','','','0','0',null,null,1,1);

  }


  onSubmit(programs: auditprogram){
    console.log(this.programs);
    this._programService.create(programs).subscribe(
      response => {
        console.log(response);
        this.programs = response.program;
        console.log(this.programs);
        this._router.navigate(['base/audits/program/'+this.programs.ID]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
