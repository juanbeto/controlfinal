import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { auditactivities } from '../../../../models/index_audit';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ActivitiesService } from '../../../../services/audits/activities.service';

@Component({
  selector: 'app-activitie-update',
  templateUrl: '../activitie-new/activitie-new.component.html',
  styleUrls: ['../activitie-new/activitie-new.component.css']
})
export class ActivitieUpdateComponent implements OnInit {

  public label_title: string;
  public label_button: string;
  public label_begin: string;
  public label_end: string;
  public label_name: string;
  public label_numerals_iso: string;
  public label_numerals_meci: string;
  public label_numerals: string;
  public label_auditor: string;

  private enviar: boolean = false;
 // public activitie: auditactivities;
  @Input()  public id_activitie: number;

  @Input() public activitie: auditactivities;

  @Output() formactivities: EventEmitter<number>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _activitieService: ActivitiesService
  ) {
  this.label_title = "Actualizar ";
  this.label_button = "Actualizar ";
  this.label_begin = "Fecha Inicio";
  this.label_end = "Fecha Cierre";
  this.label_name = "Proceso/Actividad";
  this.label_numerals_iso = "ISO 9001";
  this.label_numerals_meci = "MECI";
  this.label_numerals = "Numeral";
  this.label_auditor = "Auditor";
  this.formactivities = new EventEmitter();
  this.enviar = true;
  console.log('constructor');
  }

  ngOnInit() {
    console.log(this.activitie);
    console.log(this.activitie.ID);
    this._route.params.subscribe(params =>
    {
      this._activitieService.getActivitie(this.activitie.ID).subscribe(
      response => {
         if(response.status == 'success'){
            console.log('success');
         }else{
           console.log(response.status);
           this._router.navigate(['/base/audits/question']);
         }


       },
       error => {
         console.log(<any>error);
      }
     );
   });
}

ocultarActividad( val){
  this.enviar = false;
  this.formactivities.emit(1);
}


onSubmit(){
    this._route.params.subscribe(
      params => {
        let id_audit = +params['id'];
        this._activitieService.update(this.activitie, this.activitie.ID).subscribe(
           response => {
            console.log(response);
            this._router.navigate(['/base/audits/audit/'+id_audit]);
            window.location.reload();
          },
          error => {
            if(error.error.NAME){
              alert(error.error.NAME);
            }
          }
        );
      }
    );
}




}
