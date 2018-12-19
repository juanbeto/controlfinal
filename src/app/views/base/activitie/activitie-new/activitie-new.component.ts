import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { auditactivities } from '../../../../models/index_audit';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ActivitiesService } from '../../../../services/audits/activities.service';


@Component({
  selector: 'app-activitie-new',
  templateUrl: './activitie-new.component.html',
  styleUrls: ['./activitie-new.component.css']
})
export class ActivitieNewComponent implements OnInit {
    public label_title: string;
    public label_button: string;
    public label_begin: string;
    public label_end: string;
    public label_name: string;
    public label_numerals_iso: string;
    public label_numerals_meci: string;
    public label_numerals: string;
    public label_auditor: string;
    public activitie = new auditactivities(1,1,'','','null','','',1);

    @Output() formactivities: EventEmitter<number>;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _activitieService: ActivitiesService
    ) {
    this.label_title = "Nueva ";
    this.label_button = "Adicionar";
    this.label_begin = "Fecha Inicio";
    this.label_end = "Fecha Cierre";
    this.label_name = "Proceso/Actividad";
    this.label_numerals_iso = "ISO 9001";
    this.label_numerals_meci = "MECI";
    this.label_numerals = "Numeral";
    this.label_auditor = "Auditor";
    this.formactivities = new EventEmitter();
  }

  ngOnInit() {

  }

  ocultarActividad( val){
    this.formactivities.emit(1);
  }

  onSubmit(){    
    this._route.params.subscribe(
      params => {
        let id_audit = +params['id'];
        let activitie_new = new auditactivities(
          1,
          id_audit,
          this.activitie.BEGIN,
          this.activitie.END,
          this.activitie.NAME,
          this.activitie.NUMERALS_ISO,
          this.activitie.NUMERALS_MECI,
          1
        );
        this._activitieService.create(activitie_new).subscribe(
           response => {
            console.log(response);
            //this._router.navigate(['audits/audit/'+id_audit]);
            window.location.reload();
          },
          error => {
            console.log(<any>error);
          }
        );
      }
    );
  }

}
