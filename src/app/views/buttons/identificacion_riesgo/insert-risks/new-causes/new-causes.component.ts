import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../identificacionriesgo.component';
import { ProccessService } from '../../../../../services/risks/proccess.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RisksService } from '../../../../../services/risks/risks.service';
import { risks } from '../../../../../models/risks';
import { risksprocess, riskscauseseffects, risksfactor } from '../../../../../models/index_risks';
import { CauseseffectsService } from '../../../../../services/risks/causeseffects.service';
import { FactorService } from '../../../../../services/risks/factor.service';

@Component({
  selector: 'app-new-causes',
  templateUrl: './new-causes.component.html',
  styleUrls: ['./new-causes.component.scss']
})
export class NewCausesComponent implements OnInit {
  public uprisk:risks;
  public proccessModel : risksprocess;
  public risksmodels : risks;
  public causesModels : riskscauseseffects;
  public factorsModel : risksfactor;

  constructor(public dialogRef: MatDialogRef<NewCausesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private insertServices:RisksService, private _router:Router,private _route: ActivatedRoute,
    private proccessServices: ProccessService ,
    private riskServices:RisksService,
    private causesService : CauseseffectsService,
    private factorServices:FactorService) { }

  ngOnInit() {
    this.causesModels= new riskscauseseffects(null,null,null,null);
    this.getAllProcess();
    this.getRisksAll();
    this.getFactorsAll();
  }



  submit(_causes: riskscauseseffects){
    this.causesService.create(_causes).subscribe(
    response=>{
    console.log(response);
    this.causesModels=response.causes_effects;
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


       getRisksAll(){
        this.riskServices.getRisks().subscribe(
          response =>{
            if(response.status == 'success'){
              this.risksmodels = response.risks;
              console.log(this.risksmodels);
              
   
            }
          },
          error => {
            console.log(error);
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

}
