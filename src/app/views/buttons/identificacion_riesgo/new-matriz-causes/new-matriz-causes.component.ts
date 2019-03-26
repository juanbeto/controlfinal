import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogData } from '../identificacionriesgo.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FactorService } from '../../../../services/risks/factor.service';
import { risksfactor, risksprocess, risksasignation } from '../../../../models/index_risks';
import { ProccessService } from '../../../../services/risks/proccess.service';
import { AsignationServiceService } from '../../../../services/risks/asignation-service.service';


@Component({
  selector: 'app-new-matriz-causes',
  templateUrl: './new-matriz-causes.component.html',
  styleUrls: ['./new-matriz-causes.component.scss']
})
export class NewMatrizCausesComponent implements OnInit {
public factorModels : risksfactor;
public proccessModel : risksprocess;
public asignationModel : risksasignation;
 selectedOptions : any[];
 selectOptions;
 opcionSeleccionado: any[];
 verSeleccion:  any[];
  constructor( public dialogRef: MatDialogRef<NewMatrizCausesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private factorServices : FactorService
    , private proccessServices: ProccessService,
    public asignationServices : AsignationServiceService ) { }

  ngOnInit() {
    this.asignationModel = new risksasignation(null, null,null);
    this.getAllProcess();
    this.getAllFactor();
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getAllFactor(){

    this.factorServices.getFactors().subscribe(
      response =>{
        if(response.status == 'success'){
          
          this.factorModels = response.factors;
          console.log(this.factorModels);
          
        }
      
      },  error=>{
        console.log(error);
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


submit(){

  console.log(this.asignationModel);
  this.asignationServices.create(this.asignationModel).subscribe(
  
    response => {
     
      this.asignationModel = response.asignation;
      console.log("asigno los factores correctamente");
    
    },
    error => {
      console.log(<any>error);
    }
  );

   }
  
  
onSelection(e, v){
    this.selectOptions = e.option.value;
 
   console.error(e.option.selected,v); 
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.selectedOptions;
    console.log(this.verSeleccion);
}

  }


