import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditinform } from '../../../../models/index_audit';
import { InformService } from '../../../../services/audits/inform.service';

@Component({
  selector: 'app-inform-edit',
  templateUrl: './inform-edit.component.html',
  styleUrls: ['./inform-edit.component.scss']
})
export class InformEditComponent implements OnInit {
    public label_location: string;
    public label_type_audit: string;
    public label_execution: string;
    public label_concept: string;
    public label_objective: string;
    public label_name_boss: string;
    public label_code: string;
    public label_approved: string;
    public label_activities: string;
    public inform:auditinform;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _informService: InformService) {

        this.label_location = "Localización";
        this.label_type_audit = "Tipo de Auditoria";
        this.label_execution = "Fecha Ejecución";
        this.label_concept = "Concepto del Equipo Auditor";
        this.label_objective = "Objetivos Especificos";
        this.label_name_boss = "Jefe de Oficina Auditoria y Control Interno";
        this.label_code = "Codigo";
        this.label_activities = "Actividades Desarrolladas";
        this.label_approved = "Aprobado";
        this.inform = new auditinform(null,null,'','','','','','','','','0',null,null,null,null);
        //_audit = new audit(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
        this.getInformByAudit();
        console.log(this.inform);

      }

  ngOnInit() {
      }

      public options: Object = {
        charCounterCount: true,
        placeholderText: 'Edite el contenido aqui!',
        heightMin: 200,
        width: 800,
        toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
        toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
        toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
        toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
      };


  getInformByAudit(){
    this._route.params.subscribe(
      params => {
        let id_audit = +params['id'];
        this._informService.getInformByAudit(id_audit).subscribe(
        response =>{
            if(response.status == 'success'){
              this.inform = response.inform;
              console.log(this.inform);
              if(response.inform.length==0){//Si es 0, no existe el informe... se debe crear
                this.inform = new auditinform(null,id_audit,'',' ',null,' ','','',' ',' ','0',null,null,null,null);
                this._informService.create(this.inform).subscribe(
                  response =>{
                    this.inform = response.inform;
                    console.log(this.inform);
                  },
                  error=>{
                    console.log(error);
                  }
                );
              }
            }
          },
          error=>{
            console.log(error);
          }
        );
      }
    );
  }

  onSubmit(inform:auditinform){
    console.log(inform);
    this._informService.update(inform, inform.ID).subscribe(
      response => {
        this.inform = response.inform;
        alert('Se guardo la informacion');
        this._router.navigate(['base/audits/inform/inform-edit/'+this.inform.ID_AUDIT]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
