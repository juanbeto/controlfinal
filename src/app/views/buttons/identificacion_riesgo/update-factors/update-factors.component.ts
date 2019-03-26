import { Component, OnInit, Inject } from '@angular/core';
import { risksfactor, risksfactortype } from '../../../../models/index_risks';
import { ActivatedRoute, Router } from '@angular/router';
import { FactorService } from '../../../../services/risks/factor.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';
import { FactorTypeService } from '../../../../services/risks/factor-type.service';

@Component({
  selector: 'app-update-factors',
  templateUrl: './update-factors.component.html',
  styleUrls: ['./update-factors.component.scss']
})
export class UpdateFactorsComponent implements OnInit {
  public uprisk: risksfactor;
  public factor: risksfactor;
  public factorTypeModels : risksfactortype;


  constructor(private _route: ActivatedRoute,private insertFactorTypeService: FactorTypeService,
    private _router: Router,private factorServices:FactorService,
    public dialogRef: MatDialogRef<UpdateFactorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
 public id: number=this.data.id;
  ngOnInit() {
    //this._route.params.subscribe(params =>
      //{
        this.uprisk= new risksfactor(null,null,null,null,null);
        //this.getFactor(params['id']);
     // }); 
      console.log("este es el numero"+this.data.id);
      
      this.getFactor(this.data.id);
      this.getTypeFactor();
  }



  getFactor(id){
    this.factorServices.getFactor(id).subscribe(
      
      response => {
        console.log("primero si hay un id"+id);
        if(response.status == 'success'){
          console.log("segundo si hay un id"+id);
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

 onSubmit(_uprisk: risksfactor){
console.log(_uprisk);
this.factorServices.update(_uprisk, _uprisk.ID_FACTOR).subscribe(
response => {

  console.log(response);
  this.uprisk = response.factor;
this._router.navigate(['risk/riesgo/']);
},
error => {console.log(<any>error);}
);
 }


 
}
