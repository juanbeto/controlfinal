import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditquestion } from '../../../models/auditquestion';
import { QuestionService } from '../../../services/question.service';


@Component({
  selector: 'app-question-update',
  templateUrl: '../question-new/question-new.component.html',
  styleUrls: ['./question-update.component.css'],
  providers: [ QuestionService ]
})
export class QuestionUpdateComponent implements OnInit {

  public label_title: string;
  public label_name: string;
  public label_id: string;
  public question: auditquestion;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _questionService: QuestionService

  ) {
    this.label_title = 'Editar pregunta';
    this.label_name = '¿Pregunta?';
  }



  ngOnInit() {
    this._route.params.subscribe(params =>
    {
      this.question= new auditquestion(null, '','','',null,null);
      this.getQuestion(params['id']);
    });
  }

  getQuestion(id){
      this._questionService.getQuestion(id).subscribe(
        response => {
          if(response.status == 'success'){
              this.question = response.question;
              console.log(this.question);
          }else{
            this._router.navigate(['audits/question']);
          }


        },
        error => {
          console.log(<any>error);
        }
      );
   }

   onSubmit(form){
     console.log(this.question.NAME);
     this._questionService.update(this.question, this.question.ID).subscribe(
       response =>{
         this._router.navigate(['audits/question']);
       },
       error => {console.log(<any>error)}
     );
   }

}
