import { Component, OnInit } from '@angular/core';
import { FactorTypeService } from '../../../../services/risks/factor-type.service';
import { risksfactortype, risksfactor } from '../../../../models/index_risks';
import { ActivatedRoute, Router } from '@angular/router';
import { FactorService } from '../../../../services/risks/factor.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-insert-factors',
  templateUrl: './insert-factors.component.html',
  styleUrls: ['./insert-factors.component.scss']
})
export class InsertFactorsComponent implements OnInit {


  public factorTypeModels : risksfactortype;
  public uprisk : risksfactortype;
  public factorModels : risksfactor;
  constructor(public dialogRef: MatDialogRef<InsertFactorsComponent>,private _route: ActivatedRoute,
    private _router: Router, private insertFactorTypeService: FactorTypeService
    , private insertFactorService : FactorService ) { }

  ngOnInit() {
    this.factorModels = new risksfactor(null,"",null,"","");

    this.getTypeFactor();
  }

  

  closeDialog() {
    this.dialogRef.close();
  }
  getTypeFactor(){

    this.insertFactorTypeService.getFactorTypes().subscribe(
      response => {
        if(response.status== 'success'){

          this.factorTypeModels = response.factortypes;
          console.log(this.factorTypeModels);
        }else{
          this._router.navigate(['risks/riesgo/']);
        }
      },
      error => {
        console.log(<any>error);
      }

    );
  
}

onSubmit(factorModels : risksfactor){
  console.log(factorModels);
this.insertFactorService.create(factorModels).subscribe(

  response => {
    console.log(response);
    this.factorModels = response.factor;
   // this._router.navigate(['risks/riesgo/']);
   this.closeDialog();
  },
  error => {
    console.log(<any>error);
  }
);
}










}
