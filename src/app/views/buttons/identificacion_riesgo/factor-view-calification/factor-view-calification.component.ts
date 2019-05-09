import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../identificacionriesgo.component';
import { RiskfactorcalificationdetailserviceService } from '../../../../services/risks/riskfactorcalificationdetailservice.service';
import { Riskfactorcalificationdetail } from '../../../../models/riskfactorcalificationdetail';
import { RiskfactorcalificationserviceService } from '../../../../services/risks/riskfactorcalificationservice.service';
import { Riskfactorcalification } from '../../../../models/riskfactorcalification';
import { FactorService } from '../../../../services/risks/factor.service';
import { risksfactor } from '../../../../models/index_risks';
import { risksfactorpromedio } from '../../../../models/risksfactorpromedio';

@Component({
  selector: 'app-factor-view-calification',
  templateUrl: './factor-view-calification.component.html',
  styleUrls: ['./factor-view-calification.component.scss']
})
export class FactorViewCalificationComponent implements OnInit {

  public calificationsModels : Riskfactorcalification;
  public valoresModels : Riskfactorcalificationdetail;
  public usersModels : Riskfactorcalification;
  public factorModels : risksfactor;
  public id :any;
  public factorpromedio : risksfactorpromedio;
  public promedio;

  constructor( public dialogRef: MatDialogRef<FactorViewCalificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    
    public calificationService :RiskfactorcalificationdetailserviceService,
    public factorService : FactorService) { }

  ngOnInit() {
    this.getUserAll();
    this.getCalificationAll();
    this.getFactores();
  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  getCalificationAll(){

    this.calificationService.getCalificationDetailAll().subscribe(
      response => {
        if(response.status == 'success'){
          this.calificationsModels = response.califications;
         
       // for(let calification of this.calificationsModels){

         // }
        }
      }
    );

  }

  getUserAll(){

   // this.userService.getUserAll().subscribe(
     // response => {
       // if(response.status == 'success'){
         // this.usersModels = response.usuarios;
        //}
      //}
    //);

  }

  getValores(){

   // this.calificationService.getvaloresAll().subscribe(
     // response => {
       // if(response.status == 'success'){
         // this.valoresModels = response.valores;
          //console.log(this.valoresModels);
        //}
      //}
    //);

  }


  getFactores(){
this.factorService.getFactors().subscribe(
  response =>{
    if(response.status == 'success'){
      this.factorModels = response.factors
    }

  }
);
  }

}
