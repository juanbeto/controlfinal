import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FactorService } from '../../../../../services/risks/factor.service';
import { FactorTypeService } from '../../../../../services/risks/factor-type.service';
import { risksfactor } from '../../../../../models/risksfactor';
import { risksfactortype, Riskfactorcalificationdetail } from '../../../../../models/index_risks';

@Component({
  selector: 'app-factor-calification-detail',
  templateUrl: './factor-calification-detail.component.html',
  styleUrls: ['./factor-calification-detail.component.scss']
})
export class FactorCalificationDetailComponent implements OnInit {

  public uprisk: risksfactor;
  public factor: risksfactor;
  public factorTypeModels : risksfactortype;

  constructor(private _route: ActivatedRoute,private insertFactorTypeService: FactorTypeService,
    private _router: Router,private factorServices:FactorService,
    public dialogRef: MatDialogRef<FactorCalificationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
 public id: number=this.data.id;

 ngOnInit() {
  //this._route.params.subscribe(params =>
    //{
      this.uprisk= new risksfactor(null,null,null,null,null);
      this.califica= new Riskfactorcalificationdetail(null,null,null,null,null);
      //this.getFactor(params['id']);
   // });
    console.log("este es el numero"+this.data.id);

    this.getFactor(this.data.id);
    this.getTypeFactor();
}



getFactor(id){
  this.factorServices.getFactor(id).subscribe(

    response => {

      if(response.status == 'success'){

          this.uprisk = response.factor;
          console.log(this.factor);
      }else{
        this._router.navigate(['risks/riesgo/']);
        console.log("no hay datos");
      }

    },
    error => {
      console.log(<any>error);
    }
  );
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

onSubmitFactorCalification(_uprisk: risksfactor, _califica: Riskfactorcalificationdetail){
  console.log(_uprisk);
  _califica.ID_FACTOR = _uprisk.ID_FACTOR;
  console.log(_califica);
  this.factorServices.update(_uprisk, _uprisk.ID_FACTOR).subscribe(
  response => {
    console.log(response);
    this.uprisk = response.factor;
    //this._router.navigate(['risk/riesgo/']);
  },
  error => {console.log(<any>error);}
  );
}




}
