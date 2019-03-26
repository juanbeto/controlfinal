import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { risks, risksfactor,risksasignation, riskscauseseffects, riskseffectscauses } from '../../../models/index_risks';
import { ControlService } from '../../../services/risks/control.service';
import { RisksService } from '../../../services/risks/risks.service';
import { auditactivities } from '../../../models/index_audit';
import { FactorService } from '../../../services/risks/factor.service';

import { NewMatrizCausesComponent } from './new-matriz-causes/new-matriz-causes.component';
import { MatDialog } from '@angular/material';
import { AsignationServiceService } from '../../../services/risks/asignation-service.service';
import { FactorViewCalificationComponent } from './factor-view-calification/factor-view-calification.component';
import { FactorCalificationComponent } from './factor-calification/factor-calification.component';
import { CauseseffectsService } from '../../../services/risks/causeseffects.service';
import { RisksEffectsCausesServiceService } from '../../../services/riskseffectscauses.service';
import { InsertRisksComponent } from './insert-risks/insert-risks.component';
import { NewConsecuencesComponent } from './insert-risks/new-consecuences/new-consecuences.component';
import { NewCausesComponent } from './insert-risks/new-causes/new-causes.component';
import { InsertFactorsComponent } from './insert-factors/insert-factors.component';
import { UpdateFactorsComponent } from './update-factors/update-factors.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-identificacionriesgo',
  templateUrl: './identificacionriesgo.component.html',
  providers: [ RisksService ],
  
  styles: []
})
export class IdentificacionriesgoComponent implements OnInit {
 public risksmodels : risks;
 public risksTable:risks;
 public factorsModel : risksfactor;
 
 public status_risks: string;
 public status_factor: string;
 public status_message: string;
 
 animal: string;
 name: string;

 public asignationModels : risksasignation;
 public riskModels : risks;
 public causesModels : riskscauseseffects;
 public effectsModels : riskseffectscauses;
 
 

  constructor(private http:HttpClient, private riskServices:RisksService, 
    private factorServices:FactorService,
    public dialog: MatDialog, public dialogview: MatDialog,
    private asignationService : AsignationServiceService ,
    private causesService : CauseseffectsService,
    private effectsService : RisksEffectsCausesServiceService) { 
     
    }

  ngOnInit() {
    this.getRisksAll();
    this.getFactorsAll();
    this.getAsignationAll();
    this.getCausesAll();
    this.getEffects_All();
  }
  ngOnChanges(){
    this.getRisksAll();
    this.getFactorsAll();
    this.getAsignationAll();
    this.getCausesAll();
    this.getEffects_All();
  }

  getRisksAll(){
     this.riskServices.getRisks().subscribe(
       response =>{
         if(response.status == 'success'){
           this.risksmodels = response.risks;
           console.log(this.risksmodels);
           this.status_risks = 'success';

         }
       },
       error => {
         console.log(error);
       }
     );
  }

  

  loadTable(_risks){
   // const corporationObj = risks.ID;
   console.log(""+_risks);
   this.riskServices.getRisksById(_risks).subscribe(
     response => {
       if(response.status=='success'){
       this.risksTable=response.risks_ID;
       console.log(this.risksTable);
     }
     

     },
     error=>{
       console.log(error);
     }
   );
    

   }

   delete(id){
this.riskServices.delete(id).subscribe(
  response=>{
    this.getRisksAll();
    this.status_risks = 'success';
    this.status_message = 'La pregunta se elimino correctamente.';
  },
  error=>{
    console.log(error);
    this.status_risks = 'error';
    this.status_message = 'El error al guardar la pregunta. Intente nuevamente.';
  }
);
   }

   deleteFactor(id){
    this.factorServices.delete(id).subscribe(
      response=>{
        this.getFactorsAll();
        this.status_factor = 'success';
        this.status_message = 'El factor se elimino correctamente.';
      },
      error=>{
        console.log(error);
        this.status_risks = 'error';
        this.status_message = 'El error al guardar la pregunta. Intente nuevamente.';
      }
    );
       }
  


   getFactorsAll(){

    this.factorServices.getFactors().subscribe(
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


  
   DialogAsignationFactors() {
    const dialogRef = this.dialog.open(NewMatrizCausesComponent,{
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogViewCalification() {
    const dialogRef2 = this.dialogview.open(FactorViewCalificationComponent,{
      width: '700px'
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openEvaluate() {
    const dialogRef2 = this.dialogview.open(FactorCalificationComponent,{
      width: '700px'
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  



  getAsignationAll(){

this.asignationService.getAsignationsAll().subscribe(
  response => {

    if(response.status == 'success'){

      this.asignationModels = response.asignations;
      console.log(this.asignationModels);
    } 
  } ,
  error =>{
    console.log(error);
  }
);
  }

//Metodos para riesgos

openDialogEditFactor(id: any){
  const dialogRef4 = this.dialogview.open(UpdateFactorsComponent,{
    width: '900px',

    data: {
      id: id    },

  });

  dialogRef4.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openDialogNewRisk() {
  const dialogRef4 = this.dialogview.open(InsertRisksComponent,{
    width: '700px'
  });

  dialogRef4.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openDialogNewCauses() {
  const dialogRef4 = this.dialogview.open(NewCausesComponent,{
    width: '700px'
  });

  dialogRef4.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openDialogNewConsecuences() {
  const dialogRef4 = this.dialogview.open(NewConsecuencesComponent,{
    width: '700px'
  });

  dialogRef4.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openDialogInsertFactor(){
  const dialogRef4 = this.dialogview.open(InsertFactorsComponent,{
    width: '700px'
  });

  dialogRef4.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

getCausesAll(){

  this.causesService.getCausesEfectsAll().subscribe(
    response => {
      if(response.status == 'success'){
        this.causesModels = response.causes_effects;
        console.log(this.causesModels);
      }
    },
    error => {
      console.log(error);
    }
  );
}

getEffects_All(){
  this.effectsService.getCausesEfects().subscribe(
    response => {
      if(response.status=='success'){
        this.effectsModels = response.riskEffectsCause;
        
      }
    },
    error=>{(error);
    }
  );


}
  }



  
