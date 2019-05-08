import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RisksService } from '../../../../../services/risks/risks.service';

import { risks } from '../../../../../models/risks';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  providers: [ RisksService ],
  
  styles: []
})

export class UpdateComponent implements OnInit {

  public riskmodel: risks;
  public uprisk: risks;

  
  constructor(  private _route: ActivatedRoute,
    private _router: Router,private riskServices:RisksService ) { }

  ngOnInit() {
   this._route.params.subscribe(params =>
    {
      this.uprisk= new risks(null,null,null,null,null,null,null,null,null,null);
      this.getRisks(params['id']);
    });


  }
  getRisksAll(){
    this.riskServices.getRisks().subscribe(
      response =>{
        if(response.status == 'success'){
          this.uprisk = response.risks;
          console.log(this.uprisk);
        }
      },
      error => {
        console.log(error);
      }
    );
 }


  getRisks(id){
      this.riskServices.getRisksById(id).subscribe(
        response => {
          if(response.status == 'success'){
              this.uprisk = response.risks;
              console.log(this.uprisk);
          }else{
            this._router.navigate(['risks/riesgo/']);
          }


        },
        error => {
          console.log(<any>error);
        }
      );
   }
 


   onSubmit(form){
console.log(this.uprisk.ID);
this.riskServices.update(this.uprisk,this.uprisk.ID).subscribe(
  response=>{
    this._router.navigate(['risks/riesgo/']);
  },
  error=>{console.log(<any>error)}
);

  }


}
