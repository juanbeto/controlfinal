import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ControlService } from '../../../services/risks/control.service';
import { riskscontrol } from '../../../models/index_risks';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-analisisriesgo',
  templateUrl: './analisisriesgo.component.html',
  providers: [ ControlService ],
  
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class AnalisisriesgoComponent implements OnInit {
  closeResult: string;
  content :any;
  public controlModel=riskscontrol;
  constructor(private controlServices:ControlService, private modalService: NgbModal) { }

  ngOnInit() {

    this.open(this.content);
   // this.getAllControls();
  }

  getAllControls(){

      this.controlServices.getControls().subscribe(
        response=>{
          if(response.status=='success'){
            this.controlModel=response.risks;
            console.log(this.controlModel);
          }
        },error=>{
          console.log(error);
        }

      );
  }
 

  open(content) {
    const modalRef = this.modalService.open(content);
    modalRef.componentInstance.name = 'World';
  }

}
