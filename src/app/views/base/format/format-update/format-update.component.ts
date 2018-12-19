import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditformat } from '../../../../models/index_audit';
import { FormatService } from '../../../../services/audits/format.service';

@Component({
  selector: 'app-format-update',
  templateUrl: './format-update.component.html',
  styleUrls: ['./format-update.component.css']
})
export class FormatUpdateComponent implements OnInit {

    public label_title: string;
    public label_name: string;
    public label_id: string;
    public label_code: string;
    public label_version: string;
    public label_format: string;
    public status: string;
    public status_message: string;
    public format: auditformat;
    public formats: auditformat;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _formatService: FormatService

    ) {
      this.label_title = 'Editar Formato';
      this.label_name = 'Nombre';
      this.label_id = '#';
      this.label_code = 'Código';
      this.label_version = 'Version';
    }



    ngOnInit() {
      this._route.params.subscribe(params =>
      {
        this.format = new auditformat(null, null,null,null,null);
        this.getFormat(params['id']);
      });
    }

    getFormat(id){
        this._formatService.getFormat(id).subscribe(
          response => {
            if(response.status == 'success'){
                this.format = response.format;
            }else{
              this._router.navigate(['audits/format']);
            }


          },
          error => {
            console.log(<any>error);
          }
        );
     }

     onSubmit(form){
       this._formatService.update(this.format, this.format.ID).subscribe(
         response =>{
           this._router.navigate(['audits/format']);
         },
         error => {console.log(<any>error)}
       );
     }
}
