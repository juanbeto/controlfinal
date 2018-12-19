import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditquestion } from '../../../models/auditquestion';
import { QuestionService } from '../../../services/question.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [ QuestionService ]
})
export class QuestionListComponent implements OnInit {

  public label_title: string;
  public label_name: string;
  public label_id: string;
  public status_question: string;
  public status_message: string;
  public question: auditquestion;
  public questions: auditquestion;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _questionService: QuestionService

  ) {
    this.label_title = 'Nueva pregunta';
    this.label_name = '¿Preguntas?';
    this.label_id = '#id';
  }


  ngOnInit() {
    console.log('question.list component cargado correctamente');
    this.getQuestions();
  }

  getQuestions(){
    this._questionService.getQuestions().subscribe(
      response =>{
        if(response.status == 'success'){
          this.questions = response.questions;
        }
      },
      error=>{
          console.log(error);
      }
    );
  }

  delete(id){
    this._questionService.delete(id).subscribe(
      response => {
        this.getQuestions();
        this.status_question = 'success';
        this.status_message = 'La pregunta se elimino correctamente.';
      },
      error=>{
        console.log(error);
        this.status_question = 'error';
        this.status_message = 'El error al guardar la pregunta. Intente nuevamente.';
      }
    );
  }

}
