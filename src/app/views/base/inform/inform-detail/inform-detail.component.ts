import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditinform, audit } from '../../../../models/index_audit';
import { InformService } from '../../../../services/audits/inform.service';
import { AuditService } from '../../../../services/audits/audit.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-inform-detail',
  templateUrl: './inform-detail.component.html',
  styleUrls: ['./inform-detail.component.scss']
})
export class InformDetailComponent implements OnInit {
  public label_location: string;
  public label_type_audit: string;
  public label_execution: string;
  public label_concept: string;
  public label_objective: string;
  public label_name_boss: string;
  public label_code: string;
  public label_approved: string;
  public label_activities: string;

  public label_scope: string;
  public label_criteria: string;
  public label_objective_audit: string;
  public label_objective_inform: string;

  public label_ar : string;
  public label_am : string;
  public label_nc : string;


  public inform:auditinform;
  public _audit:audit;
  public preguntas_ar = Array();
  public preguntas_am = Array();
  public preguntas_nc = Array();
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _informService: InformService,
      private _auditService: AuditService) {
        this.label_location = "Localización";
        this.label_type_audit = "Tipo de Auditoria";
        this.label_execution = "Fecha Ejecución";
        this.label_concept = "Concepto del Equipo Auditor";
        this.label_objective = "Objetivos Especificos";
        this.label_name_boss = "Jefe de Oficina Auditoria y Control Interno";
        this.label_code = "Codigo";
        this.label_activities = "Actividades Desarrolladas";
        this.label_approved = "Aprobado";

        this.label_scope = "Alcalce de la Auditoria";
        this.label_criteria = "Criterios de la Auditoria";
        this.label_objective_audit = "Objectio General";
        this.label_objective_inform = "Objectivos Especificos";
        this.label_activities = "Actividades Desarrolladas";
        this.label_ar = "Aspecto Relevante";
        this.label_am = "Aspecto Por Mejorar";
        this.label_nc = "No conformidad";

        this.inform = new auditinform(null,null,'','','','','','','','','0',null,null,null,null);
        this._audit = new audit(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
      }

  ngOnInit() {
    this.getInform();
  }


  getInform(){
    this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this._informService.getInform(id).subscribe(
        response =>{
            if(response.status == 'success'){
              this.inform = response.inform;
              console.log(this.inform);
              this.getAudit();
              this.getHallazgos();
              $('#activities').html(  this.inform.ACTIVITIES);
              $('#objective').html(  this.inform.OBJECTIVE);
              $('#concept').html(  this.inform.CONCEPT);

            }
          },
          error=>{
            console.log(error);
          }
        );
      }
    );
  }

  getAudit(){
        this._auditService.getAudit(this.inform.ID_AUDIT).subscribe(
        response =>{
            if(response.status == 'success'){
              this._audit = response.audit;
              console.log(this._audit);
            }
          },
          error=>{
            console.log(error);
          }
        );
      }



  getHallazgos(){
        this._informService.getHallazgos(this.inform.ID_AUDIT).subscribe(
        response =>{
            if(response.status == 'success'){
              this.preguntas_ar = response.preguntas.AR;
              this.preguntas_am = response.preguntas.AM;
              this.preguntas_nc = response.preguntas.NC;
              console.log(this.preguntas_am);
            }
          },
          error=>{
            console.log(error);
          }
        );
      }

printDiv(){       var contenido= document.getElementById("printDiv").innerHTML;
       var contenidoOriginal= document.body.innerHTML;

       document.body.innerHTML = contenido;

       window.print();

       document.body.innerHTML = contenidoOriginal;}

  }
/*
    function printDiv() {

  }
*/
