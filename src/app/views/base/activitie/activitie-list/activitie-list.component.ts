import { Component, OnInit, Input } from '@angular/core';
import { auditactivities } from '../../../../models/index_audit';
import { ActivitiesService } from '../../../../services/audits/activities.service';

@Component({
  selector: 'app-activitie-list',
  templateUrl: './activitie-list.component.html',
  styleUrls: ['./activitie-list.component.css']
})
export class ActivitieListComponent implements OnInit {
  public label_id: string;
  public label_begin: string;
  public label_end: string;
  public label_name: string;
  public label_numerals_iso: string;
  public label_numerals_meci: string;
  public label_numerals: string;
  public label_auditor: string;
  public actions: string;
  public form_activities = false;
  public form_activities_update = false;

  public activitie = new auditactivities(null,null,null,null,null,null,null,null);
  public activitie_update: auditactivities;

  @Input() public activities: auditactivities;

  constructor() {
    this.label_id = "#";
    this.label_begin= "Fecha Inicio";
    this.label_end= "Fecha Cierre";
    this.label_name= "Proceso/Actividad";
    this.label_numerals_iso= "ISO 9001";
    this.label_numerals_meci= "MECI";
    this.label_numerals= "Numeral";
    this.label_auditor= "Auditor";
    this.actions = "Acciones";
  }

  ngOnInit() {
  }

  ocultarActividad(){
    this.form_activities = false;
  }

  edit(_activitie:auditactivities){
    this.activitie_update = _activitie;
    this.form_activities_update = true;
  }

}
