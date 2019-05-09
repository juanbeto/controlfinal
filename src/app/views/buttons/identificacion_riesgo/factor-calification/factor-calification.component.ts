import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../identificacionriesgo.component';
import { RiskfactorcalificationdetailserviceService } from '../../../../services/risks/riskfactorcalificationdetailservice.service';
import { Riskfactorcalificationdetail } from '../../../../models/riskfactorcalificationdetail';
import { RiskfactorcalificationserviceService } from '../../../../services/risks/riskfactorcalificationservice.service';
import { Riskfactorcalification } from '../../../../models/riskfactorcalification';
import { FactorService } from '../../../../services/risks/factor.service';
import { risksfactor } from '../../../../models/index_risks';
import { FormControl } from '@angular/forms';
import { FactorCalificationDetailComponent } from './factor-calification-detail/factor-calification-detail.component';

@Component({
  selector: 'app-factor-calification',
  templateUrl: './factor-calification.component.html',
  styleUrls: ['./factor-calification.component.scss']
})
export class FactorCalificationComponent implements OnInit {

  public calificationsModels : Riskfactorcalificationdetail;
  public valoresModels : Riskfactorcalificationdetail;
  public usersModels : Riskfactorcalification;
  public factorModels : risksfactor;
  public id :any;
  public riskCalification : Riskfactorcalification;
  public riskCalificationDetail : Riskfactorcalificationdetail;
  public actions: string;
  public form_activities = false;
  public form_activities_update = false;
  public show_activities = false;

  valor = new FormControl('');
idfactor= new FormControl('');
modelFactor= risksfactor;
  constructor( public dialog: MatDialog, public dialogview: MatDialog,
    public dialogRef: MatDialogRef<FactorCalificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    public calificationService :RiskfactorcalificationserviceService,
    public userService :RiskfactorcalificationserviceService,
    public factorService : FactorService,
    public calificationServiceDetail:RiskfactorcalificationdetailserviceService,
    ) { }

  ngOnInit() {
    this.getUserAll();
    this.getCalificationAll();
    this.getFactores();    
    this.riskCalificationDetail = new Riskfactorcalificationdetail(null, null,null,null);
    this.riskCalification= new Riskfactorcalification(null,null,null,null,null);

  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  getCalificationAll(){

    this.calificationService.getCalificationsAll().subscribe(
      response => {
        if(response.status == 'success'){
          this.calificationsModels = response.califications;
        }
      }
    );

  }

  getUserAll(){

    this.userService.getUserAll().subscribe(
      response => {
        if(response.status == 'success'){
          this.usersModels = response.usuarios;
        }
      }
    );

  }

  getValores(){

   // this.calificationService..getvaloresAll().subscribe(
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
      this.factorModels = response.factors;
      //for(i = 0 ;this.factorModels.length;<i;i++ ){
        //this.riskCalificationDetails[] = new Riskfactorcalificationdetail(null, null,null,null);
      //}
    }

  }
);
  }


  ocultarActividad(){
    this.form_activities = false;
    this.form_activities_update = false;
    this.show_activities = false;
  }

  onSubmitFactorCalification(){

    console.log(this.idfactor.value);
    this.calificationService.create(this.riskCalification).subscribe(
     response => {
        console.log(response);
       this.riskCalification = response.proccess;
       console.log("grabo correctamente");
      },
      error => {
        console.log(<any>error);
      }
    );
    

  }

  openDialogEditFactor(id: any){
    const dialogRef4 = this.dialogview.open(FactorCalificationDetailComponent,{
      width: '600px',
  
      data: {
        id: id    },
  
    });
  
    dialogRef4.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

}
