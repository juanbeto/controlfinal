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
 public label_id: string;
  public label_begin: string;
  public label_end: string;
  public label_name: string;
  public label_numerals_iso: string;
  public label_numerals_meci: string;
  public label_numerals: string;
  public label_auditor: string;
  public actions: string;
  public form_activities = false;
  public form_activities_update = false;

  public activitie = new auditactivities(null,null,null,null,null,null,null,null);
  public activitie_update: auditactivities;

  @Input() public activities: auditactivities;
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


  /* onSubmit(_planning: auditplanning){
    console.log(_planning);
    this._planningService.create(_planning).subscribe(
      response => {
        console.log(response);
        this.planning = response.planning;
        this.dialogRef.close();
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  */


 ocultarActividad(){
  this.form_activities = false;
}

edit(){
  
  this.form_activities_update = true;
}
  }
