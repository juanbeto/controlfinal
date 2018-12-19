import { Component, OnInit , Inject} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatDialog, MatDialogRef, MatCardModule, MAT_DIALOG_DATA} from '@angular/material';
import { auditplanning, auditquestion, auditareas } from '../../../../models/index_audit';
import { QuestionService } from '../../../../services/question.service';
import { AreasService }    from '../../../../services/audits/areas.service';
import { PlanningService } from '../../../../services/audits/planning.service';


@Component({
  selector: 'app-planning-new',
  templateUrl: './planning-new.component.html',
  styleUrls: ['./planning-new.component.css'],
  providers: [ QuestionService ]
})
export class PlanningNewComponent implements OnInit {
  public label_id: string;
  public title_question: string;
  public label_question: string;
  public label_area: string;
  public label_cycle: string;
  public label_numerals_iso: string;
  public label_numerals_meci: string;
  public label_numerals: string;
  public label_records: string;
  public label_observation: string;
  public label_accordance: string;
  public label_actions: string;

  public idAudit: number;

  public questions: auditquestion;
  public areas: auditareas;
  public planning: auditplanning;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public dialogRef: MatDialogRef<PlanningNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private _questionService: QuestionService,
    private _areaService: AreasService,
    private _planningService: PlanningService) {

      this.label_id = "#";
      this.label_area = "Area";
      this.label_question = "Pregunta";
      this.title_question = "Agregar Pregunta";
      this.label_cycle = "Ciclo";
      this.label_question = "Pregunta";
      this.label_numerals_iso = "ISO 9001";
      this.label_numerals_meci = "MECI";
      this.label_numerals= "Numeral";
      this.label_records = "Registro";
      this.label_observation = "Observacion";
      this.label_accordance = "Conformidad";
      this.label_actions = "Acciones";
      this.idAudit = data;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.planning = new auditplanning(null, this.idAudit, 1,'','','','','','','','');


    this.getQuestions();
    this.getAreas();
  }

  getQuestions(){
    this._questionService.getQuestions().subscribe(
      response =>{
        if(response.status == 'success'){
          this.questions = response.questions;
          console.log(this.questions);
        }
      },
      error=>{
          console.log(error);
      }
    );
  }

  getAreas(){
    this._areaService.getAreas().subscribe(
      response =>{
        if(response.status == 'success'){
          this.areas = response.areas;
          console.log(this.areas);
        }
      },
      error=>{
          console.log(error);
      }
    );
  }

  selectQuestion(pregunta: string){
    console.log(pregunta);
    this.planning.QUESTION = pregunta;
  }

  onSubmit(_planning: auditplanning){
    console.log(_planning);
    this._planningService.create(_planning).subscribe(
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
