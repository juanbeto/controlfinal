import { Component, OnInit,Input } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';

import { AuditService } from '../../../services/audits/audit.service';
import { audit } from '../../../models/index_audit';


import { FactorService } from '../../../services/risks/factor.service';
import { risksfactor } from '../../../models/index_risks';


@Component({
  selector: 'app-contextoestrategico',
  templateUrl: './contextoestrategico.component.html',
  providers: [ FactorService ],
 
  styles: []
})
export class ContextoestrategicoComponent implements OnInit {
   public risksmodelo: risksfactor;
  
  constructor( private _route: ActivatedRoute,
    private _router: Router, private riskFactor:FactorService) { 
    

  }

  ngOnInit() {
   // this.risk=this.riskfactorService.getRisk();
   // console.log(this.risk);
   // this.getActivities();
    //this.getPrueba();
    this.getrisks();
   //console.log(this.risk);
  }
  

  getrisks(){
this.riskFactor.getFactors().subscribe(
  response =>{
    if(response.status == 'success'){
      this.risksmodelo = response.factors;
      console.log("hola"+this.risksmodelo);
    }

  },
    error =>{
     console.log(error);
    }
  
);
 }
  /**getActivities(){
    this.riskfactorService.getActivities().subscribe(
      response =>{
        if(response.status == 'success'){
          this.risksmodelo = response.risksmodelo;
          console.log(this.risksmodelo);
        }
      },
      error=>{
          console.log(error);
      }
    );
  }
  */
 /* getPrueba(){
    
    this.riskfactorService.getAudits().subscribe(
      response =>{

        if(response.status == 'success'){
          this.risksmodelo = response.audits;
          console.log(this.risksmodelo);
        }
      },
      error=>{
          console.log(error);
      }
    );
    
  }
  
*/
  
  





  onSubmit(){
    //console.log(this.riskfactorService.prueba());
  }
}
