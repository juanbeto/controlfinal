import { Component, OnInit } from '@angular/core';
import { RiskprobabilitycalificationService } from '../../../services/risks/riskprobabilitycalification.service';
import { RiskprobabilitycalificationdetailService } from '../../../services/risks/riskprobabilitycalificationdetail.service';
import { Riskprobabilitycalificationdetail } from '../../../models/riskprobabilitycalificationdetail';
import { Riskprobabilitycalification } from '../../../models/riskprobabilitycalification';
import { RisksService } from '../../../services/risks/risks.service';
import { risks } from '../../../models/index_risks';
import { MatDialog } from '@angular/material';
import { CalificarProbabilidadComponent } from './calificar-probabilidad/calificar-probabilidad.component';

@Component({
  selector: 'app-valoracionriesgo',
  templateUrl: './valoracionriesgo.component.html',
  styles: []
})
export class ValoracionriesgoComponent implements OnInit {
public riskProbabilityModels : Riskprobabilitycalification;
public riskProbabilityDetailsModels : Riskprobabilitycalificationdetail;
public riskModels : risks;


  constructor(
    private probabilityService : RiskprobabilitycalificationService,
    private probabilityDetailService : RiskprobabilitycalificationdetailService,
    private riskService : RisksService,
    public dialog: MatDialog, public dialogview: MatDialog,
  ) { }

  ngOnInit() {
    this.getProbabilityAll();
    this.getRisks();
  }

  getProbabilityAll(){
    this.probabilityDetailService.getProbabilityCalificationDetailAll().subscribe(
      response =>{
        if(response.status == 'success'){
         
          this.riskProbabilityDetailsModels = response.califications;
          console.log(this.riskProbabilityDetailsModels);
          this.calculodePromedio(this.riskProbabilityDetailsModels);
        }
      
      },  error=>{
        console.log(error);
      }
      
    );
  }


calculodePromedio(_riskProbabilityDetailsModels : Riskprobabilitycalificationdetail){

 
  
  //for (let entry of _riskProbabilityDetailsModels) {
   // console.log(entry.valor); 
//}

}

getRisks(){
    this.riskService.getRisks().subscribe(
      response =>{
        if(response.status == 'success'){
         
          this.riskModels = response.risks;
          console.log(this.riskModels);
          
        }
      
      },  error=>{
        console.log(error);
      }
      
    );

  }

  openCalification() {
    const dialogRef = this.dialog.open(CalificarProbabilidadComponent,{
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
