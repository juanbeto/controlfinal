import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ControlService } from '../../../services/risks/control.service';
import { riskscontrol, risks, risksfrecuency } from '../../../models/index_risks';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RisksService } from '../../../services/risks/risks.service';
import { FrecuencyService } from '../../../services/risks/frecuency.service';

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
  constructor(private riskServices:RisksService, private modalService: NgbModal, private frecuencyService:FrecuencyService) { }

  ngOnInit() {

   this.getFrecuencys();
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
          console.log(this.riskid);
      }


    },
    error => {
      console.log(<any>error);
    }
  );
}

getFrecuencys(){

  this.frecuencyService.getFrecuencys().subscribe(

    response=>{
      if(response.status=='succes'){
        this.frecuencyModels=response.frecuency;
        console.log(this.frecuencyModels);
      }
    },
    error=>{
      console.log(error);
    }
  );
}

}
