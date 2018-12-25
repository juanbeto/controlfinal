import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { risks } from '../../../models/index_risks';
import { ControlService } from '../../../services/risks/control.service';
import { RisksService } from '../../../services/risks/risks.service';
import { auditactivities } from '../../../models/index_audit';


@Component({
  selector: 'app-identificacionriesgo',
  templateUrl: './identificacionriesgo.component.html',
  providers: [ RisksService ],
  
  styles: []
})
export class IdentificacionriesgoComponent implements OnInit {
 public risksmodels : risks;
 public risksTable:risks;
 
 public status_risks: string;
 public status_message: string;
 
  constructor(private http:HttpClient, private riskServices:RisksService ) { }

  ngOnInit() {
    this.getRisksAll();
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
  


  




  }
