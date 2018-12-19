import { Component, OnInit , Inject} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatDialog, MatDialogRef, MatCardModule, MAT_DIALOG_DATA} from '@angular/material';
import { auditplanning } from '../../../../models/index_audit';
import { PlanningService } from '../../../../services/audits/planning.service';



@Component({
  selector: 'app-planning-update-run',
  templateUrl: './planning-update-run.component.html',
  styleUrls: ['./planning-update-run.component.css']
})
export class PlanningUpdateRunComponent implements OnInit {
  public label_id: string;
  public title_question: string;
  public label_question: string;
  public label_area: string;
  public label_cycle: string;
  public label_numerals: string;
  public label_records: string;
  public label_observation: string;
  public label_accordance: string;
  public label_actions: string;

  public idPlanning: number;
  public planning: auditplanning;

  constructor(  private _route: ActivatedRoute,
    private _router: Router,
    public dialogRef: MatDialogRef<PlanningUpdateRunComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _planningService: PlanningService) {
    this.label_id = "#";
    this.label_area = "Area";
    this.label_question = "Pregunta";
    this.title_question = "Agregar Pregunta";
    this.label_cycle = "Ciclo";
    this.label_question = "Pregunta";
    this.label_numerals= "Numeral";
    this.label_records = "Registro";
    this.label_observation = "Observacion";
    this.label_accordance = "Conformidad";
    this.label_actions = "Acciones";
    console.log('The dialog was closed');
    this.idPlanning = data;
    console.log(data);
  }

  ngOnInit() {
    this.planning = new auditplanning(null, 1, 1,'','','','','','','','');
    this.getPlanning();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getPlanning(){
    this._planningService.getPlanning(this.idPlanning).subscribe(
      response =>{
        if(response.status == 'success'){
          this.planning = response.planning;
          console.log(this.planning);
        }
      },
      error=>{
          console.log(error);
      }
    );
  }


  onSubmit(_planning: auditplanning){
    console.log(_planning);
    this._planningService.update(_planning, _planning.ID).subscribe(
      response => {
        console.log(response);
        this.planning = response.planning;
        this.dialogRef.close();
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
