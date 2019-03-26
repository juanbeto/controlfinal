import { Component, OnInit, Inject } from '@angular/core';
import { RisksService } from '../../../../services/risks/risks.service';
import { risks, risksprocess, risksfactor } from '../../../../models/index_risks';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../identificacionriesgo.component';
import { ProccessService } from '../../../../services/risks/proccess.service';
import { FactorService } from '../../../../services/risks/factor.service';

@Component({
  selector: 'app-insert-risks',
  templateUrl: './insert-risks.component.html',
  providers: [ RisksService ],
  styleUrls: ['./insert-risks.component.scss']
})
export class InsertRisksComponent implements OnInit {

  public uprisk:risks;
  public proccessModel : risksprocess;
  public factorsModel : risksfactor;
  constructor(public dialogRef: MatDialogRef<InsertRisksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private insertServices:RisksService, private _router:Router,private _route: ActivatedRoute,
    private proccessServices: ProccessService,
    private factorService: FactorService) { }






  ngOnInit() {
    this.uprisk= new risks(null,null,null,null,null,null,null,null,null, null,null,null,null,null, null);
    this.getFactorsAll();
    this.getAllProcess();

  }

  getFactorsAll(){

    this.factorService.getFactors().subscribe(
      response =>{
        if(response.status == 'success'){

          this.factorsModel = response.factors;
          console.log(this.factorsModel);

        }

      },  error=>{
        console.log(error);
      }

    );
   }



  onSubmit(){
this.insertServices.create(this.uprisk).subscribe(
response=>{
console.log(response);
this.uprisk=response.risks;
this._router.navigate(['/risks/risks']);
},
error=>{
  console.log(<any>error);
}
);
  }

  getAllProcess(){

    this.proccessServices.getProccessAll().subscribe(
      response =>{
        if(response.status == 'success'){

          this.proccessModel = response.proccess;
          console.log(this.proccessModel);

        }

      },  error=>{
        console.log(error);
      }

    );
   }



}
