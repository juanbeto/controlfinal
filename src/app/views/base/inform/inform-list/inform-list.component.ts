import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditinform } from '../../../../models/index_audit';
import { InformService } from '../../../../services/audits/inform.service';

@Component({
  selector: 'app-inform-list',
  templateUrl: './inform-list.component.html',
  styleUrls: ['./inform-list.component.scss']
})
export class InformListComponent implements OnInit {

  public label_title: string;
  public label_name: string;
  public informs: any;
  public actions: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _informService: InformService
  ) {
    this.label_title = 'Lista de Auditorias';
    this.label_name= 'Nombre';
    this.actions = ' ';
  }

  ngOnInit(
    ) {
      this.getInforms();
  }

  getInforms(){
    this._informService.getInforms().subscribe(
      response =>{

        if(response.status == 'success'){
          this.informs = response.informs_list;
          console.log(this.informs);
        }
      },
      error=>{
          console.log(error);
      }
    );
  }

}
