import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { auditactivities } from '../../../../../models/index_audit';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public form_activities = false;
  public form_activities_update = false;
  activitie_update: auditactivities;
  @Input()  public id_activitie: number;

  @Input() public activitie: auditactivities;

  @Output() formactivities: EventEmitter<number>;
  constructor() { }

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
