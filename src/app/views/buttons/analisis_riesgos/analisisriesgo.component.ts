import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { risks, risksfrecuency, risksimpact, risksfactor } from '../../../models/index_risks';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RisksService } from '../../../services/risks/risks.service';
import { FrecuencyService } from '../../../services/risks/frecuency.service';
import { ModalService } from '../../../services/modal.services';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ImpactService } from '../../../services/risks/impact.service';
import { FactorService } from '../../../services/risks/factor.service';

@Component({
  selector: 'app-analisisriesgo',
  templateUrl: './analisisriesgo.component.html',
  providers: [ RisksService, FrecuencyService],
  
  encapsulation: ViewEncapsulation.None,
  styles: []
})
export class AnalisisriesgoComponent implements OnInit {
  closeResult: string;
  content :any;
  public risksmodels : risks;
  public riskid: risks;  
  public frecuencyModels: risksfrecuency; 
  public impactmodels : risksimpact ;
   public factormodels : risksfactor;


  public myModal;
    public largeModal;
    public smallModal;
    public primaryModal;
    public successModal;
    public warningModal;
    public dangerModal;
    public infoModal;
  constructor(private riskServices:RisksService, private factorServices:FactorService,
     private impactService:ImpactService,
    private modalService: ModalService, public frecuencyservice:FrecuencyService) { }

  ngOnInit() {

   
    this.getRisksAll();
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

 getRisks(id){

  console.log(id);

  this.riskServices.getRisksById(id).subscribe(
    response => {
      if(response.status == 'success'){
          this.riskid = response.risks;
          this.getRisksFrecuencys();
          console.log(this.riskid);
      }


    },
    error => {
      console.log(<any>error);
    }
  );
}

getRisksFrecuencys(){

  this.frecuencyservice.getFrecuencys().subscribe(

    response=>{
      if(response.status == 'success'){
        this.frecuencyModels = response.frecuency;
        console.log(this.frecuencyModels);
      }
    },
    error=>{
      console.log(<any>error);
    }
  );
}


getRiskImpact(){

  this.impactService.getImpacts().subscribe(
    response=>{
      if(response.status == 'success'){
        this.impactmodels = response.impacts;
        console.log(<any>this.impactmodels);
      }
    },
    error=>{
      console.log(<any>error);
    }
  );
}

getRiskFactor(){

this.factorServices.getFactors().subscribe(

  response=>{
    if(response.status == 'success'){
      this.factormodels = response.factors;
      console.log(this.factormodels);
    }
  },
  error=>{
    console.log(<any>error);
  }
);
}

}
